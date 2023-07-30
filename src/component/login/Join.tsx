import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginProps } from './Login';

const SmainBtnBox = styled.div`
    width: 100%;
    display:flex;
    justify-content:left;
`

const SmainBtn = styled.div`
    width: 20px;
    height: 20px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(-45deg);
    cursor:pointer;
`

const Stitle = styled.span`
    width: 100%;
    text-align:center;
    font-size:30px;
    font-weight: bold;
    margin-top:50px;
`

const SloginBox = styled.form`
    height:30vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const SinputBox = styled.div`
    width: 70%;
    display:flex;
    justify-content:space-around;
    margin-bottom: 20px;
`

const Stext = styled.span`
    width: 170px;
    min-width: 170px;
    text-align:center;
    font-size: 24px;
    font-weight: regular;
`

const Sinput = styled.input`
    height: 40px;
    width: 475px;
    padding: 6px;
    border: 1px solid black;
    box-shadow: 1px 1px 1px grey;
`

const SbtnBox = styled.div`
    width: 30%;
    display:flex;
    justify-content:space-around;
    margin-top: 30px;
`

const SpushBtn = styled.button`
    width: 100px;
    height: 35px;
    border:none;
    border-radius: 20px;
    background-color: white;
    box-shadow: 1px 1px 1px grey;
    cursor:pointer;
    font-weight:regular;
    font-size: 16px;
`

const Join:React.FC<LoginProps> = (props) => {
    const {setLogin} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [nickName, setNickName] = useState('');

    const inputEmail = (e:any)=>{
        setEmail(e.target.value);
    }
    const inputPassword = (e:any)=>{
        setPassword(e.target.value);
    }
    const inputCheckPassword = (e:any)=>{
        setCheckPassword(e.target.value);
    }
    const inputNickName = (e:any)=>{
        setNickName(e.target.value);
    }

    return (
        <>
            <SmainBtnBox>
                <SmainBtn onClick={()=>setLogin(0)} />
            </SmainBtnBox>
            <Stitle>회원가입</Stitle>
            <SloginBox>
                <SinputBox>
                    <Stext>이메일</Stext>
                    <Sinput type={'email'} value={email} onChange={(e)=>inputEmail(e)} />
                </SinputBox>
                <SinputBox>
                    <Stext>비밀번호</Stext>
                    <Sinput type={'password'} value={password} onChange={(e)=>inputPassword(e)} />
                </SinputBox>
                <SinputBox>
                    <Stext>비밀번호 확인</Stext>
                    <Sinput type={'password'} value={checkPassword} onChange={(e)=>inputCheckPassword(e)} />
                </SinputBox>
                <SinputBox>
                    <Stext>닉네임</Stext>
                    <Sinput type={'text'} value={nickName} onChange={(e)=>inputNickName(e)} />
                </SinputBox>
                <SbtnBox>
                    <SpushBtn>회원가입</SpushBtn>
                </SbtnBox>
            </SloginBox>
        </>
    );
};

export default Join;