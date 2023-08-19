import React from 'react'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section>
      <section>
        <article>
          <div>
            <ImLinkedin2 className=" h-12 w-12" />
          </div>
          <h1>Daniel Steven Rodríguez Verano</h1>
          <p>
            Si aprecias mi trabajo en diseño y creación de productos, no dudes
            en contactarme a través de LinkedIn. Estaré encantado de hablar
            sobre cualquier proyecto que tengas en mente. ¡Espero tener la
            oportunidad de colaborar contigo!
          </p>
          <Link
            className=" bg-slate-800"
            to={
              'https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/'
            }
          >
            <p>conéctate con migo</p>
            <MdOutlineDoubleArrow />
          </Link>
        </article>
        <article>
          <div>
            <ImGithub className=" h-12 w-12" />
          </div>
          <h1>Daniel Steven Rodríguez Verano</h1>
          <p>
            Si aprecias mi trabajo en diseño y creación de productos, te invito
            a explorar mi trabajo en GitHub. Allí podrás encontrar el código y
            el diseño, lo que te permitirá apreciar la calidad de los productos
            que desarrollo. ¡Espero que disfrutes explorando mi perfil!
          </p>
          <Link className=" bg-slate-800" to={'https://github.com/DanielLenoz'}>
            <p>mira el desarrollo</p>
            <MdOutlineDoubleArrow />
          </Link>
        </article>
      </section>
    </section>
  )
}

export { Contact }
