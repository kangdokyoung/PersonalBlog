import React from 'react';
import styled from 'styled-components';

const Sfooter = styled.footer`
    position:absolute;
    height: 60px;
    width: 60vw;
    bottom:0;
    text-align:center;
    margin-left: 400px;
    @media screen and (max-width: 768px){
        margin:0px;
        width: 100vw;
    }
`

const ScopyRight = styled.span`
    font-size: 22px;
`

const Footer:React.FC = () => {
    return (
        <Sfooter>
            <ScopyRight>Copyright &#169; 2023- kangdokyoung. All right reserved.</ScopyRight>
        </Sfooter>
    );
};

export default Footer;