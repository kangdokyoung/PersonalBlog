import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../secretKey";
import { Jwt } from "jsonwebtoken";

const con = mysql.createConnection(sqlkey);

exports.readUserData = (req: Request, res: Response) => {
  const { userId, userPassword } = req.body;
  con.query("SELECT userNum, userNickName FROM user WHERE userId = ? AND userPassword = ?", [userId, userPassword], (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
