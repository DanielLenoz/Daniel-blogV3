import React from 'react'
import { ImLinkedin2, ImGithub } from 'react-icons/im'
import logoDoble from '../assets/icons/logo-doble.svg'
import '../style/animaction.css'
import { MuneList, routes } from './Menu'
import { Link } from 'react-router-dom'

function Footer() {
  const activeStyle = 'border-b-4 border-sky-500 up'

  return (
    <>
      <footer className=" grid justify-items-center bg-zinc-900 text-slate-100 ">
        <p className=" mx-12 mt-12 text-center font-roboto">
          La abundancia de la lectura hace a las personas ver un mundo que nadie
          puede ver
        </p>
        <ul className="my-16 grid gap-7 font-roboto text-base">
          {routes.map((routes) => {
            return (
              <MuneList
                key={routes.to}
                routes={routes}
                activeStyle={activeStyle}
              />
            )
          })}
        </ul>
        <section className="group mb-10 grid justify-center">
          <p className=" mb-3 border-b-4 border-transparent text-center text-base font-normal transition delay-150 ease-in group-hover:border-b-4 group-hover:border-sky-500 ">
            Contact
          </p>
          <article className="flex space-x-4">
            <Link
              to={
                'https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/'
              }
            >
              <ImLinkedin2 className="jek h-12 w-12" />
            </Link>
            <Link to={'https://github.com/DanielLenoz'}>
              <ImGithub className="jek h-12 w-12" />
            </Link>
          </article>
        </section>
        <section className="mb-10 grid justify-items-center">
          <img className="scal" src={logoDoble} alt="" />
          <p className="pt-1 text-center font-carter">© 2023 Daniel</p>
        </section>
      </footer>
    </>
  )
}

export { Footer }
