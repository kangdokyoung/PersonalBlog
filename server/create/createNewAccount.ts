import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../secretKey";

const con = mysql.createConnection(sqlkey);

exports.createNewAccount = (req: Request, res: Response) => {
  let { userId, userPassword, userNickName } = req.body;

  con.query("SELECT * FROM user", (error, row1, fields) => {
    if (error) throw error;

    const checkId = row1.foreach((data: any, i: number): boolean => {
      if (data.userId === userId) return false;
      else return true;
    });

    if (checkId) {
      con.query("INSERT INTO user values(default, ?, ?, ?, default) ", [userId, userPassword, userNickName], (error, row1, fields) => {
        if (error) throw error;
        res.send({ success: 0, data: row1 });
        console.log(row1);
      });
    } else {
      res.send({ success: 1 });
    }
  });
};
