import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice";
import teacherSlice from "./teacherSlice";
export default configureStore({
  reducer: {
    students: studentSlice,
    teachers: teacherSlice,
  },
});
