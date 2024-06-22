'use client';

import React, { useState } from "react";
import { Post } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface ClientSideComponentProps {
  initialPosts: Post[];
}

const ClientSideComponent: React.FC<ClientSideComponentProps> = ({ initialPosts }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 2;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = initialPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (indexOfLastPost < initialPosts.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (indexOfFirstPost > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="min-w-full min-h-[100vh] bg-teal-200/80">
      <div className="min-w-full min-h-[50vh] flex flex-col gap-5 items-center px-24">
        <div className="w-[14ch] text-teal-500/90 bg-white rounded-md text-center text-2xl p-2 my-8 border-b-4 border-slate-300">
          My Courses!
        </div>
        <div className='min-w-full min-h-[40vh] flex items-center justify-center gap-6 flex-wrap'>
            {currentPosts.map((post) => (
              <div key={post.id} className='w-[30vw] min-h-[50vh] text-teal-500/90 bg-white rounded-md border-b-4 border-slate-300 p-4 flex flex-col gap-3'>
                <h1 className='uppercase text-xl'>{post.title}</h1>
                <img src="https://api.dicebear.com/9.x/icons/svg" alt="" className='w-[100%] h-[35vh] object-cover object-center rounded-md' />
                <h2 className='text-sm'>Subject : {post.subject}</h2>
                <h3 className='text-xs flex flex-col gap-2'><p>Description : </p><p>{post.description}</p></h3>
                <Button variant={'primary'} className='self-end'>Take Course</Button>
              </div>
            ))}
          </div>
        <div className="min-w-full flex gap-4 items-center justify-center my-6">
          <Button onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
          <Button onClick={handleNext} disabled={indexOfLastPost >= initialPosts.length} variant={'primaryOutline'} className='bg-white' size={"lg"}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ClientSideComponent;
