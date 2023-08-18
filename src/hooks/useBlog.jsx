import React, { useEffect, useState } from 'react'
import { blogData } from '../data'

function useBlog() {
  const cardBlogs = [...blogData]
  const newCardBlogs = cardBlogs.shift()

  const [menuActive, setMenuActive] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  // let searchBlogs = []
 //aqui filtra el arrey de objetos "blogdata"
  

  let searchBlogs = blogData.filter((blog) => {
    const blogdata2 = blog.title.toLowerCase()
    const searchText = searchValue.toLocaleLowerCase()
    return blogdata2.includes(searchText)
  })

  console.log(searchValue)
  console.log(searchBlogs)
  const state = {
    cardBlogs,
    menuActive,
    searchValue,
    searchBlogs,
  }
  const stateUpdaters = {
    setMenuActive,
    setSearchValue,
  }

  return { state, stateUpdaters }
}

export { useBlog }
