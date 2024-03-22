import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../src/keys/secretKey";

const con = mysql.createConnection(sqlkey);

exports.readMainContent = (req: Request, res: Response) => {
  con.query("SELECT boardNum, boardTitle, boardDate, boardCategory FROM blog.board ORDER BY boardViews ASC", (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
