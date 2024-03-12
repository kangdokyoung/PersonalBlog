import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { distribution } from "../../hooks/useDistribution";
import { getTimeByNow } from "../../hooks/useGetTime";
import { RootState } from "../../store";

type PostTitle = {
  name: string;
};

const PostBox: React.FC<PostTitle> = (props) => {
  const { name } = props;

  const mainList = useSelector((state: RootState) => state.mainList.mainList);

  return (
    <Scontainer>
      <Sname>{name}</Sname>
      <SpostList>
        {name !== "전체 글"
          ? mainList
              ?.filter((prop) => distribution(prop.boardCategory) === name)
              .map((data, i) => {
                return (
                  <Spost title={data.boardTitle} key={i}>
                    <Link to={`/post/${data.boardNum}`} style={{ textDecoration: "none" }}>
                      <Stitle name={name}>{data.boardTitle}</Stitle>
                    </Link>
                    <Sdate>{getTimeByNow(data.boardDate)}</Sdate>
                  </Spost>
                );
              })
          : mainList.map((data, i) => {
              return (
                <Spost title={data.boardTitle} key={i}>
                  <Link to={`/post/${data.boardNum}`} style={{ textDecoration: "none" }}>
                    <Stitle name={name}>{data.boardTitle}</Stitle>
                  </Link>
                  <Sdate>{getTimeByNow(data.boardDate)}</Sdate>
                </Spost>
              );
            })}
      </SpostList>
    </Scontainer>
  );
};

export default PostBox;

const Scontainer = styled.div`
  height: 400px;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px grey;
  margin: 30px;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1708px) {
    width: 85%;
  }
  @media (min-width: 1708px) {
    width: 500px;
    min-width: 450px;
  }
`;

const Sname = styled.div`
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

const SpostList = styled.ul`
  height: 70%;
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spost = styled.li`
  width: 80%;
  list-style: none;
  cursor: pointer;
  margin: 14px;
  display: flex;
  justify-content: space-between;
  transition: all 0.22s;
  :hover {
    background-color: lightgrey;
  }
`;

const Stitle = styled.div<PostTitle>`
  color: black;
  font-size: 20px;
  font-wight: bold;
  ${(props) => {
    if (props.name === "공지사항")
      return css`
        color: red;
      `;
  }}
`;

const Sdate = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;
