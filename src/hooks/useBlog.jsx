import React, { useState } from 'react'
import { blogData } from '../data'

function useBlog() {
  const blogData2 = [...blogData]
  const newblogData2 = blogData2.shift()

  const [menuActive, setMenuActive] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const [filterData, setfilterData] = useState([])

  const state = {
    blogData2,
    menuActive,
    searchValue,
    filterData,
  }
  const stateUpdaters = {
    setMenuActive,
    setSearchValue,
    setfilterData,
  }

  return { state, stateUpdaters }
}

export { useBlog }
