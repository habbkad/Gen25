import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
  name: "teachers",
  initialState: [{ name: "Habib", age: 56 }],
  reducers: {
    createTeacher: () => {},
    updateTeacher: () => {},
    deleteTeacher: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { createTeacher, updateTeacher, deleteTeacher } =
  teacherSlice.actions;

export default teacherSlice.reducer;
