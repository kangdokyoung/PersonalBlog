import React from "react";
import { createGlobalStyle } from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./component/main/Main";
import Sidebar from "./component/sidebar/Sidebar";
import Login from "./component/login/Login";
import styled from "styled-components";

const Sbackground = styled.div`
    background-color: #f3f3f3;
`


const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  padding:0px;
  margin: 0px;
}
`;

const App: React.FC = () => {
    return (
        <Sbackground>
            <GlobalStyle />
            {
                <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                </BrowserRouter>
            }
        </Sbackground>
    )
};

export default App;