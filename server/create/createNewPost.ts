import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../secretKey";

const con = mysql.createConnection(sqlkey);

exports.createNewPost = (req: Request, res: Response) => {
  let { boardCategory, boardTitle, boardContent } = req.params;

  con.query("INSERT INTO board values(default, ?, ?, ?, now(), default, 1, 1) ", [], (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
