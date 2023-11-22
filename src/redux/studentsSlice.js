import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "students",
  initialState: { students: [] },
  reducers: {
    createStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    updateStudent: (state, action) => {
      const updatedStudents = state.students.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.students = updatedStudents;
    },
    deleteStudent: (state, action) => {
      const filteredStudents = state.students.filter(
        (item) => item.id !== action.payload
      );

      state.students = filteredStudents;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
