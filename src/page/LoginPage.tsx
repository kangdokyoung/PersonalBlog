import React, { useState } from 'react';
import styled from 'styled-components';
import { SiNaver, SiKakaotalk } from 'react-icons/si'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Login from '../component/login/Login';
import Join from '../component/login/Join';

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

const LoginPage:React.FC = () => {
    const [login, setLogin] = useState<number>(0);
    
    const Rest_api_key='ed4e4e31919eb02a881edce8ca08108a' //REST API KEY
    const redirect_uri = 'http://localhost:3000' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.open(kakaoURL, 'pop01', 'top=100, left=1000, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no')
    }


    return (
        <Scontainer>
            {login === 0 ? <Login setLogin={setLogin} /> : <Join setLogin={setLogin} />}
            <SoauthBox>
                <SoauthBtn><BsGoogle color='black' size={'2em'} /></SoauthBtn>
                <SoauthBtn><SiNaver color='rgb(3, 199, 90)' size={'2em'} /></SoauthBtn>
                <SoauthBtn onClick={handleLogin}><SkakaoBgd><SiKakaotalk color='yellow' size={'2em'}  /></SkakaoBgd></SoauthBtn>
            </SoauthBox>
        </Scontainer>
    );
};

export default LoginPage;