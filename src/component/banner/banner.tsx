import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
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
      <Logo>DuckGyu</Logo>
      <ButtonContainer>
        <SbtnBox>
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
        </SbtnBox>

        <SendBox>
          <Sresume href="https://kangdokyoung.github.io/resume/" target="_blank">
            resume
          </Sresume>
          <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
            <Slogin>로그인</Slogin>
          </Link>
        </SendBox>
      </ButtonContainer>
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
`;

const SbtnBox = styled.nav`
  display: flex;
  width: 40%;
  justify-content: space-between;
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

const SendBox = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const Sresume = styled.a`
  text-decoration: none;
  color: black;
  background-color: #d9d9d9;
  border-radius: 12px;
  width: 80px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Slogin = styled.div`
  background-color: #d9d9d9;
  border-radius: 12px;
  width: 80px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export default Banner;
