import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import decode from "jwt-decode";

import initialString from "./utils/dummyMarkdown";

import LandingPage from "./pages/LandingPage";
import Tryit from "./pages/Tryit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Documents from "./pages/Documents";
import AuthRoute from "./components/AuthRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import { userData, authenticate, getDocs } from "./components/userSlice";
import { useQuery } from "@apollo/react-hooks";
import { GET_DOCS } from "./utils/queries";

function App() {
  const currDoc = localStorage.getItem("currDoc");
  if (!currDoc) {
    localStorage.setItem(
      "currDoc",
      JSON.stringify({
        body: initialString,
        id: uuidv4(),
        title: "untitled.md"
      })
    );
  }
  const { loading, error, data } = useQuery(GET_DOCS);

  useEffect(() => {
    if (!loading && data) {
      dispatch(getDocs(data.getDocs));
    }
  }, [loading]);

  const credentials = useSelector(userData);
  const dispatch = useDispatch();

  if (!credentials.authenticated) {
    const token = localStorage.getItem("token");

    if (token) {
      const userData = decode(token);
      dispatch(
        authenticate({
          email: userData.email,
          username: userData.username,
          createdAt: userData.createdAt
        })
      );
    }
  }

  return (
    <>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/tryit" component={Tryit} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={Create} />
        <PrivateRoute path="/documents" component={Documents} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
      {loading && <div className="spinner" />}
    </>
  );
}

export default App;
