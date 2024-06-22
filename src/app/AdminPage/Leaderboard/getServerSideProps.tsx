// pages/leaderboard.tsx

import React from "react";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import AuthPageHeader from "../AuthPageHeader";

const prisma = new PrismaClient();

type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  subject: string;
  description?: string | null;
  published: boolean;
  authorId: string;
};

type User = {
  id: string;
  namaLengkap: string;
  email: string;
  username: string;
  password: string;
  role: string;
  posts: Post[];
};

type LeaderboardProps = {
  leaderboard: User[];
};

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <main>
      <AuthPageHeader />
      <div className="min-h-[100vh] min-w-full bg-teal-200/80">
        <div className="min-w-full min-h-[50vh] flex flex-col gap-5 items-center px-24">
          <div className="w-[14ch] text-teal-500/90 bg-white rounded-md text-center text-2xl p-2 my-8 border-b-4 border-slate-300">
            Leaderboard
          </div>
          <div className="min-w-full min-h-[70vh] flex flex-col p-5 gap-3 flex-wrap items-center justify-start">
            {leaderboard &&
              leaderboard.map((user, index) => (
                <div
                  key={user.id}
                  className="w-[70%] h-[7vh] text-teal-500/90 bg-white rounded-md border-b-4 border-slate-300 p-4 flex gap-3 items-center justify-between"
                >
                  <div className="flex gap-3 items-center">
                    <span>{index + 1}.</span>
                    <img
                      src="https://api.dicebear.com/9.x/adventurer/svg"
                      alt=""
                      className="w-5 h-5 rounded-sm"
                    />
                    <h1>{user.namaLengkap}</h1>
                  </div>
                  <span>{user.posts.length} Posts</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
      orderBy: {
        posts: {
          _count: "desc",
        },
      },
    });

    return {
      props: {
        leaderboard: users,
      },
    };
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return {
      props: {
        leaderboard: [],
      },
    };
  }
};
