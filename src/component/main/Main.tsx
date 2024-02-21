import React, { useEffect } from "react";
import styled from "styled-components";
import PostBox from "./PostBox";

import axios from "axios";
import { useDispatch } from "react-redux";
import { getMainList } from "../../Slices";

const Main: React.FC = () => {
  const post = ["popular", "notice", "all", "coding", "etc"];

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

  const distribution = (input: string): string => {
    let output = "";
    switch (input) {
      case "popular":
        output = "인기글";
        break;
      case "notice":
        output = "공지사항";
        break;

      case "all":
        output = "전체 글";
        break;
      case "coding":
        output = "코딩";
        break;
      case "etc":
        output = "기타";
        break;
      default:
        break;
    }

    return output;
  };

  return (
    <Scontainer>
      {post.map((data, i) => {
        let category = distribution(data);
        return <PostBox key={i} name={category} />;
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
