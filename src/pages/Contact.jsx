import React from 'react'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import '../style/gradients.css'
import '../style/animaction.css'

function Contact() {
  return (
    <main className="grid w-auto bg-slate-100 dark:bg-slate-900">
      <h1 className=" gradient-hablemos-azul gradient-leer-rojo mt-3 text-center font-carter text-4xl font-normal">
        ¡Hablemos!
      </h1>
      <section className="relative my-11 grid justify-items-center gap-7">
        <div className="diamond sunlight scal absolute -right-14 -top-20 h-44 w-40 md:right-36 lg:right-0 xl:right-48"></div>

        <div className="diamond sunlight scal absolute -left-14 top-72 h-44 w-40 md:left-32 lg:-left-5 lg:top-36 xl:left-44"></div>

        <ContactLink
          icon={
            <ImLinkedin2 className=" h-20 w-20 fill-white lg:h-28 lg:w-28" />
          }
          gradient={'from-sky-500'}
          link={
            'https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/'
          }
          text={
            'Si aprecias mi trabajo en diseño y creación de productos, no dudes en contactarme a través de LinkedIn. Estaré encantado de hablar sobre cualquier proyecto que tengas en mente. ¡Espero tener la oportunidad de colaborar contigo!'
          }
          textButtom={'Conéctate con Migo'}
        />
        <ContactLink
          icon={<ImGithub className=" h-20 w-20 fill-white lg:h-28 lg:w-28" />}
          gradient={'from-black'}
          link={'https://github.com/DanielLenoz'}
          text={
            'Si aprecias mi trabajo en diseño y creación de productos, te invito a explorar mi trabajo en GitHub. Allí podrás encontrar el código y el diseño, lo que te permitirá apreciar la calidad de los productos que desarrollo. ¡Espero que disfrutes explorando mi perfil!'
          }
          textButtom={'Mira el Desarrollo'}
        />

        <div className="diamond sunlight scal absolute -bottom-16 -right-14 h-44 w-40 md:right-36 lg:right-0 xl:right-48"></div>
      </section>
    </main>
  )
}

function ContactLink({ icon, gradient, link, text, textButtom }) {
  return (
    <article className="gradient-contact z-10 grid w-[343px] rounded-3xl text-center text-slate-100 lg:relative lg:flex lg:w-[910px]">
      <div
        className={`grid justify-center rounded-3xl bg-gradient-to-b ${gradient} lg:h-56 lg:w-[1100px] lg:pt-4`}
      >
        {icon}
      </div>
      <section className="lg:mt-5">
        <h1 className="pt-2 font-oswald text-lg font-bold lg:pb-4 lg:text-2xl">
          Daniel Steven Rodríguez Verano
        </h1>
        <p className=" px-3 pt-2 font-roboto text-base font-normal lg:text-lg">
          {text}
        </p>
      </section>
      <Link
        className="gradient-contact my-5 flex h-14 w-72 items-center justify-center justify-self-center rounded-2xl transition hover:scale-125 lg:absolute lg:left-4 lg:top-32  "
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="font-oswald text-lg font-bold lg:text-2xl">
          {textButtom}
        </p>
        <RiArrowRightDoubleLine className="ml-2 h-8 w-8 " />
      </Link>
    </article>
  )
}

export { Contact }
