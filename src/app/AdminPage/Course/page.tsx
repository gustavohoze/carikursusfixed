import React from "react";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import AuthPageHeader from "../AuthPageHeader";

const prisma = new PrismaClient();

const getPost = async () => {
  const res = await prisma.post.findMany({
    take: 9,
  });
  return res;
};

const page = async () => {
  const posts = await getPost();

  return (
    <main>
      <AuthPageHeader />
      <div className="min-h-[100vh] min-w-full bg-teal-200/80">
        <div className="min-w-full min-h-[50vh] flex  flex-col gap-5 items-center px-24">
          <div className="w-[14ch] text-teal-500/90 bg-white rounded-md text-center text-2xl p-2 my-8 border-b-4 border-slate-300">
            My Courses!
          </div>
          <div className="min-w-full min-h-[70vh] flex flex-col p-5 gap-3 flex-wrap items-center justify-start">
            {/* <div className='w-1 h-1 border-r-white border-y-[25px] border-r-[50px] border-y-transparent flex relative' /> */}
            {/* <Cards></Cards> */}
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="w-[70%] h-[7vh] text-teal-500/90 bg-white rounded-md border-b-4 border-slate-300 p-4 flex gap-3 items-center justify-between"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://api.dicebear.com/9.x/icons/svg"
                      alt=""
                      className="w-5 h-5 rounded-sm"
                    />
                    <h1>{post.title}</h1>
                  </div>
                  <Button size={'sm'}>Take Course</Button>
                </div>
              );
            })}
          </div>
          <div className="min-w-full flex gap-4 items-center justify-center my-6">
            <Button>Previous</Button>
            <Button variant={"primaryOutline"} className="bg-white" size={"lg"}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
