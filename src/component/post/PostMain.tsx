import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const PostMain:React.FC = () => {
    const [comment, setComment] = useState('');

    const inputComment = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setComment(e.target.value)
    }
    return (
        <Scontainer>
            <SmainBox>
                <Stitle>코딩중</Stitle>
                <Sdate>2023.07.13</Sdate>
                <SMain>
                    ㅁㄴㅇㄹ
                </SMain>
                <ScommentBox>
                    <SwriteBox>
                        <Swirte maxLength={200} placeholder='댓글 작성하기' onChange={(e)=>inputComment(e)} value={comment} />
                        <SsubmitBtn>입력</SsubmitBtn>
                    </SwriteBox>
                    <Comment />
                </ScommentBox>
            </SmainBox>
            
        </Scontainer>
    );
};

export default PostMain;


const Scontainer = styled.div`
    width: 60vw;
    min-height: 90vh;
    padding-bottom: 100px;
    position:relative;
    overflow:visible;
    margin-left: 500px;
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

const SmainBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width: 100%;
`

const Stitle = styled.div`
    width: 100%;
    font-size:30px;
    font-weight: bold;
    text-align:left;
    margin-bottom: 20px;
`

const Sdate = styled.div`
    width: 100%;
    text-align:left;
    font-size: 14px;
    margin-bottom: 20px;
`

const SMain = styled.div`
    flex-grow:1;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    font-size: 20px;
    height: 50vh;
    padding: 10px;
`

const ScommentBox = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const SwriteBox = styled.div`
    width: 100%;
    height: 80px;
    display:flex;
    justify-content:center;
`


const Swirte = styled.input`
    width: 75%;
    height: 70px;
    background-color: white;
    margin: 20px;
    border-radius:20px;
    padding:20px;
    resize:none;
`

const SsubmitBtn = styled.button`
    width: 12%;
    height: 70px;
    cursor:pointer;
    border-radius: 20px;
    margin:20px;
`
