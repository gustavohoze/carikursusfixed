'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Post } from '@prisma/client';
import AuthPageHeader from '@/app/AdminPage/AuthPageHeader';

interface PageProps {
  initialPosts: Post[];
}

const ClientSideComponent: React.FC<PageProps> = ({ initialPosts }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const postsPerPage = 2;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredPosts = initialPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (indexOfLastPost < filteredPosts.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (indexOfFirstPost > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <main>
      <AuthPageHeader />
      <div className='min-h-[100vh] min-w-full bg-teal-200/80'>
        <div className='min-w-full min-h-[50vh] flex flex-col gap-5 items-center px-24'>
          <div className='w-[18ch] text-teal-500/90 bg-white rounded-md text-center text-2xl p-2 my-8 border-b-4 border-slate-300'>
            Available Courses!
          </div>
          <input
            type="text"
            placeholder="Search by title or subject..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="p-3 rounded-md mb-4 w-[40vw] border border-b-4 border-slate-300"
          />
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
          <div className='min-w-full flex gap-4 items-center justify-center my-6'>
            <Button onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
            <Button onClick={handleNext} disabled={indexOfLastPost >= filteredPosts.length} variant={'primaryOutline'} className='bg-white' size={"lg"}>Next</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientSideComponent;
