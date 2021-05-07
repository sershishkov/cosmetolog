import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__KEYWORD: [],
  one__KEYWORD: {},
  loading__KEYWORD: true,
};

const KEYWORD__Slice = createSlice({
  name: 'KEYWORD__Slice',
  initialState,
  reducers: {
    add__KEYWORD(state, action) {
      state.pageName = action.payload.pageName;
    },
    update__KEYWORD(state, action) {
      state.pageName = action.payload.pageName;
    },
    get_all__KEYWORD(state, action) {
      state.pageName = action.payload.pageName;
    },
    get_one__KEYWORD(state, action) {
      state.pageName = action.payload.pageName;
    },
    delete_one__KEYWORD(state, action) {
      state.pageName = action.payload.pageName;
    },
  },
});

export const KEYWORD__Actions = KEYWORD__Slice.actions;

export default KEYWORD__Slice.reducer;
