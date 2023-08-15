import React from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logoAzul from "../assets/icons/logo-azul.svg";
import { NavLink } from "react-router-dom";
import "../style/animaction.css";
import { useBlog } from "../hooks/useBlog";

function Menu() {
  const activeStyle = "border-b-4 border-sky-500 up";

  const { state, stateUpdaters } = useBlog();
  const { setMenuActive } = stateUpdaters;
  const { menuActive } = state;

  const toggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <section className="flex justify-between items-center bg-slate-100 px-5 z-10">
        <img
          src={logoAzul}
          alt="mode change"
        />
        <section className="relative  lg:hidden ">
          {!menuActive ? (
            <RiMenu3Fill
              className="w-8 h-8 absolute right-0 -bottom-4 "
              onClick={toggle}
            />
          ) : (
            <RiCloseFill
              className="w-8 h-8 absolute right-0 -bottom-4 "
              onClick={toggle}
            />
          )}
        </section>
      </section>

      <section className="hidden justify-center h-screen sticky bg-slate-100 z-10 lg:grid">
        <ul className="grid gap-1 my-32 text-2xl">
          {routes.map((routes) => {
            return (
              <MuneList
                key={routes.to}
                routes={routes}
                activeStyle={activeStyle}
              />
            );
          })}
        </ul>
      </section>

      {!!menuActive && (
        <section className="grid justify-center h-screen sticky bg-slate-100 z-10">
          <ul className="grid gap-1 my-32 text-2xl font-carter">
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                />
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}

function MuneList({ routes, activeStyle }) {
  return (
    <li
      className="text-center ont-normal"
      key={routes.text}
    >
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={routes.to}
      >
        {routes.text}
      </NavLink>
    </li>
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

export { Menu, MuneList, routes };
