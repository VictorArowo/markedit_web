import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// import dayjs from "dayjs";
import classnames from "classnames";
import TransitionGroup from "../utils/TransitionGroup";
import { FaPlus } from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

import initialString from "../utils/dummyMarkdown";

const ApplicationShell = ({ children, page }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const credentials = {};
  return (
    <div>
      <div className="bg-gray-800 pb-32">
        <nav onKeyDown={() => setOpen(false)} className="bg-gray-800">
          <div className="mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-auto" src="logo_cropped.png" alt="" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline">
                      <Link
                        to="/dashboard"
                        className={classnames(
                          "px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-700 focus:outline-none focus:text-white ",
                          page === "dashboard"
                            ? " text-white bg-gray-900 "
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                        )}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/documents"
                        className={classnames(
                          "ml-4 px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-700 focus:outline-none focus:text-white",
                          page === "documents"
                            ? "text-white bg-gray-900"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                        )}
                      >
                        Documents
                      </Link>
                      <Link
                        to="/settings"
                        className={classnames(
                          "ml-4 px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-700 focus:outline-none focus:text-white",
                          page === "settings"
                            ? "text-white bg-gray-900"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                        )}
                      >
                        Settings
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>
                    <div onClick={toggleSidebar} className="ml-3 relative">
                      <div>
                        <button
                          onClick={toggleSidebar}
                          className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        >
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`https://avatars.dicebear.com/v2/avataaars/${credentials.username}.svg?options[radius][]=50`}
                            alt=""
                          />
                        </button>
                      </div>
                      <TransitionGroup
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveTo="transform opacity-0 scale-95"
                        leaveFrom="transform opacity-100 scale-100"
                      >
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                          <div className="py-1 rounded-md bg-white shadow-xs">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Your Profile
                            </Link>
                            <Link
                              to="/settings"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Settings
                            </Link>
                            <Link
                              to="/"
                              onClick={() => localStorage.removeItem("token")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Sign out
                            </Link>
                          </div>
                        </div>
                      </TransitionGroup>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={toggleSidebar}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className={classNames(open ? "hidden" : "inline-flex")}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                      <path
                        className={classNames(open ? "inline-flex" : "hidden")}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "border-b border-gray-700 md:hidden",
              open ? "block" : "hidden"
            )}
          >
            <div className="px-2 py-3 sm:px-3">
              <Link
                to="/dashboard"
                className={classnames(
                  "block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700",
                  page === "dashboard"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                )}
              >
                Dashboard
              </Link>
              <Link
                to="/documents"
                className={classnames(
                  "mt-1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700",
                  page === "documents"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                )}
              >
                Documents
              </Link>
              <Link
                to="/settings"
                className={classnames(
                  "mt-1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700",
                  page === "settings"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                )}
              >
                Settings
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://avatars.dicebear.com/v2/avataaars/${credentials.username}.svg?options[radius][]=50`}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {credentials.username}
                  </div>
                  <div className="mt-1 text-sm font-medium leading-none text-gray-400">
                    {credentials.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2">
                <Link
                  to="/profile"
                  className={classnames(
                    "block px-3 py-2 rounded-md text-base font-medium  hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",
                    page === "profile"
                      ? "text-white bg-gray-900"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  )}
                >
                  Your Profile
                </Link>
                <Link
                  to="/"
                  onClick={() => localStorage.removeItem("token")}
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <header className={classnames(page === "create" ? "py-0" : "py-10")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
            <h2
              className={classnames(
                "text-3xl leading-9 font-bold text-white capitalize",
                page === "create" ? "hidden" : ""
              )}
            >
              {page}
            </h2>
            <Link
              to="/create"
              onClick={() => {
                localStorage.setItem(
                  "currDoc",
                  JSON.stringify({
                    body: initialString,
                    id: uuidv4(),
                    title: "untitled.md"
                  })
                );
              }}
              className={classnames(
                "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center",
                page === "documents" ? "" : "hidden"
              )}
            >
              <FaPlus className="mr-2" />
              Create Document
            </Link>
          </div>
        </header>
      </div>
      <main className="-mt-32">
        <div className="mx-auto pb-12">{children}</div>
      </main>
    </div>
  );
};

export default ApplicationShell;
