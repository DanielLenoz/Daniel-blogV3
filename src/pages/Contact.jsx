import React from 'react'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../style/gradients.css'
import '../style/animaction.css'

function Contact() {
  return (
    <section className="grid w-auto bg-slate-100">
      <h1 className=" gradient-hablemos-azul mt-3 text-center font-carter text-4xl font-normal">
        ¡Hablemos!
      </h1>
      <section className="relative my-11 grid justify-items-center gap-7">
        <div className="diamond scal absolute -right-14 -top-20 h-44 w-40 md:right-36 lg:right-0"></div>
        <article className="gradient-contact z-10 grid w-[343px] rounded-3xl text-center text-slate-100 lg:flex lg:w-[910px]">
          <div className="grid justify-center rounded-3xl bg-gradient-to-b from-sky-500 lg:relative lg:h-56 lg:w-[1100px] lg:pt-4">
            <ImLinkedin2 className=" h-20 w-20 fill-white lg:h-28 lg:w-28" />
          </div>
          <section className="lg:mt-5">
            <h1 className="pt-2 font-oswald text-lg font-bold lg:pb-4 lg:text-2xl">
              Daniel Steven Rodríguez Verano
            </h1>
            <p className=" px-3 pt-2 font-roboto text-base font-normal lg:text-lg">
              Si aprecias mi trabajo en diseño y creación de productos, no dudes
              en contactarme a través de LinkedIn. Estaré encantado de hablar
              sobre cualquier proyecto que tengas en mente. ¡Espero tener la
              oportunidad de colaborar contigo!
            </p>
          </section>
          <Link
            className="gradient-contact my-5 flex h-14 w-72 items-center justify-center justify-self-center rounded-2xl lg:absolute lg:left-20 lg:top-32"
            to={
              'https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/'
            }
          >
            <p className="font-oswald text-lg font-bold lg:text-2xl">
              Conéctate con Migo
            </p>
            <MdOutlineDoubleArrow className="ml-2 h-8 w-8 " />
          </Link>
        </article>
        <div className="diamond scal absolute -left-14 top-72 h-44 w-40 md:left-32 lg:-left-5 lg:top-36"></div>
        <article className="gradient-contact z-10 grid w-[343px] rounded-3xl text-center text-slate-100 lg:flex lg:w-[910px]">
          <div className="grid justify-center rounded-3xl bg-gradient-to-b from-black lg:relative lg:h-56 lg:w-[1100px] lg:pt-4">
            <ImGithub className="mt-3 h-20 w-20 fill-white lg:h-28 lg:w-28" />
          </div>
          <section className="lg:mt-5">
            <h1 className="pt-2 font-oswald text-lg font-bold lg:pb-4 lg:text-2xl">
              Daniel Steven Rodríguez Verano
            </h1>
            <p className="px-3 pt-2 font-roboto text-base font-normal lg:text-lg">
              Si aprecias mi trabajo en diseño y creación de productos, te
              invito a explorar mi trabajo en GitHub. Allí podrás encontrar el
              código y el diseño, lo que te permitirá apreciar la calidad de los
              productos que desarrollo. ¡Espero que disfrutes explorando mi
              perfil!
            </p>
          </section>
          <Link
            className="gradient-contact my-5 flex h-14 w-72 items-center justify-center justify-self-center rounded-2xl lg:absolute lg:bottom-0 lg:left-20"
            to={'https://github.com/DanielLenoz'}
          >
            <p className="font-oswald text-lg font-bold lg:text-2xl">
              Mira el Desarrollo
            </p>
            <MdOutlineDoubleArrow className="ml-2 h-8 w-8" />
          </Link>
        </article>
        <div className="diamond scal absolute -bottom-16 -right-14 h-44 w-40 md:right-36 lg:right-0"></div>
      </section>
    </section>
  )
}

export { Contact }
