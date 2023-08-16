import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState  {
    category: string,
}

const initialCategoryState: CategoryState = {
    category:'',
}

export const categorySlice = createSlice({
    name: "category",
    initialState: initialCategoryState,
    reducers: {
        changeCategory: (state, action:PayloadAction<string>)=>{
            state.category = action.payload;
        }
    }
})

type mainListType = {boardNum: number, boardTitle: string, boardDate: string, boardCategory: string}[]


export interface MainState {
    mainList: mainListType,
}

const initialMainState: MainState = {
    mainList: [],
}

export const MainSlice = createSlice({
    name: "main",
    initialState: initialMainState,
    reducers: {
        getMainList : (state, action:PayloadAction<mainListType>)=>{
            state.mainList = action.payload;
        }
    }
})



export const { changeCategory } = categorySlice.actions;
export const { getMainList } = MainSlice.actions;