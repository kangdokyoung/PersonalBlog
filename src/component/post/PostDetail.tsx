import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Spost = styled.div`
    width: 90%;
    height: 200px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: #d9d9d9;
    cursor:pointer;
    margin-bottom: 30px;
`

const SpostThumb = styled.div`
    height: 180px;
    width: 180px;
    margin:10px;
    background-color: white;
`

const SpostDetailBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:left;
    flex-grow:1;
    height: 88%;
`

const SpostTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
`

const SpostDetail = styled.div`
    font-size: 18px;
`

const PostDetail:React.FC = () => {
    return (
        <Link to={'/post/1'} style={{textDecoration:'none', color: 'black'}}>
            <Spost>
                <SpostThumb />
                <SpostDetailBox>
                    <SpostTitle>제목</SpostTitle>
                    <SpostDetail>이 글 내용 뭐시기</SpostDetail>
                </SpostDetailBox>
            </Spost>
        </Link>
    );
};

export default PostDetail;