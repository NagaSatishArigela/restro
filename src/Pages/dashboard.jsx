import React from "react";
import SignIn from "../components/signIn/signIn";
import data from "../data/sampleData";

const Dashboard = () => {
  return (
    <div className="h-screen flex-1 p-7">
    <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <div
          link="/contacts"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </div>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {data.map((userInfo, index) => (
            <li className="py-3 sm:py-4" key={index}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userInfo.img}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {userInfo.firstName}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {userInfo.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {userInfo.status}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* signForm */}
    </div>
    <div>
      <SignIn/>
    </div>
    </div>
  );
};

export default Dashboard;
