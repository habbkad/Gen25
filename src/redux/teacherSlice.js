import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
  name: "teachers",
  initialState: { teachers: [{ name: "Ama", age: 56 }] },
  reducers: {
    createTeacher: () => {},
    updateTeacher: () => {},
    deleteTeacher: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { createTeacher, deleteTeacher, updateTeacher } =
  teacherSlice.actions;

export default teacherSlice.reducer;
