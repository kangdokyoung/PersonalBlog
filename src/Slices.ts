import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 카테고리
export interface CategoryState {
  category: string;
}

const initialCategoryState: CategoryState = {
  category: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

//메인 글 리스트
export interface MainState {
  mainList:
    | {
        boardNum: number;
        boardTitle: string;
        boardDate: string;
        boardCategory: string;
      }[]
    | [];
}

const initialMainState: MainState = {
  mainList: [],
};

export const MainSlice = createSlice({
  name: "main",
  initialState: initialMainState,
  reducers: {
    getMainList: (state, action: PayloadAction<MainState["mainList"]>) => {
      state.mainList = action.payload;
    },
  },
});

//글 목록

export interface PostListState {
  postList: { boardNum: number; boardTitle: string; boardContent: string }[] | [];
}

const initialPostListState: PostListState = {
  postList: [],
};

export const PostListSlice = createSlice({
  name: "postList",
  initialState: initialPostListState,
  reducers: {
    getPostList: (state, action: PayloadAction<PostListState["postList"]>) => {
      state.postList = action.payload;
    },
  },
});

// 글 디테일

export interface BoardDetailState {
  boardDetail: any;
  //{ boardNum: number; boardTitle: string; boardContent: string; boardDate: Date; userNum: number } | {};
}

const initialBoardDetailState: BoardDetailState = {
  boardDetail: {},
};

export const BoardDetailSlice = createSlice({
  name: "BoardDetail",
  initialState: initialBoardDetailState,
  reducers: {
    getBoardDetail: (state, action: PayloadAction<BoardDetailState>) => {
      state.boardDetail = action.payload;
    },
  },
});

// 댓글

export const { changeCategory } = categorySlice.actions;
export const { getMainList } = MainSlice.actions;
export const { getPostList } = PostListSlice.actions;
export const { getBoardDetail } = BoardDetailSlice.actions;
