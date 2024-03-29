import express from "express";
import cors from "cors";
import helmet from "helmet";

import mysql from "mysql";
import { sqlkey } from "../src/keys/secretKey";

export const port = 3001;

const app = express();
app.use(express.json());

const connection = mysql.createConnection(sqlkey);

//MySQL 서버 연결
connection.connect((error) => {
  if (error) {
    console.log("Connection Error", error);
  }
});

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`server run in ${port}`);
});

//-------------------------------------------------------------------------

const { readMainContent } = require("./read/readMainContent");
const { readBoardList } = require("./read/readBoardList");
const { readBoardDetail } = require("./read/readBoardDetail");
const { createNewPost } = require("./create/createNewPost");
const { createNewAccount } = require("./create/createNewAccount");
const { readUserData } = require("./read/readUserData");

//-------------------------------------------------------------------------

app.get("/readMainContent", async (req, res) => {
  await readMainContent(req, res);
});

app.get("/readBoardList/:category", async (req, res) => {
  await readBoardList(req, res);
});

app.get("/readBoardDetail/:boardNum", async (req, res) => {
  await readBoardDetail(req, res);
});

app.post("/createNewPost", async (req, res) => {
  await createNewPost(req, res);
});

app.post("/createNewAccount", async (req, res) => {
  await createNewAccount(req, res);
});

app.post("/readUserData", async (req, res) => {
  await readUserData(req, res);
});
