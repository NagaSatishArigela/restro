import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import PageRoutes from "../../routes";
import Header from "../header/header";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", route: "/" },
    { title: "Inbox", src: "Chat", route: "/messages" },
    { title: "Accounts", src: "User", gap: true, route: "/contacts" },
    { title: "Reservation ", src: "Calendar", route: "/reservations" },
    // { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart", route: "/reports" },
    // { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting", route: "/settings" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-black h-screen p-5  pt-8 relative duration-300 select-none`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center justify-center">
          <img
            src="./src/assets/resto.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Restro
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.route} key={index}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === active && "bg-light-white"
                } `}
                onClick={() => setActive(index)}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
      <PageRoutes/>
      </div>
    </div>
  );
}
