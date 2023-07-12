import React from 'react';
import styled, { css } from 'styled-components';


type PostTitle = {
    name: string,
}


const Scontainer = styled.div<PostTitle>`
    height: 400px;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 2px 2px 2px grey;
    margin:30px;
    @media screen and (max-width: 768px){
        width: 90%;
    }
    ${(props)=>{
        if (props.name == '인기글'){
            return css`
                width: 85%;
            `
        } else {
            return css`
                width:500px;
                min-width: 450px;
            `
        }
    }}
`

const Sname = styled.div`
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    text-align:center;
    margin-top: 8px;
`

const SpostList = styled.ul`
    height: 70%;
    width: 100%;
    margin-top:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Spost = styled.li`
    width: 80%;
    list-style:none;
    cursor:pointer;
    margin: 14px;
    display:flex;
    justify-content:space-between;
    transition: all 0.22s;
    :hover{
        background-color: lightgrey;
    }
`

const Stitle = styled.div`
    color: blue;
    font-size: 20px;
    font-wight: bold;
`

const Sdate = styled.div`
    font-size: 14px;
    display:flex;
    align-items:center;
`

const PostBox:React.FC<PostTitle> = (props) => {
    const { name } = props;

    return (
        <Scontainer name={name}>
            <Sname>{name}</Sname> 
            <SpostList>
                <Spost title='적당한 글'>
                    <Stitle>적당한 글</Stitle>
                    <Sdate>2023.07.01</Sdate>
                </Spost>
                <Spost title='적당한 글'>
                    <Stitle>적당한 글</Stitle>
                    <Sdate>2023.07.01</Sdate>
                </Spost>
                <Spost title='적당한 글'>
                    <Stitle>적당한 글</Stitle>
                    <Sdate>2023.07.01</Sdate>
                </Spost>
                <Spost title='적당한 글'>
                    <Stitle>적당한 글</Stitle>
                    <Sdate>2023.07.01</Sdate>
                </Spost>
                
            </SpostList>
        </Scontainer>
    );
};

export default PostBox;