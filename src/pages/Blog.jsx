import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../style/gradients.css'
import '../style/animaction.css'
import { blogData } from '../data'
import { useBlog } from '../hooks/useBlog'
import { Cards } from '../components/Cards'

function Blog() {
  const { state, stateUpdaters } = useBlog()
  const { filterData, newblogDataLast } = state
  const { setfilterData } = stateUpdaters
  const { id } = useParams()

  useEffect(() => {
    const filterDataArea = blogData.filter((area) => area.title.includes(id))
    setfilterData(filterDataArea)
  }, [id])

  return (
    <main className="bg-slate-100 px-5 dark:bg-slate-900">
      {filterData.map((blog) => {
        return (
          <>
            <section className="relative py-5" key={blog.title}>
              <figure className="relative z-10 mx-auto md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]">
                <picture>
                  <source media="(min-width:945px)" srcSet={blog.imgDesktop} />
                  <img
                    className="rounded-2xl bg-cover bg-center bg-no-repeat md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]"
                    src={blog.imgIphone}
                    alt={blog.altDescription}
                  />
                </picture>
              </figure>
              <div className="diamond sunlight scal absolute -bottom-40 -left-20 h-44 w-40 lg:-left-2"></div>
              <div className="diamond sunlight scal absolute -bottom-20 -right-20 h-44 w-40 lg:-right-8"></div>
            </section>
            <section className="relative z-10 dark:text-slate-100 lg:px-28">
              <h1 className=" font-oswald text-xl font-bold lg:text-3xl">
                {blog.title}
              </h1>
              <article className="mb-3 mt-1 flex justify-between">
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
                <p className="font-roboto text-base font-normal lg:text-lg">
                  {blog.date}
                </p>
              </article>
              <p
                className="font-robot text-base font-normal leading-6 text-zinc-950 dark:text-slate-100 lg:text-lg"
                dangerouslySetInnerHTML={{ __html: blog.text }}
              ></p>
            </section>
          </>
        )
      })}

      <section className="relative mt-4 pb-10 md:mt-10">
        <p className="mb-6 text-center font-oswald text-xl font-bold dark:text-slate-100 lg:text-3xl">
          Ultimos Blogs
        </p>
        <div className="diamond sunlight scal absolute -left-20 -top-7 h-44 w-40 lg:-left-12"></div>
        <div className="diamond sunlight scal absolute -right-20 -top-7 h-44 w-40 lg:-right-12"></div>
        <Cards blogData2={blogData} filterData={newblogDataLast} />
      </section>
    </main>
  )
}

export { Blog }
