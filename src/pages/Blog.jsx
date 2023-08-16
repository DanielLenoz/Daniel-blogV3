import React from 'react'
import { useParams } from 'react-router-dom'


function Blog() {
  const {id} = useParams()
  return <p>Blog { id}</p>
}

export { Blog }
