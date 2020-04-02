import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/userSlice";

export default configureStore({
  reducer: {
    user: userReducer
  }
});
