import React from 'react';
import Main from '../component/main/Main';
import Sidebar from '../component/sidebar/Sidebar';
import styled from 'styled-components';

const Scontainer = styled.div`
    position:relative;

`

const MainPage:React.FC = () => {
    return (
        <Scontainer>
            <Sidebar />
            <Main />
        </Scontainer>
    );
};

export default MainPage;