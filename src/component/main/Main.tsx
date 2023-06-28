import React,{useState} from 'react';
import styled from 'styled-components';

const Scontainer = styled.div`
    width: 60vw;
    height: 950px;
    overflow:auto;
    margin-left: 500px;
    margin-top: 40px;
    display:flex;
    flex-wrap: wrap;
    @media screen and (max-width: 768px){
        margin-left: 0px;
        overflow:visible;
    }
`

const ScategoryBox = styled.div`
    width:500px;
    min-width: 500px;
    height: 400px;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 2px 2px 2px grey;
    margin:30px;
`

const Sname = styled.div`
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    text-align:center;
    margin-top: 8px;
`

const SbestBox = styled.div`

`
const Main:React.FC = () => {
    const [post, setPost] = useState([0, 1, 2, 3])
    return (
        <Scontainer>
            <ScategoryBox>
                <Sname>공지사항</Sname>
            </ScategoryBox>
            <ScategoryBox>
                <Sname>전체 글</Sname>
            </ScategoryBox>
            <ScategoryBox>
                <Sname>코딩</Sname>
            </ScategoryBox>
            <ScategoryBox>
                <Sname>기타 글</Sname>
            </ScategoryBox>
            <SbestBox>
                <Sname>인기 글</Sname>
            </SbestBox>
        </Scontainer>
    );
};

export default Main;