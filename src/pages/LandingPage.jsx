import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-screen-xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <img
                        className="w-auto h-8 sm:h-10"
                        src="logo_cropped.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="font-serif text-4xl leading-10 tracking-tight text-gray-700 sm:text-5xl sm:leading-none md:text-6xl">
                  the simple
                  <br />
                  <span className="text-indigo-500">markdown editor</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  markdown editor with no bells and whistles
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/register"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                    >
                      Create an account
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/tryit"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-500 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10"
                    >
                      Try it now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-center ">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg font-medium leading-6 text-gray-500">
                  simple to use
                </h5>
              </div>
            </div>
            <div className="flex flex-col items-center mt-10 lg:mt-0">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg font-medium leading-6 text-gray-500">
                  blazing fast
                </h5>
              </div>
            </div>
            <div className="flex flex-col items-center mt-10 lg:mt-0">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg font-medium leading-6 text-gray-500">
                  cloud based
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center md:order-2">
            <a
              href="https://www.twitter.com/ArowoV"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://www.github.com/VictorArowo"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="mailto:arowov@gmail.com"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Mail</span>
              <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z" />
                <path d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base leading-6 text-center text-gray-400">
              &copy; 2020 markedit. Built with{" "}
              <span aria-label="heart" role="img">
                ❤️
              </span>{" "}
              by Victor Arowo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
