import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../secretKey";

const con = mysql.createConnection(sqlkey);

exports.createNewAccount = (req: Request, res: Response) => {
  let { userId, userPassword, userNickName } = req.body;

  con.query("INSERT INTO user values(default, ?, ?, ?, default) ", [userId, userPassword, userNickName], (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
