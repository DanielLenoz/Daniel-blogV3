import React from 'react'
import { NavLink } from 'react-router-dom'
import { blogData } from '../data'
import '../style/gradients.css'
import { Cards } from '../components/Cards'
import { Search } from '../components/Search'
// import { ContainerCards } from '../components/ContainerCards'
import { useBlog } from '../hooks/useBlog'

function Home() {
  const { state } = useBlog()
  const { searchBlogs } = state
  return (
    <main className="grid bg-slate-100 px-5 pb-8 pt-5">
      {blogData
        .map((blog) => {
          return (
            <section className="grid justify-items-center" key={blog.title}>
              <section className="relative">
                <div className="diamond absolute -right-20 -top-24 h-48 w-44"></div>
                <figure className="relative z-10">
                  <picture>
                    <source
                      media="(min-width:945px)"
                      srcSet={blog.imgDesktop}
                    />
                    <img
                      className="rounded-2xl bg-cover bg-center bg-no-repeat"
                      src={blog.imgIphone}
                      alt={blog.altDescription}
                    />
                  </picture>
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
                <article className="mt-2 flex justify-between">
                  <NavLink
                    className="gradient-leer font-roboto text-base font-bold"
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

      <h2 className=" mt-10 text-center font-oswald text-xl font-bold">
        solo la lectura hace creser el alma para comprender sabiduría y
        emocionarnos con cada historia
      </h2>
      <Search />
      <Cards searchBlogs={searchBlogs} />
    </main>
  )
}

export { Home }
