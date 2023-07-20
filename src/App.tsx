import React from "react";
import { createGlobalStyle } from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./component/main/Main";
import Sidebar from "./component/sidebar/Sidebar";
import styled from "styled-components";
import Footer from "./component/footer/Footer";
import Join from "./component/login/Join";
import Post from "./component/post/Post";
import LoginPage from "./page/LoginPage";
import PostMain from "./component/post/PostMain";

const Sbackground = styled.div`
    background-color: #f3f3f3;
    position:relative;
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
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/post/1" element={<PostMain />} />
                </Routes>
                <Footer />
                </BrowserRouter>
            }
        </Sbackground>
    )
};

export default App;