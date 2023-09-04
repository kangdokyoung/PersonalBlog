import React from "react";
import styled from "styled-components";
import PostDetail from "./PostDetail";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Post: React.FC = () => {
  const category = useSelector((state: RootState) => state.category.category);
  const postList = useSelector((state: RootState) => state.postList.postList);

  return (
    <Scontainer>
      <Stitle>{category}</Stitle>
      <SpostBox>
        {postList.map((data, i) => {
          return <PostDetail key={i} boardNum={data.boardNum} boardTitle={data.boardTitle} boardContent={data.boardContent} />;
        })}
      </SpostBox>
    </Scontainer>
  );
};

export default Post;

const Scontainer = styled.div`
  width: 60vw;
  min-height: 90vh;
  padding-bottom: 100px;
  position: relative;
  overflow: visible;
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    overflow: visible;
    width: 100vw;
  }
`;

const Stitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
`;

const SpostBox = styled.div`
    width: 100%;
    height: 80%;
    display:flex;
    flex-direction:column;
    justify-content:
    overflow:auto;
    margin-top:20px;
    flex-grow:1;
`;
