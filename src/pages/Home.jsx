import React from 'react'
import { NavLink } from 'react-router-dom'
import { blogData } from '../data'
import '../style/gradients.css'

function Home() {
  return (
    <main>
      {blogData
        .map((blog) => {
          return (
            <section
              className="mx-5 grid justify-items-center"
              key={blog.title}
            >
              <section className="relative">
                <div className="diamond absolute -right-20 -top-24 h-48 w-44"></div>
                <figure className="relative z-10">
                  <img
                    src={blog.imgIphone}
                    alt={blog.altDescription}
                    className=" h-52 w-80 "
                  />
                </figure>
                <div className="diamond absolute -bottom-24 -left-24 h-48 w-44"></div>
              </section>
              <section className="z-10 grid">
                <h1 className=" text-center font-oswald text-xl font-bold">
                  {blog.title}
                </h1>
                <p
                  className={`${
                    blog.hashtag === '#Blogs'
                      ? 'text-purple-900'
                      : blog.hashtag === '#Events'
                      ? 'text-lime-400'
                      : 'text-teal-600'
                  } font-oscald text-base font-bold`}
                >
                  {blog.hashtag}
                </p>
                <p className="font-robot text-base font-normal leading-6 text-zinc-950">
                  {blog.description}
                </p>
                <article className="flex justify-between">
                  <NavLink
                    className="gradient-leer font-roboto text-base font-normal"
                    to={`/blog/${blog.title}`}
                  >
                    Leer mas
                  </NavLink>
                  <p className="font-roboto text-base font-normal">
                    {blog.date}
                  </p>
                </article>
              </section>
            </section>
          )
        })
        .slice(0, 1)}
    </main>
  )
}

export { Home }
