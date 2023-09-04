import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { RootState } from "../../store";

type PostTitle = {
  name: string;
};

const PostBox: React.FC<PostTitle> = (props) => {
  const { name } = props;

  const mainList = useSelector((state: RootState) => state.mainList.mainList);

  return (
    <Scontainer name={name}>
      <Sname>{name}</Sname>
      <SpostList>
        {mainList
          ?.filter((prop) => prop.boardCategory === name)
          .map((data, i) => {
            return (
              <Spost title={data.boardTitle} key={i}>
                <Link
                  to={`/post/${data.boardNum}`}
                  style={{ textDecoration: "none" }}
                >
                  <Stitle>{data.boardTitle}</Stitle>
                </Link>
                <Sdate>{data.boardDate}</Sdate>
              </Spost>
            );
          })}
      </SpostList>
    </Scontainer>
  );
};

export default PostBox;

const Scontainer = styled.div<PostTitle>`
  height: 400px;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px grey;
  margin: 30px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  ${(props) => {
    if (props.name == "인기글") {
      return css`
        width: 85%;
      `;
    } else {
      return css`
        width: 500px;
        min-width: 450px;
      `;
    }
  }}
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

const Stitle = styled.div`
  color: blue;
  font-size: 20px;
  font-wight: bold;
`;

const Sdate = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;
