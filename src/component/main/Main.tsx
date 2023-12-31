import React, { useEffect } from "react";
import styled from "styled-components";
import PostBox from "./PostBox";

import axios from "axios";
import { useDispatch } from "react-redux";
import { getMainList } from "../../Slices";

const Main: React.FC = () => {
  const post = ["인기글", "공지사항", "전체 글", "코딩", "기타 글"];

  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      url: `http://localhost:3001/readMainContent`,
      method: "get",
      withCredentials: true,
    }).then((res) => {
      dispatch(getMainList(res.data.data));
    });
  }, []);

  return (
    <Scontainer>
      {post.map((data, i) => {
        return <PostBox key={i} name={data} />;
      })}
    </Scontainer>
  );
};

export default Main;

const Scontainer = styled.div`
  width: 65vw;
  min-height: 100vh;
  padding-bottom: 100px;
  position: relative;
  overflow: visible;
  margin-left: 500px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    overflow: visible;
    width: 100vw;
  }
`;
