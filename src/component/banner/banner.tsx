import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <Logo>DuckGyu</Logo>
      <ButtonContainer>adfs</ButtonContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  background-color: #d9d9d9;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 22px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Banner;
