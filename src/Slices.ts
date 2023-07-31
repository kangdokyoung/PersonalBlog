import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState  {
    Cateogory: string,
}

const initialCategoryState: CategoryState = {
    Cateogory:'',
}

export const categorySlice = createSlice({
    name: "category",
    initialState: initialCategoryState,
    reducers: {
        changeCategory: (state, action:PayloadAction<string>)=>{
            state.Cateogory = action.payload;
        }
    }
})



export const { changeCategory } = categorySlice.actions;