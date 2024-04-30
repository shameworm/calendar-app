import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarIsActive: true, dropdownIsActive: false },
  reducers: {
    toogleSidebar(state) {
      state.sidebarIsActive = !state.sidebarIsActive;
    },
    toogleDropdown(state) {
      state.dropdownIsActive = !state.dropdownIsActive
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
