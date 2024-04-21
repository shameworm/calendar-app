import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarIsActive: true },
  reducers: {
    toogle(state) {
      state.sidebarIsActive = !state.sidebarIsActive;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
