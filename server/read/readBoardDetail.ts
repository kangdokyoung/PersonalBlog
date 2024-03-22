import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../src/keys/secretKey";

const con = mysql.createConnection(sqlkey);

exports.readBoardDetail = (req: Request, res: Response) => {
  let number = req.params.boardNum;

  con.query("SELECT boardTitle, boardContent, boardDate, boardNum FROM blog.board where boardNum = ?", [number], (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
