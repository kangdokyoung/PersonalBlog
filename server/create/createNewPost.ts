import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../src/keys/secretKey";

const con = mysql.createConnection(sqlkey);

exports.createNewPost = (req: Request, res: Response) => {
  let { boardCategory, boardTitle, boardContent } = req.body;

  con.query("INSERT INTO board values(default, ?, ?, ?, NOW(), default, 1) ", [boardCategory, boardTitle, boardContent], (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
