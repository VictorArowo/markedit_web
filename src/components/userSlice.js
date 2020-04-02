import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    authenticated: false,
    username: "",
    email: "",
    createdAt: "",
    docs: []
  },
  reducers: {
    authenticate: (state, { payload: { username, email, createdAt } }) => {
      state.username = username;
      state.email = email;
      state.createdAt = createdAt;
      state.authenticated = true;
    },
    getDocs: (state, { payload }) => {
      state.docs = payload;
    },
    deleteDoc: (state, { payload }) => {
      state.docs = state.docs.filter(doc => doc.docId !== payload);
    },
    addDoc: (state, { payload }) => {
      state.docs.push(payload);
    },
    editDoc: (state, { payload }) => {
      state.docs = state.docs.map(doc =>
        doc.docId === payload.docId ? payload : doc
      );
    }
  }
});

export const userData = state => state.user;
export const {
  authenticate,
  getDocs,
  deleteDoc,
  addDoc,
  editDoc
} = slice.actions;

export default slice.reducer;
