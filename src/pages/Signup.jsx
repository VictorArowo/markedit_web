import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import classnames from "classnames";

import { REGISTER_USER } from "../utils/queries";
import { useForm } from "../utils/hooks";

const Signup = ({ history }) => {
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { login: userData } }) {
      console.log(userData);
      history.push("/dashboard");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      console.log(errors);
    },
    variables: values
  });

  function registerUserCallback() {
    registerUser();
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
            Create a new account
          </h2>
          <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
            or
            <Link
              to="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              {" "}
              login here
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
                    className={classnames(
                      Object.keys(errors).includes("username")
                        ? "border-red-800 border-5"
                        : "border-gray-300 ",
                      "appearance-none block w-full px-3 py-2 border  rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    )}
                  />
                </div>
                {Object.keys(errors).includes("username") && (
                  <div className="text-red-800 text-sm">{errors.username}</div>
                )}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
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
                    className={classnames(
                      Object.keys(errors).includes("confirmPassword")
                        ? "border-red-800 border-5"
                        : "border-gray-300 ",
                      "appearance-none block w-full px-3 py-2 border  rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    )}
                  />
                </div>
                {Object.keys(errors).includes("confirmPassword") && (
                  <div className="text-red-800 text-sm">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="confirm"
                    type="password"
                    required
                    value={values.confitm}
                    onChange={onChange}
                    name="confirmPassword"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <input
                    type="submit"
                    value="Create account"
                    className={classnames(
                      loading
                        ? " cursor-not-allowed opacity-50"
                        : "hover:bg-indigo-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700",
                      "w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500  transition duration-150 ease-in-out"
                    )}
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

export default Signup;
