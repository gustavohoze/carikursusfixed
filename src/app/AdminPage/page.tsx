import React from 'react'
import AuthPageHeader from './AuthPageHeader'
import Footer from '../Footer'
import Cards from '../component/Cards'

const page = () => {
  return (

    <main>
      <AuthPageHeader />
      <div className='min-h-[100vh] min-w-full bg-teal-200/80'>
      <div className='min-w-full min-h-[50vh] flex  flex-col gap-5 items-center px-24'>
        <div className='w-[14ch] text-teal-500/90 bg-white rounded-md text-center text-2xl p-2 my-8 border-b-4 border-slate-300'>
          Your Progress!
        </div>
        <div className='min-w-full min-h-[40vh] flex '>
          <Cards></Cards>
        </div>
      </div>
      </div>
    </main>
  )
}

export default page