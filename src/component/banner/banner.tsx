import axios from "axios";
import { useState } from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type Span = {
  isClick: boolean;
  index?: number;
};

const Banner = () => {
  const [bannerToggle, setBannerToggle] = useState(false);
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("이메일 주소가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <BannerContainer>
      <button
        onClick={() =>
          axios({
            url: `http://localhost:3001/createNewAccount`,
            method: "post",
            withCredentials: true,
          })
        }
      >
        asdf
      </button>
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <Logo>DuckGyu</Logo>
      </Link>
      <ButtonContainer>
        <Sbtn href="https://github.com/kangdokyoung" target="_blank">
          <AiFillGithub color="black" size={"2em"} />
        </Sbtn>
        <Sbtn
          onClick={() => {
            handleCopyClipBoard("ehrud6672@naver.com");
          }}
        >
          <AiOutlineMail color="black" size={"2em"} />
        </Sbtn>
        <Sbtn href="https://kangdokyoung.github.io/resume/" target="_blank">
          <CgNotes color="black" size={"2em"} />
        </Sbtn>
        <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
          <Slogin>로그인</Slogin>
        </Link>
      </ButtonContainer>
      <SmenuContainer>
        <SmenuToggle onClick={() => setBannerToggle(!bannerToggle)}>
          <SmenuSpan isClick={bannerToggle} index={1} />
          <SmenuSpan isClick={bannerToggle} index={2} />
          <SmenuSpan isClick={bannerToggle} index={3} />
        </SmenuToggle>
      </SmenuContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5% 0px 5%;
  background-color: rgb(217, 217, 217);
  z-index: 10;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Sbtn = styled.a`
  transition: all 0.1s;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }
`;

const Slogin = styled.span`
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  font-size: 18px;
  :hover {
    transform: scale(1.1);
  }
`;

const SmenuContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const SmenuToggle = styled.div`
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  position: relative;
  width: 50px;
  height: 44px;
  margin-top: 10px;
  cursor: pointer;
`;

const SmenuSpan = styled.span<Span>`
  display: block;
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 4px;
  transition: all 0.3s;
  ${(props) => {
    if (props.isClick === true) {
      if (props.index === 1) {
        return css`
          transform: translateY(14px) rotate(-45deg);
        `;
      } else if (props.index === 2) {
        return css`
          opacity: 0;
        `;
      } else if (props.index === 3) {
        return css`
          transform: translateY(-14px) rotate(45deg);
        `;
      }
    }
  }};
`;

export default Banner;
