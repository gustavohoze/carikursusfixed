import React from 'react'

const Cards = (title : string, subject :string,description :string) => {
  return (
    <div className='w-[30vw] h-[40vh] text-teal-500/90 bg-white rounded-md border-b-4 border-slate-300 p-4'>
      <h1>{title}</h1>
      <h2>{subject}</h2>
      <h3>{description}</h3>
    </div>
  )
}

export default Cards