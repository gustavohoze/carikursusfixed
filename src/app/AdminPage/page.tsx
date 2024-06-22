import React from 'react'
import AuthPageHeader from './AuthPageHeader'
import { Button } from '@/components/ui/button'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

const getPost = async () => {
  const res = await prisma.post.findMany({
    where: {
      published: true, 
    },
    take: 9, 
  });
  return res;
};


const page = async () => {
  const posts = await getPost();

  return (

    <main>
      <AuthPageHeader />
      <div className='min-h-[100vh] min-w-full bg-teal-200/80'>
      <div className='min-w-full min-h-[50vh] flex  flex-col gap-5 items-center px-24'>
        <div className='w-[18ch] text-teal-500/90 bg-white rounded-md text-center text-2xl p-2 my-8 border-b-4 border-slate-300'>
          Available Courses!
        </div>
        <div className='min-w-full min-h-[70vh] flex items-center justify-center gap-12 flex-wrap'>
          {/* <div className='w-1 h-1 border-r-white border-y-[25px] border-r-[50px] border-y-transparent flex relative' /> */}
          {/* <Cards></Cards> */}
          {
            posts.map((post)=>{
              return  (<div key={post.id} className='w-[30vw] min-h-[50vh] text-teal-500/90 bg-white rounded-md border-b-4 border-slate-300 p-4 flex flex-col gap-3'>
              <h1 className='uppercase text-xl'>{post.title}</h1>
              <img src="https://api.dicebear.com/9.x/icons/svg" alt="" className='w-[100%] h-[35vh] object-cover object-center rounded-md'/>
              <h2 className='text-sm'>Subject : {post.subject}</h2>
              <h3 className='text-xs flex flex-col gap-2'> <p>Description : </p><p>{post.description}</p></h3>
              <Button variant={'primary'} className='self-end'>Take Course</Button>
            </div>)
            })
          }
        </div>
        <div className='min-w-full flex gap-4 items-center justify-center my-6' >
          <Button>Previous</Button>
          <Button variant={'primaryOutline'} className='bg-white' size={"lg"}>Next</Button>
        </div>
      </div>
      </div>

    </main>
  )
}

export default page