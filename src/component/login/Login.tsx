import React from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import { SiNaver, SiKakaotalk } from 'react-icons/si'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const SoutContainer = styled.div`
    position:relative;
`

const Scontainer = styled.div`
    width: 60vw;
    min-height: 90vh;
    padding-bottom: 100px;
    position:relative;
    overflow:visible;
    margin: 40px 0px 0px 500px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    @media screen and (max-width: 768px){
        margin-left: 0px;
        overflow:visible;
        width: 100vw;
    }
`

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

const SoauthBox = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
`

const SoauthBtn = styled.button`
    width: 60px;
    height: 60px;
    margin: 15px;
    display:flex;
    border: none;
    border-radius: 20px;
    justify-content:center;
    align-items:center;
    background-color: #d9d9d9;
    :hover{
        cursor:pointer;
    }
`

const SkakaoBgd = styled.div`
    background-color: black;
    width: 25px;
    height: 25px;
    border-radius:20px;
`

const Login:React.FC = () => {
    return (
        <SoutContainer>
            <Scontainer>
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
                        <SpushBtn>회원가입</SpushBtn>
                    </SbtnBox>
                </SloginBox>
                <SoauthBox>
                    <SoauthBtn><BsGoogle color='black' size={'2em'} /></SoauthBtn>
                    <SoauthBtn><SiNaver color='rgb(3, 199, 90)' size={'2em'} /></SoauthBtn>
                    <SoauthBtn><SkakaoBgd><SiKakaotalk color='yellow' size={'2em'}  /></SkakaoBgd></SoauthBtn>
                </SoauthBox>
            </Scontainer>
            <Footer />
        </SoutContainer>
    );
};

export default Login;