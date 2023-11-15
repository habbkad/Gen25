import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "students",
  initialState: [{ name: "abu", age: 25 }],
  reducers: {
    createStudent: () => {},
    updateStudent: () => {},
    deleteStudent: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { createStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
