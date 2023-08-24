import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBlog } from '../hooks/useBlog'
import { Search } from '../components/Search'
import { Cards } from '../components/Cards'
import '../style/gradients.css'
import '../style/animaction.css'

function Area() {
  const { id } = useParams()

  const {
    setfilterData,
    setSearchValue,
    filterData,
    searchValue,
    postArea,
    blogData,
  } = useBlog()

  useEffect(() => {
    const nuevosDatosFiltrados = filterData.filter(
      (data) =>
        data.title.toLowerCase().includes(searchValue) ||
        data.description.toLowerCase().includes(searchValue),
    )
    setfilterData(nuevosDatosFiltrados)
  }, [searchValue])

  useEffect(() => {
    const filterDataArea = blogData.filter((area) =>
      area.hashtag.includes(`#${id}`),
    )
    setfilterData(filterDataArea)
  }, [id, searchValue.length === 0])

  let post = postArea.filter((area) => area.id.includes(id))

  return (
    <main className="bg-slate-100 px-5 dark:bg-slate-900">
      {post.map((post) => {
        return (
          <figure
            key={post.id}
            className="mx-auto grid h-[239px] w-[335px] items-center justify-center justify-items-center pt-4 md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]"
          >
            <picture>
              <source media="(min-width:945px)" srcSet={post.imgDesktop} />
              <img
                src={post.imgIphone}
                alt={post.text}
                className="rounded-2xl bg-cover bg-center bg-no-repeat md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]"
              />
            </picture>
            <figcaption className="absolute z-10 w-96 p-11 text-center font-oswald text-xl font-extrabold text-slate-100 md:p-0 lg:w-[800px] lg:text-3xl">
              {post.text}
            </figcaption>
          </figure>
        )
      })}

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <section className="relative pb-16">
        <div className="diamond sunlight scal absolute -left-20 -top-20 h-44 w-40"></div>
        <div className="diamond sunlight scal absolute -right-20 -top-20 h-44 w-40"></div>
        <Cards blogData2={blogData} filterData={filterData} />
      </section>
    </main>
  )
}

export { Area }
