import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul>
      {routes.map((routes) => {
        return (
          <li key={routes.text}>
            <NavLink to={routes.to}>{routes.text}</NavLink>
          </li>
        );
      })}
    </ul>
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
