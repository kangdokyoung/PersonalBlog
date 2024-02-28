import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiPencilSimpleLineThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { changeCategory, getPostList } from "../../Slices";
import axios from "axios";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  const profileImg = "https://ifh.cc/g/ZTYyjD.webp";

  function changePostList(category: string) {
    axios({
      url: `http://localhost:3001/readBoardList/${category}`,
      method: "get",
      withCredentials: true,
    }).then((res) => {
      dispatch(getPostList(res.data.data));
    });
  }

  return (
    <Scontainer>
      <Sbackgorund>
        <Sprofile>
          <Simg alt="profileImge" src={profileImg} />
        </Sprofile>
        <SnameBox>
          <SwriteSpace>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <Sname>강도경</Sname>
            </Link>
            <Link to={"/newPost"} style={{ textDecoration: "none", color: "black" }}>
              <PiPencilSimpleLineThin color="black" size={"1em "} />
            </Link>
          </SwriteSpace>
          <Sintro>블로그에 오신걸 환영합니다!</Sintro>
        </SnameBox>

        <Scategory>
          <Link to={"/post"} style={{ textDecoration: "none", color: "black" }}>
            <ScategoryList
              onClick={() => {
                dispatch(changeCategory("전체 글"));
                changePostList("all");
              }}
            >
              전체 글
            </ScategoryList>
          </Link>
          <Link to={"/post"} style={{ textDecoration: "none", color: "black" }}>
            <ScategoryList
              onClick={() => {
                dispatch(changeCategory("공지사항"));
                changePostList("notice");
              }}
            >
              공지
            </ScategoryList>
          </Link>
          <Link to={"/post"} style={{ textDecoration: "none", color: "black" }}>
            <ScategoryList
              onClick={() => {
                dispatch(changeCategory("코딩"));
                changePostList("coding");
              }}
            >
              코딩
            </ScategoryList>
          </Link>
          <Link to={"/post"} style={{ textDecoration: "none", color: "black" }}>
            <ScategoryList
              onClick={() => {
                dispatch(changeCategory("기타"));
                changePostList("etc");
              }}
            >
              기타
            </ScategoryList>
          </Link>
        </Scategory>
        <SvisitBox>
          <Svisit>오늘 방문: N</Svisit>
          <Svisit>이달 방문: N</Svisit>
        </SvisitBox>
      </Sbackgorund>
    </Scontainer>
  );
};

export default Sidebar;

const Scontainer = styled.section`
  position: fixed;
  width: 400px;
  height: calc(100vh - 90px);
  z-index: 1;
  @media screen and (max-width: 768px) {
    transform: translateX(-400px);
  }
`;

const Sbackgorund = styled.div`
  background-color: #c1c1c1;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-height: 980px) {
    height: 80vh;
    min-height: 500px;
  }
`;

const Sprofile = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 980px) {
    display: none;
  }
`;

const Simg = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  z-index: 1;
  user-select: none;
`;

const SnameBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SwriteSpace = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Sname = styled.div`
  font-weight: bold;
  font-size: 22px;
  user-select: none;
`;

const Sintro = styled.div`
  user-select: none;
`;

const Scategory = styled.ul`
  width: 70%;
  border-top: 1px solid black;
  padding: 8px;
  margin-bottom: 100px;
`;

const ScategoryList = styled.li`
  list-style: none;
  font-size: 20px;
  margin: 10px 0px 20px 8px;
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;
  :hover {
    background-color: #a8a8a8;
    transform: translateX(6px);
    font-weight: bold;
    color: white;
  }
`;

const SvisitBox = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const Svisit = styled.div`
  font-weight: bold;
  user-select: none;
`;
