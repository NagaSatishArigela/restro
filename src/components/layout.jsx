import React from "react";
import data from "../data/sampleData";
import SignIn from "./signIn/signIn";

const Layout = () => {
  return (
    // <div classNameName="flex h-screen overflow-y-hidden bg-white">
    //   <div classNameName="flex flex-col flex-1 h-full overflow-hidden">
    //     <main classNameName="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
    //       <div grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4>
    //         <div classNameName="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
    //           <div classNameName="flex items-start justify-between">
    //             <div classNameName="flex flex-col space-y-2">
    //               <span classNameName="text-gray-400">Total Users</span>
    //               <span classNameName="text-lg font-semibold">100,221</span>
    //             </div>
    //             <div classNameName="p-10 bg-gray-200 rounded-md"></div>
    //           </div>
    //           <div>
    //             <span classNameName="inline-block px-2 text-sm text-white bg-green-300 rounded">
    //               14%
    //             </span>
    //             <span>from 2019</span>
    //           </div>
    //         </div>
    //         <div classNameName="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
    //           <div classNameName="flex items-start justify-between">
    //             <div classNameName="flex flex-col space-y-2">
    //               <span classNameName="text-gray-400">Total Users</span>
    //               <span classNameName="text-lg font-semibold">100,221</span>
    //             </div>
    //             <div classNameName="p-10 bg-gray-200 rounded-md"></div>
    //           </div>
    //           <div>
    //             <span classNameName="inline-block px-2 text-sm text-white bg-green-300 rounded">
    //               14%
    //             </span>
    //             <span>from 2019</span>
    //           </div>
    //         </div>
    //         <div classNameName="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
    //           <div classNameName="flex items-start justify-between">
    //             <div classNameName="flex flex-col space-y-2">
    //               <span classNameName="text-gray-400">Total Users</span>
    //               <span classNameName="text-lg font-semibold">100,221</span>
    //             </div>
    //             <div classNameName="p-10 bg-gray-200 rounded-md"></div>
    //           </div>
    //           <div>
    //             <span classNameName="inline-block px-2 text-sm text-white bg-green-300 rounded">
    //               14%
    //             </span>
    //             <span>from 2019</span>
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
        <div className="space-y-6 md:space-x-2 md:space-y-0">
          <a
            href="https://github.com/Kamona-WD/starter-dashboard-layout"
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-1 space-x-1 bg-gray-200 rounded-md shadow hover:bg-opacity-20"
          >
            <span>
              <svg
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </span>
            <span>View on Github</span>
          </a>
          <a
            href="https://kamona-wd.github.io/kwd-dashboard/"
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-1 space-x-1 bg-red-500 text-white rounded-md shadow animate-bounce hover:bg-red-600"
          >
            <span>See Dark & Light version</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
            <div className="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
        <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
            <div className="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
        <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
            <div className="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
        <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
            <div className="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
      </div>

      <h3 className="mt-6 text-xl">Users</h3>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Ahmed Kamel
                          </div>
                          <div className="text-sm text-gray-500">
                            ahmed.kamel@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Regional Paradigm Technician
                      </div>
                      <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      Admin
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
    </main>
  );
};

export default Layout;
  