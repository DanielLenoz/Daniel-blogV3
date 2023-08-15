import React from "react";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import logoDoble from "../assets/icons/logo-doble.svg";
import "../style/animaction.css";
import { MuneList, routes } from "./Menu";
import { Link } from "react-router-dom";

function Footer() {
  const activeStyle = "border-b-4 border-sky-500 up";

  return (
    <>
      <footer className=" bg-zinc-900 text-slate-100 grid justify-items-center ">
        <p className=" font-roboto text-center mt-12 mx-12">
          La abundancia de la lectura hace a las personas ver un mundo que nadie
          puede ver
        </p>
        <ul className="grid gap-7 my-16 text-base font-roboto">
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
        <section className="grid justify-center mb-10 group">
          <p className=" text-base text-center transition ease-in delay-150 font-normal mb-3 border-b-4 border-transparent group-hover:border-b-4 group-hover:border-sky-500 ">
            Contact
          </p>
          <article className="flex space-x-4">
            <Link
              to={
                "https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/"
              }
            >
              <ImLinkedin2 className="jek w-12 h-12" />
            </Link>
            <Link to={"https://github.com/DanielLenoz"}>
              <ImGithub className="jek w-12 h-12" />
            </Link>
          </article>
        </section>
        <section className="grid justify-items-center mb-10">
          <img
            className="scal"
            src={logoDoble}
            alt=""
          />
          <p className="text-center font-carter pt-1">© 2023 Daniel</p>
        </section>
      </footer>
    </>
  );
}

export { Footer };
