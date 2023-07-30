import React, { useState } from 'react';
import styled from 'styled-components';

const Scontainer = styled.div`
    width: 80%;
    margin-top:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    background-color: #d9d9d9;
    padding: 12px;
`

const StitleBox = styled.div`
    width: 90%;
    display:flex;
    justify-content:space-between;
    margin: 0px 10px 12px 10px;
`

const SnickName = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const Sdate = styled.div`
    font-size: 18px;
`

const ScommentBox = styled.div`
    width: 90%;
    hieght: 50px;
    display:flex;
    justify-content:left;
    margin-left: 12px;
`  


const Comment:React.FC = () => {
    const [commentData, setCommentData] = useState({
        nickName: '지나가던 행인',
        date: '2023-07-23',
        comment: '화이팅 하세요!'
    });
    return (
        <Scontainer>
            <StitleBox>
                <SnickName>{commentData.nickName}</SnickName>
                <Sdate>{commentData.date}</Sdate>
            </StitleBox>
            <ScommentBox>{commentData.comment}</ScommentBox>
        </Scontainer>
    );
};

export default Comment;