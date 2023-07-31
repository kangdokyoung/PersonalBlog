import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export type LoginProps = {
    setLogin: React.Dispatch<React.SetStateAction<number>>,
}

const Login:React.FC<LoginProps> = (props) => {
    const {setLogin} = props;


    return (
        <>
            <SmainBtnBox>
                <Link to={'/'}>
                    <SmainBtn />
                </Link>
            </SmainBtnBox>
            <Stitle>로그인</Stitle>
            <SloginBox>
                <SinputBox>
                    <Stext>이메일</Stext>
                    <Sinput type={'email'} />
                </SinputBox>
                <SinputBox>
                    <Stext>비밀번호</Stext>
                    <Sinput type={'password'} />
                </SinputBox>
                <SbtnBox>
                    <SpushBtn>로그인</SpushBtn>
                    <SpushBtn onClick={()=>setLogin(1)}>회원가입</SpushBtn>
                </SbtnBox>
            </SloginBox>
        </>
    );
};

export default Login;




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
    width: 150px;
    min-width: 100px;
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
