import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "students",
  initialState: [{ name: "Abu", age: 24 }],
  reducers: {
    createStudent: () => {},
    updateStudent: () => {},
    deleteStudent: () => {},
  },
});

export const { createStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
