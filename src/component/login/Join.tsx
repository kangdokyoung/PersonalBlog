import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginProps } from "./Login";

const Join: React.FC<LoginProps> = (props) => {
  const { setLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  const inputEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const inputCheckPassword = (e: any) => {
    setCheckPassword(e.target.value);
  };
  const inputNickName = (e: any) => {
    setNickName(e.target.value);
  };

  const checkFunction = () => {
    if (password && checkPassword && password === checkPassword) {
      axios({
        url: `http://localhost:3001/createNewAccount`,
        method: "post",
        withCredentials: true,
        data: {
          userId: email,
          userPassword: password,
          userNickName: nickName,
        },
      }).then((res) => {
        if (res.data.success === 0) {
          alert("가입이 완료되었습니다.");
          navigate("/");
        } else if (res.data.success === 1) {
          alert("이미 가입된 이메일입니다.");
        } else {
          alert("이미 존재하는 닉네임 입니다.");
        }
      });
    } else {
      alert("비밀번호와 확인 란이 일치하지 않습니다.");
    }
  };

  return (
    <>
      <SmainBtnBox>
        <SmainBtn onClick={() => setLogin(0)} />
      </SmainBtnBox>
      <Stitle>회원가입</Stitle>
      <SloginBox>
        <SinputBox>
          <Stext>이메일</Stext>
          <Sinput type={"email"} value={email} onChange={(e) => inputEmail(e)} required />
        </SinputBox>
        <SinputBox>
          <Stext>비밀번호</Stext>
          <Sinput type={"password"} minLength={6} value={password} onChange={(e) => inputPassword(e)} required />
        </SinputBox>
        <SinputBox>
          <Stext>비밀번호 확인</Stext>
          <Sinput type={"password"} minLength={6} value={checkPassword} onChange={(e) => inputCheckPassword(e)} required />
        </SinputBox>
        <SinputBox>
          <Stext>닉네임</Stext>
          <Sinput type={"text"} value={nickName} onChange={(e) => inputNickName(e)} required />
        </SinputBox>
        <SbtnBox>
          <SpushBtn type="button" onClick={checkFunction}>
            회원가입
          </SpushBtn>
        </SbtnBox>
      </SloginBox>
    </>
  );
};

export default Join;

const SmainBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;

const SmainBtn = styled.div`
  width: 20px;
  height: 20px;
  border-top: 2px solid black;
  border-left: 2px solid black;
  transform: rotate(-45deg);
  cursor: pointer;
`;

const Stitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;
`;

const SloginBox = styled.form`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SinputBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Stext = styled.span`
  width: 170px;
  min-width: 170px;
  text-align: center;
  font-size: 24px;
  font-weight: regular;
`;

const Sinput = styled.input`
  height: 40px;
  width: 475px;
  padding: 6px;
  border: 1px solid black;
  box-shadow: 1px 1px 1px grey;
`;

const SbtnBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const SpushBtn = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px grey;
  cursor: pointer;
  font-weight: regular;
  font-size: 16px;
`;
