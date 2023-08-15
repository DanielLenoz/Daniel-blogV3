import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import logoAzul from "../assets/icons/logo-azul.svg";
import { NavLink } from "react-router-dom";
import "../style/animaction.css";

function Menu() {
  const activeStyle = "border-b-4 border-sky-500 up";

  return (
    <>
      <section className="flex justify-between items-center bg-slate-100 px-5 z-10">
        <img
          src={logoAzul}
          alt="mode change"
        />
        <section className="relative">
          <RiMenu3Fill className="w-8 h-8  absolute right-0 -bottom-4" />
          {/* <RiCloseFill className="w-8 h-8  absolute right-0 -bottom-4" /> */}
        </section>
      </section>

      <section className="grid justify-center h-screen sticky bg-slate-100 z-10">
        <ul className="grid gap-1 my-32">
          {routes.map((routes) => {
            return (
              <li
                className="text-center font-carter text-2xl font-normal"
                key={routes.text}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  to={routes.to}
                >
                  {routes.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/blogs",
    text: "Blogs",
  },
  {
    to: "/events",
    text: "Events",
  },
  {
    to: "/projects",
    text: "Projects",
  },
  {
    to: "/contact",
    text: "Contact",
  },
];

export { Menu };
