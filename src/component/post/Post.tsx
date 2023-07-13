import React from 'react';
import styled from 'styled-components';

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

const Stitle = styled.div`
    width: 100%;
    height: 10%;
    text-align:left;
    font-size: 30px;
    font-weight: bold;
`

const SpostBox = styled.div`
    width: 100%;
    height: 80%;
    display:flex;
    flex-direction:column;
    justify-content:
`

const Post:React.FC = () => {
    return (
        <Scontainer>
            <Stitle>공지</Stitle>
            <SpostBox></SpostBox>
        </Scontainer>
    );
};

export default Post;