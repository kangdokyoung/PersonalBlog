import { Request, Response } from "express";
import mysql from "mysql";
import { sqlkey } from "../../secretKey";

const con = mysql.createConnection(sqlkey);

exports.readBoardList = (req: Request, res: Response) => {
  let category = req.params.category;

  console.log(category);

  con.query("SELECT boardNum, boardTitle, boardContent FROM blog.board where boardCategory = ?", [category], (error, row1, fields) => {
    if (error) throw error;
    res.send({ success: 0, data: row1 });
    console.log(row1);
  });
};
