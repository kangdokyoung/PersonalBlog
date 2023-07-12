import React,{useState} from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import PostBox from './PostBox';

const SoutContainer = styled.div`
    position:relative;
`

const Scontainer = styled.div`
    width: 65vw;
    min-height: 100vh;
    padding-bottom: 100px;
    position:relative;
    overflow:visible;
    margin: 40px 0px 0px 500px;
    display:flex;
    flex-wrap: wrap;
    @media screen and (max-width: 768px){
        margin-left: 0px;
        overflow:visible;
        width: 100vw;
    }
`

const Main:React.FC = () => {
    const post = ['인기글', '공지사항', '전체 글', '코딩', '기타 글']
    return (
        <SoutContainer>
            <Scontainer>
                {post.map((data, i)=>{
                    return(<PostBox key={i} name={data} />)
                })}
            </Scontainer>
            <Footer />
        </SoutContainer>
    );
};

export default Main;