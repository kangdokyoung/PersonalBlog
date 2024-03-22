import { Request, Response } from "express";
import mysql from "mysql";
import { jwtKey, sqlkey } from "../../secretKey";
import jwt from "jsonwebtoken";

const con = mysql.createConnection(sqlkey);

exports.readUserData = async (req: Request, res: Response) => {
  const { userId, userPassword } = req.body;
  await con.query("select userPassword, userNickName, token from user left join rft on rft.userId = user.userId where user.userId = ?", [userId], async (error, row1, fields) => {
    if (error) throw error;

    // 입력 정보 오류
    if (!row1[0]) {
      console.log("error1");
      return res.send({ success: 1 });
    }

    if (row1[0].userPassword !== userPassword) {
      console.log("error2", row1[0].password, userPassword);
      return res.send({ success: 2 });
    }

    let rtoken = jwt.sign(
      {
        type: "JWT",
        userId: userId,
        userPassword: userPassword,
      },
      jwtKey,
      {
        expiresIn: "30d",
        issuer: "admin",
      }
    );

    //refreshToken이 없을 경우
    if (!row1[0].token) {
      //토큰생성
      await con.query("INSERT INTO rft VALUES(?, ?)", [userId, rtoken]);
    } else {
      //있을경우 토큰 갱신
      await con.query("UPDATE rft SET token = ? where userId = ?", [rtoken, userId]);
    }

    let token = jwt.sign(
      {
        type: "JWT",
        userPassword: userPassword,
        userId: userId,
      },
      jwtKey,
      {
        expiresIn: "15m",
        issuer: "admin",
      }
    );
    return res.json({ token: token, userNickName: row1.userNickName });
  });
};
