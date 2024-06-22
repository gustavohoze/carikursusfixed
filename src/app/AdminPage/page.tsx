import React from "react";
import { PrismaClient, Post } from "@prisma/client";
import AuthPageHeader from "./AuthPageHeader";
import ClientSideComponent from "./ClientSideComponent";


const prisma = new PrismaClient();

const getPost = async (): Promise<Post[]> => {
  const res = await prisma.post.findMany({
    where: {
      published: true,
    },
    take: 9,
  });
  return res;
};

const Page = async () => {
  const posts = await getPost();

  return (
    <main>
      <AuthPageHeader />
      <ClientSideComponent initialPosts={posts} />
    </main>
  );
};

export default Page;
