import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/gradients.css'

function Cards({ blogData2, filterData, blogsArea }) {
  if (blogsArea) {
    return filterArea(blogsArea)
  }

  const lista = filterData.length > 0 ? filterData : blogData2

  return (
    <section className="grid justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
      {!filterData.length && blogData2.length ? (
        <p>no encontrado</p>
      ) : (
        <>
          {lista.map((blog) => {
            return (
              <section
                className="group relative grid h-[274px] w-[335px] justify-items-center justify-self-center overflow-hidden rounded-2xl lg:h-[317px] lg:w-[416px]"
                key={blog.title}
              >
                <section className="relative">
                  <figure className="relative z-10 h-full w-full">
                    <img
                      className="h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat"
                      src={blog.imgIphone}
                      alt={blog.altDescription}
                    />
                  </figure>
                </section>
                <section className="greadient-Card absolute top-52 z-10 grid h-full w-full rounded-2xl p-5 duration-500 ease-in-out group-hover:top-0 lg:top-60">
                  <h1 className=" mb-5 text-center font-oswald text-xl font-bold text-slate-100 lg:text-2xl">
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
                  <p className="font-robot mb-4 text-base font-normal leading-6 text-slate-100 lg:text-lg">
                    {blog.description}
                  </p>
                  <article className="mt-2 flex justify-between">
                    <NavLink
                      className="gradient-leer font-roboto text-base font-bold lg:text-lg"
                      to={`/blog/${blog.title}`}
                    >
                      Leer mas
                    </NavLink>
                    <p className="font-roboto text-base font-normal text-slate-100 lg:text-lg">
                      {blog.date}
                    </p>
                  </article>
                </section>
              </section>
            )
          })}
        </>
      )}
    </section>
  )
}

function filterArea(blogsArea) {
  return (blogData2 = blogData2.filter((hashtag) =>
    hashtag.hashtag.includes(blogsArea),
  ))
}

export { Cards }
