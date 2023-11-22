import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./teacherSlice";
import studentSlice from "./studentsSlice";

export default configureStore({
  reducer: {
    teacher: teacherSlice,
    student: studentSlice,
  },
});
