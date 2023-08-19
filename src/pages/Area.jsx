import React from 'react'
import { useParams } from 'react-router-dom'
import { Search } from '../components/Search'
import { Cards } from '../components/Cards'
import '../style/gradients.css'

function Area() {
  const { id } = useParams()

  let post = postArea.filter((area) => area.id.includes(id))

  console.log(id)
  console.log(post)
  return (
    <>
      <section className=" bg-slate-100">
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
      </section>

      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <section>
        <div className="diamond"></div>
        <Cards blogData2={blogData2} filterData={filterData} />
        <div className="diamond"></div>
      </section> */}
    </>
  )
}

export { Area }

const postArea = [
  {
    id: 'blogs',
    imgIphone:
      './src/assets/img/img-area/img-iphone/background-Blogs-iphone.jpg',
    imgDesktop:
      './src/assets/img/img-area/img-desktop/background-Blogs-desktop.jpg',
    text: 'para vivir muchas historias y reflexionar estando dentro del pensamiento y sabiduría de otra persona',
  },
  {
    id: 'events',
    imgIphone:
      './src/assets/img/img-area/img-iphone/background-Events-iphone.jpg',
    imgDesktop:
      './src/assets/img/img-area/img-desktop/background-Events-desktop.jpg',
    text: 'las relaciones son lo mas importante, aprendemos de los demas y de nosotros mismos, volviéndonos mas sabios ',
  },
  {
    id: 'projects',
    imgIphone:
      './src/assets/img/img-area/img-iphone/background-Projects-iphone.jpg',
    imgDesktop:
      './src/assets/img/img-area/img-desktop/background-Projects-desktop.jpg',
    text: 'la tecnologia es como una espada, si la saves utilizar con sabiduría y entendimiento será tu mejor aliada, sino seras presa de ella ',
  },
]
