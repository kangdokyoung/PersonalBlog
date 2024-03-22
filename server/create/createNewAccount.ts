import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../src/keys/secretKey";

const con = mysql.createConnection(sqlkey);

exports.createNewAccount = (req: Request, res: Response) => {
  let { userId, userPassword, userNickName } = req.body;

  con.query("SELECT * FROM user", (error, row1, fields) => {
    if (error) throw error;
    let idArray = row1.map((data: any) => {
      return data.userId;
    });

    let nickNameArray = row1.map((data: any) => {
      return data.userNickName;
    });

    if (!idArray.includes(userId)) {
      if (!nickNameArray.includes(userNickName)) {
        con.query("INSERT INTO user values(default, ?, ?, ?, default) ", [userId, userPassword, userNickName], (error, row1, fields) => {
          if (error) throw error;
          res.send({ success: 0, data: row1 });
          console.log(row1);
        });
      } else {
        res.send({ success: 2 });
      }
    } else {
      res.send({ success: 1 });
    }
  });
};
