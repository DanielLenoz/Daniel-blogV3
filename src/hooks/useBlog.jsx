import React, { useState } from 'react'
import { blogData } from '../data'

function useBlog() {
  const blogData2 = [...blogData]
  const newblogData2 = blogData2.shift()

  const [menuActive, setMenuActive] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const [datoFiltrados, setDatoFiltrados] = useState([])

  const state = {
    blogData2,
    menuActive,
    searchValue,
    datoFiltrados,
  }
  const stateUpdaters = {
    setMenuActive,
    setSearchValue,
    setDatoFiltrados,
  }

  return { state, stateUpdaters }
}

export { useBlog }
