import React, { useState } from 'react'
import { blogData } from '../data'

function useBlog() {
  const cardBlogs = [...blogData]
  const newCardBlogs = cardBlogs.shift()
  
  const [menuActive, setMenuActive] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const state = {
    cardBlogs,
    menuActive,
    searchValue,
  }
  const stateUpdaters = {
    setMenuActive,
    setSearchValue,
  }

  return { state, stateUpdaters }
}

export { useBlog }
