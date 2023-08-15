import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import  logoAzul  from "../assets/icons/logo-azul.svg";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <section>
        <img
          src={logoAzul}
          alt=""
        />
        <RiMenu3Fill />
        <RiCloseFill/>
      </section>

      <section>
        <ul>
          {routes.map((routes) => {
            return (
              <li key={routes.text}>
                <NavLink to={routes.to}>{routes.text}</NavLink>
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
