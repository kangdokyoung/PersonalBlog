import React from 'react';
import styled from 'styled-components';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';


const Scontainer = styled.div`
    width: 60vw;
    min-height: 90vh;
    height: 100vh;
    padding-bottom: 100px;
    position:relative;
    overflow:visible;
    margin-left: 500px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    @media screen and (max-width: 768px){
        margin-left: 0px;
        overflow:visible;
        width: 100vw;
    }
`

const Stitle = styled.div`

`

const Scategory = styled.div`

`

const SeditorBox = styled.div`
    width:100%;
    display:flex;
    & > Editor {
        flex-grow:1;
    }
`

const NewPost:React.FC = () => {
    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr'],
        ['ul', 'ol', 'task'],
        ['table', 'link'],
        ['image'],
        ['code'],
        ['scrollSync'],
    ]
    
    return (
        <Scontainer>
            <Stitle>asd</Stitle>
            <Scategory>fasdf</Scategory>
            <SeditorBox>    
                <Editor
                    initialValue=""
                    height="800px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={false}
                    toolbarItems={toolbarItems}
                    hideModeSwitch={true}
                />
            </SeditorBox>
        </Scontainer>
    );
};

export default NewPost;