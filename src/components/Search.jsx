import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function Search() {
  return (
    <>
      <label className="label my-6 flex h-12 w-80 cursor-pointer items-center overflow-hidden rounded-full  border-2 border-gray-950 pl-4 pr-2 focus-within:border-sky-500">
        <input
          className="input rounded-ful h-12 w-80 rounded-full bg-slate-100 font-roboto text-base font-normal outline-transparent"
          type="text"
          placeholder="Que idea te llama la atencion"
          onChange={(event)=>event.target.value}
        />
        <BiSearchAlt className=" h-7 w-7" />
      </label>
    </>
  )
}

export { Search }
