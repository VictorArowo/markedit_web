import React from "react";

import ApplicationShell from "../components/ApplicationShell";
import { useSelector } from "react-redux";
import { userData } from "../components/userSlice";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Dashboard = () => {
  const credentials = useSelector(userData);

  return (
    <ApplicationShell page="dashboard">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        <span className="text-2xl">
          Welcome, {credentials.username} to markedit.
        </span>
        <div className="text-left font-serif text-lg font-bold mt-10 text-gray-700">
          <p>Recent Activity</p>
          {credentials.docs.length > 0 ? (
            credentials.docs
              .slice()
              .sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
              })
              .map(elem => (
                <div
                  className="font-sans text-gray-700 bg-white cursor-pointer rounded px-5 py-5 mb-2"
                  onClick={() => {}}
                >
                  <div className="m-0">{elem.name} was created</div>
                  <div className="font-sans text-xs pt-2">
                    {dayjs(elem.createdAt).fromNow()}
                  </div>
                </div>
              ))
          ) : (
            <div className="mt-5 text-base font-sans">
              You have no recent activity
            </div>
          )}
        </div>
      </div>
    </ApplicationShell>
  );
};

export default Dashboard;
