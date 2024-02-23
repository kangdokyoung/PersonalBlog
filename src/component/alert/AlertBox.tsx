import { useEffect, useState } from "react";
import styled from "styled-components";

type AlertType = {
  isOpen: boolean
}

const AlertBox = () => {
  const alertText = "화면을 나가면 작성된 내용은 사라집니다. 그래도 떠나시겠습니까?";
  const [openState] = useState<boolean>(false)
  useEffect(()=>{

  },[])
  return (
    <AlertBackground isOpen={openState}>
      <AlertContainer>
        <TextArea>
          {alertText}
        </TextArea>
        <ButtonContainer>
          <Button>

          </Button>
        </ButtonContainer>
      </AlertContainer>
    </AlertBackground>
  );
};

const AlertBackground = styled.div<AlertType>`
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
  flex-direction:column;
  align-items: center;
  padding: 12px;
`;

const TextArea = styled.span`
  width:100%;
  height:60%;
  display:flex;
  justify-content:center;
`

const ButtonContainer = styled.div`
  width:100%;
  height: calc(40% - 24px);
  display:flex;
  justify-content: center;
  align-items:center;
`

const Button = styled.button`
  width:80px;
  height: 40px;
`
export default AlertBox;
