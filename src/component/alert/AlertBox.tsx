import styled from "styled-components";

const AlertBox = () => {
  const alertText = "화면을 나가면 작성된 내용은 사라집니다. 그래도 떠나시겠습니까?";
  return (
    <AlertBackground>
      <AlertContainer>{alertText}</AlertContainer>
    </AlertBackground>
  );
};

const AlertBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 900;
`;
const AlertContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 20%;
  height: 15%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  z-index: 1000;
  display: flex;

  align-items: center;
  padding: 12px;
`;

export default AlertBox;
