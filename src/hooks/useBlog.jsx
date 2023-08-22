import React, { createContext, useContext, useState } from 'react'
import blogData from '../../public/data.json'
import postArea from '../../public/postArea.json'

const BlogContext = createContext()

function BlogPrivider({ children }) {
  const blogData2 = [...blogData]
  const blogDataLast = [...blogData]
  const newblogData2 = blogData2.shift()
  const newblogDataLast = blogDataLast.slice(0, 3)

  const [menuActive, setMenuActive] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const [filterData, setfilterData] = useState([])

  const [themes, setTemes] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }
  const toggleTheme = () => {
    setTemes(!themes)
  }

  if (themes) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }

  return (
    <BlogContext.Provider
      value={{
        blogData2,
        menuActive,
        searchValue,
        filterData,
        newblogDataLast,
        themes,
        setMenuActive,
        setSearchValue,
        setfilterData,
        setTemes,
        toggleMenu,
        toggleTheme,
        postArea,
        blogData,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

function useBlog() {
  return useContext(BlogContext)
}

export { useBlog, BlogPrivider }
