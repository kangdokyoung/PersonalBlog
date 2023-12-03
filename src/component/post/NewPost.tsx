import React, { useState } from "react";
import styled from "styled-components";

// TOAST ui
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

// Material ui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

const NewPost: React.FC = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const toolbarItems = [["heading", "bold", "italic", "strike"], ["hr"], ["ul", "ol", "task"], ["table", "link"], ["image"], ["code"], ["scrollSync"]];

  return (
    <Scontainer>
      <StitleBox>
        <FormControl style={{ width: "200px", backgroundColor: "white" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Category" onChange={handleChange}>
            <MenuItem value={"notice"}>공지</MenuItem>
            <MenuItem value={"coding"}>코딩</MenuItem>
            <MenuItem value={"etc"}>기타</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            console.log("gd");
          }}
        >
          작성하기
        </Button>
      </StitleBox>
      <Stitle placeholder="제목을 입력하세요" />
      <SeditorBox>
        <Editor initialValue="" height="600px" initialEditType="wysiwyg" useCommandShortcut={false} toolbarItems={toolbarItems} hideModeSwitch={true} />
      </SeditorBox>
    </Scontainer>
  );
};

export default NewPost;

const Scontainer = styled.div`
  width: 60vw;
  min-height: 90vh;
  height: 100vh;
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

const Stitle = styled.input`
  height: 70px;
  width: 100%;
  margin-bottom: 2px;
  padding: 15px;
  border: none;
  font-size: 18px;
  ::placeholder {
    font-size: 18px;
  }
`;

const SeditorBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  & > div {
    flex-grow: 1;
  }
`;

const StitleBox = styled.div`
  width: 100%;
  margin: 12px 0px 12px 0px;
  display: flex;
  justify-content: space-between;
`;
