import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Scontainer = styled.section`
    position: fixed;
    width : 400px;
    z-index:1;
    @media screen and (max-width: 768px){
        transform: translateX(-400px);
    }
`

const Sbackgorund = styled.div`
    background-color: #c1c1c1;
    width: 350px;
    height: 900px;
    border-radius: 20px;
    margin-left: 40px;
    margin-top: 40px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    @media screen and (max-height: 980px){
        height: 80vh;
        min-height: 500px;
    }
`


const Sprofile = styled.div`
    width: 280px;
    height: 280px;
    border-radius: 50%;
    margin-top: 20px;
    @media screen and (max-height: 980px){
        display:none;
    }
`

const Simg = styled.img`
    width: 100%;
    height: 100%;
    border-radius:50%;
    z-index:1;
    user-select:none;
`

const SnameBox = styled.nav`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Sname = styled.div`
    font-weight: bold;
    font-size: 22px;
    user-select:none;
`

const Sintro = styled.div`
    user-select:none;
`

const SbtnBox = styled.nav`
    display:flex;
    width: 40%;
    justify-content: space-between;
`

const Sbtn = styled.a`
    transition: all 0.1s;
    :hover{
        transform: scale(1.1);
    }
`

const Scategory = styled.ul`
    width: 70%;
    border-top: 1px solid black;
    padding:8px;
    margin-bottom: 100px;
`

const ScategoryList = styled.li`
    list-style:none;
    font-size: 20px;
    margin: 10px 0px 20px 8px;
    cursor:pointer;
    transition: all 0.1s;
    user-select:none;
    :hover{
        background-color: #a8a8a8;
        transform: translateX(6px);
        font-weight: bold;
        color: white;
    }
`

const SvisitBox = styled.nav`
    display:flex;
    justify-content: space-between;
    width: 60%;
`

const Svisit = styled.div`
    font-weight: bold;
    user-select:none;
`

const SendBox = styled.nav`
    display:flex;
    justify-content:space-between;
    width: 60%;
`

const Sresume = styled.a`
    text-decoration:none;
    color: black;
    background-color: #D9D9D9;
    border-radius: 12px;
    width: 80px;
    height: 33px;
    display:flex;
    justify-content:center;
    align-items:center;
    user-select:none;
`

const Slogin = styled.div`
    background-color: #D9D9D9;
    border-radius: 12px;
    width: 80px;
    height: 33px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    user-select:none;
`

const Sidebar:React.FC = () => {

    const profileImg = 'https://ifh.cc/g/ZTYyjD.webp';

    const handleCopyClipBoard = async (text: string) =>{
        try{
            await navigator.clipboard.writeText(text);
            alert('이메일 주소가 복사되었습니다.')
        } catch (e){
            alert('복사에 실패했습니다.')
        }
    }
    return (
        <Scontainer>
            <Sbackgorund>
                <Sprofile>
                    <Simg alt='profileImge' src={profileImg} />
                </Sprofile>
                <SnameBox>
                    <Link to={'/'} style={{textDecoration:"none", color:"black"}}>
                        <Sname>강도경</Sname>
                    </Link>
                    <Sintro>블로그에 오신걸 환영합니다!</Sintro>
                </SnameBox>
                <SbtnBox>
                    <Sbtn href='https://github.com/kangdokyoung' target="_blank"><AiFillGithub color='black' size={'2em'} /></Sbtn>
                    <Sbtn href='#' onClick={()=>{handleCopyClipBoard('ehrud6672@naver.com')}}><AiOutlineMail color='black' size={'2em'} /></Sbtn>
                </SbtnBox>
                <Scategory>
                    <ScategoryList>전체 글</ScategoryList>
                    <Link to={'/post'} style={{textDecoration:"none", color:"black"}}>
                        <ScategoryList>공지</ScategoryList>
                    </Link>
                    <ScategoryList>코딩</ScategoryList>
                    <ScategoryList>etc</ScategoryList>
                </Scategory>
                <SvisitBox>
                    <Svisit>오늘 방문: N</Svisit>
                    <Svisit>이달 방문: N</Svisit>
                </SvisitBox>
                <SendBox>
                    <Sresume href='https://kangdokyoung.github.io/resume/' target="_blank">resume</Sresume>
                    <Link to={'/login'} style={{textDecoration:'none', color:'black'}}>
                        <Slogin>로그인</Slogin>
                    </Link>
                </SendBox>
            </Sbackgorund>
        </Scontainer>
    );
};

export default Sidebar;