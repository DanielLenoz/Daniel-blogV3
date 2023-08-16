import React from 'react'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import logoAzul from '../assets/icons/logo-azul.svg'
import { NavLink } from 'react-router-dom'
import '../style/animaction.css'
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
      </nav>

      <section className="sticky z-10 hidden h-screen justify-center bg-slate-100 lg:grid">
        <ul className="my-32 grid gap-1 text-2xl">
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

      {!!menuActive && (
        <section className="sticky z-10 grid h-screen justify-center bg-slate-100">
          <ul className="my-32 grid gap-1 font-carter text-2xl">
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                  onClick={() => toggle()}
                />
              )
            })}
          </ul>
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
    to: '/blogs',
    text: 'Blogs',
  },
  {
    to: '/events',
    text: 'Events',
  },
  {
    to: '/projects',
    text: 'Projects',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
]

export { Menu, MuneList, routes }
