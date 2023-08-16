import { Request, Response } from 'express';
import mysql from 'mysql';
import { sqlkey } from '../../secretKey';

const con = mysql.createConnection(sqlkey);

exports.readMain = (req:Request,res:Response)=>{
    let name = req.body.name

    con.query('SELECT boardTitle, boardDate FROM blog.board where boardCategory = ? ORDER BY boardViews ASC',[name], (error, row1, fields)=>{
        if(error) throw error;
        res.send({success: 0, data: row1})
        console.log(row1);
    })
}