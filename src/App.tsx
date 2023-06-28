import React from "react";
import { createGlobalStyle } from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "./page/MainPage";

const GlobalStyle = createGlobalStyle`

 *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
 }
`

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            {
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
                </BrowserRouter>
            }
        </>
    )
};

export default App;