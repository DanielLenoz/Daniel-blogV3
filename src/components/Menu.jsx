import React from 'react'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import logoAzul from '../assets/icons/logo-azul.svg'
import { NavLink } from 'react-router-dom'
import '../style/animaction.css'
import '../style/gradients.css'
import { useBlog } from '../hooks/useBlog'

function Menu() {
  const activeStyle = 'border-b-4 border-sky-500 up'

  const { state, stateUpdaters } = useBlog()
  const { setMenuActive } = stateUpdaters
  const { menuActive } = state

  const toggle = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header>
      <nav className="relative z-10 flex items-center justify-between bg-slate-100 px-5 ">
        <img src={logoAzul} alt="mode change" />
        <section className="relative lg:hidden ">
          {!menuActive ? (
            <RiMenu3Fill
              className="absolute -bottom-4 right-0 h-8 w-8 "
              onClick={toggle}
            />
          ) : (
            <RiCloseFill
              className="absolute -bottom-4 right-0 h-8 w-8 "
              onClick={toggle}
            />
          )}
        </section>

        <section className="z-10 hidden bg-slate-100 lg:grid">
          <ul className="flex gap-7 font-carter text-2xl">
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
        </section>
      </nav>

      {!!menuActive && (
        <section className="relative z-10 grid h-screen justify-center bg-slate-100">
          <div className="diamond scal scal absolute h-44 w-40"></div>
          <ul className="my-32 grid gap-1 font-carter text-2xl">
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                  onClick={() => (toggle(), window.scrollTo(0, 0))}
                />
              )
            })}
          </ul>
          <div className="diamond scal scal absolute bottom-14 right-0 h-44 w-40"></div>
        </section>
      )}
    </header>
  )
}

function MuneList({ routes, activeStyle, onClick }) {
  return (
    <li className="text-center font-normal" key={routes.text}>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={routes.to}
        onClick={onClick}
      >
        {routes.text}
      </NavLink>
    </li>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/Blogs',
    text: 'Blogs',
  },
  {
    to: '/Events',
    text: 'Events',
  },
  {
    to: '/Projects',
    text: 'Projects',
  },
  {
    to: '/Contact',
    text: 'Contact',
  },
]

export { Menu, MuneList, routes }
