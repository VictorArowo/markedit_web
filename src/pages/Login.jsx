import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";

import { LOGIN_USER } from "../utils/queries";
import { useForm } from "../utils/hooks";
import { authenticate } from "../components/userSlice";

const Login = ({ history }) => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: ""
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      dispatch(
        authenticate({
          email: userData.email,
          username: userData.username,
          createdAt: userData.createdAt
        })
      );
      localStorage.setItem("token", userData.token);
      history.push("/dashboard");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: { username: values.username, password: values.password }
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="logo_cropped.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-2xl leading-9 font-extrabold text-gray-900 px-5 sm:px-0">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
            or
            <Link
              to="/register"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              {" "}
              create an account here
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="username"
                    type="text"
                    value={values.username}
                    onChange={onChange}
                    name="username"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              {Object.keys(errors).length > 0 && (
                <div className="text-red-500 text-sm font-bold">
                  Username or password incorrect
                </div>
              )}
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <input
                    type="submit"
                    value="Sign in"
                    className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  />
                </span>
              </div>
              {loading && <div className="spinner" />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
