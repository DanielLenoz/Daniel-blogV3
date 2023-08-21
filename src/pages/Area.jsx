import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Search } from '../components/Search'
import { Cards } from '../components/Cards'
import '../style/gradients.css'
import '../style/animaction.css'
import { useBlog } from '../hooks/useBlog'
import { blogData } from '../data'

function Area() {
  const { id } = useParams()

  const { state, stateUpdaters } = useBlog()
  const { filterData, searchValue } = state
  const { setfilterData, setSearchValue } = stateUpdaters

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
    <section className="mx-5 bg-slate-100">
      {post.map((post) => {
        return (
          <figure
            key={post.id}
            className="mx-auto mt-4 grid h-[239px] w-[335px] items-center justify-center justify-items-center md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]"
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

      <section className="relative mb-16">
        <div className="diamond scal absolute -left-20 -top-20 h-44 w-40"></div>
        <div className="diamond scal absolute -right-20 -top-20 h-44 w-40"></div>
        <Cards blogData2={blogData} filterData={filterData} />
      </section>
    </section>
  )
}

export { Area }

const postArea = [
  {
    id: 'Blogs',
    imgIphone:
      './src/assets/img/img-area/img-iphone/background-Blogs-iphone.jpg',
    imgDesktop:
      './src/assets/img/img-area/img-desktop/background-Blogs-desktop.jpg',
    text: 'para vivir muchas historias y reflexionar estando dentro del pensamiento y sabiduría de otra persona',
  },
  {
    id: 'Events',
    imgIphone:
      './src/assets/img/img-area/img-iphone/background-Events-iphone.jpg',
    imgDesktop:
      './src/assets/img/img-area/img-desktop/background-Events-desktop.jpg',
    text: 'las relaciones son lo mas importante, aprendemos de los demas y de nosotros mismos, volviéndonos mas sabios ',
  },
  {
    id: 'Projects',
    imgIphone:
      './src/assets/img/img-area/img-iphone/background-Projects-iphone.jpg',
    imgDesktop:
      './src/assets/img/img-area/img-desktop/background-Projects-desktop.jpg',
    text: 'la tecnologia es como una espada, si la saves utilizar con sabiduría y entendimiento será tu mejor aliada, sino seras presa de ella ',
  },
]
