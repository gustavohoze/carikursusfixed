import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PrismaClient, Post } from '@prisma/client';
import ClientSideComponent from '@/components/ClientSideComponent';

const prisma = new PrismaClient();

const getPosts = async (): Promise<Post[]> => {
  const res = await prisma.post.findMany({
    where: {
      published: true,
    },
    take: 9,
  });
  return res;
};

const Page = async () => {
  const initialPosts = await getPosts();

  return (
    <ClientSideComponent initialPosts={initialPosts} />
  );
};

export default Page;
