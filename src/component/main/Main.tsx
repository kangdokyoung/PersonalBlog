import React, { useEffect } from "react";
import styled from "styled-components";
import PostBox from "./PostBox";
import { distribution } from "../../hooks/useDistribution";

import axios from "axios";
import { useDispatch } from "react-redux";
import { getMainList } from "../../Slices";

const Main: React.FC = () => {
  const post = ["notice", "all", "coding", "etc"];

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
  margin-left: 450px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-left: 0px;
    overflow: visible;
    width: 100vw;
  }
`;
