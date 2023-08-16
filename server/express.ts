import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import mysql from 'mysql';
import {sqlkey} from '../secretKey'

export const port = 3001;

const app = express();
app.use(express.json());
 
const connection = mysql.createConnection(sqlkey);

//MySQL 서버 연결
connection.connect((error)=>{
    if (error) {
        console.log('Connection Error', error)
    }
});

app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true,
}));


app.listen(port, ()=>{console.log(`server run in ${port}`)});

//-------------------------------------------------------------------------

const {readMainContent} = require('./read/readMainContent');



//-------------------------------------------------------------------------

app.get('/readMain', (req, res)=>{
    readMainContent(req, res)
});