import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { blogData } from '../data'
import '../style/gradients.css'
import '../style/animaction.css'
import { Cards } from '../components/Cards'
import { Search } from '../components/Search'
import { useBlog } from '../hooks/useBlog'

function Home() {
  const { state, stateUpdaters } = useBlog()
  const { blogData2, filterData, searchValue } = state
  const { setfilterData, setSearchValue } = stateUpdaters

  useEffect(() => {
    const nuevosDatosFiltrados = blogData2.filter(
      (data) =>
        data.title.toLowerCase().includes(searchValue) ||
        data.description.toLowerCase().includes(searchValue),
    )
    setfilterData(nuevosDatosFiltrados)
  }, [searchValue])

  return (
    <main className="grid bg-slate-100 px-5 pb-8 pt-5 dark:bg-slate-900">
      {blogData
        .map((blog) => {
          return (
            <section
              className="grid justify-center justify-items-center dark:text-slate-100 lg:flex lg:gap-8 "
              key={blog.title}
            >
              <section className="relative">
                <div className="diamond scal sunlight absolute -right-20 -top-24 h-48 w-44"></div>
                <figure className="relative z-10">
                  <picture>
                    <source
                      media="(min-width:1440px)"
                      srcSet={blog.imgDesktop}
                    />
                    <img
                      className="rounded-2xl bg-cover bg-center bg-no-repeat xl:h-[330px] xl:w-[700px]"
                      src={blog.imgIphone}
                      alt={blog.altDescription}
                    />
                  </picture>
                </figure>
                <div className="diamond scal sunlight absolute -bottom-24 -left-24 h-48 w-44"></div>
              </section>
              <section className="z-10 grid lg:w-5/12">
                <h1 className=" text-center font-oswald text-xl font-bold lg:text-start lg:text-3xl">
                  {blog.title}
                </h1>
                <p
                  className={`${
                    blog.hashtag === '#Blogs'
                      ? 'text-purple-900'
                      : blog.hashtag === '#Events'
                      ? 'text-lime-400'
                      : 'text-teal-600'
                  } font-oscald text-base font-bold lg:text-lg`}
                >
                  {blog.hashtag}
                </p>
                <p className="font-robot text-base font-normal leading-6 lg:text-lg">
                  {blog.description}
                </p>
                <article className="mt-2 flex justify-between lg:items-center">
                  <NavLink
                    className="gradient-leer-rojo gradient-leer font-roboto text-base font-bold lg:text-lg "
                    to={`/blog/${blog.title}`}
                  >
                    Leer mas
                  </NavLink>
                  <p className="font-roboto text-base font-normal lg:text-lg">
                    {blog.date}
                  </p>
                </article>
              </section>
            </section>
          )
        })
        .slice(0, 1)}

      <h2 className=" mt-10 text-center font-oswald text-xl font-bold dark:text-slate-100 lg:mx-32 lg:text-3xl">
        solo la lectura hace creser el alma para comprender sabiduría y
        emocionarnos con cada historia
      </h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Cards blogData2={blogData2} filterData={filterData} />
    </main>
  )
}

export { Home }
