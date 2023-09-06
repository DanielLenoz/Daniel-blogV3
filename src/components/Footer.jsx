import React from 'react'
import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { MuneList, routes } from './Menu'
import logoDoble from '../../public/assets/icons/logo-doble.svg'
import '../style/animaction.css'

function Footer() {
  const activeStyle = 'border-b-4 border-sky-500 up dark:border-orange-600'

  return (
    <footer className="relative z-20 grid justify-items-center bg-zinc-900 text-slate-100 lg:grid-cols-6 lg:grid-rows-1 lg:items-center lg:px-8">
      <p className=" mx-12 mt-12 text-center font-roboto lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-2 lg:ml-0 lg:mr-16 lg:self-start lg:text-lg">
        La abundancia de la lectura hace a las personas ver un mundo que nadie
        puede ver
      </p>
      <ul className="my-16 grid gap-7 font-roboto text-base lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:my-8 lg:gap-3 lg:text-lg">
        {routes.map((routes) => {
          return (
            <MuneList
              key={routes.to}
              routes={routes}
              activeStyle={activeStyle}
              onClick={() => window.scrollTo(0, 0)}
            />
          )
        })}
      </ul>
      <section className="group mb-10 grid justify-center lg:col-start-6 lg:col-end-7 lg:row-start-1 lg:row-end-2">
        <p className=" mb-3 border-b-4 border-transparent text-center text-base font-normal transition delay-150 ease-in group-hover:border-b-4 group-hover:border-sky-500 lg:text-lg">
          Contact
        </p>
        <article className="flex space-x-4">
          <Link
            to={
              'https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin2 className="jek h-12 w-12" />
          </Link>
          <Link
            to={'https://github.com/DanielLenoz'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub className="jek h-12 w-12" />
          </Link>
        </article>
      </section>
      <section className="mb-10 grid justify-items-center lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
        <img className="scal" src={logoDoble} alt="" />
        <p className="pt-1 text-center font-carter lg:text-lg">
          © 2023 Daniel
        </p>
      </section>
    </footer>
  )
}

export { Footer }
