"use client"
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const getUserName = (name: string) => {
  const first = name[0];
  const secondIndex = name.search(" ");
  const second = name[secondIndex + 1];
  return ((first + second).toUpperCase());
}

const getUser = () => {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return user.data;
  }
  return null;
};

type User = {
  id: string;
  namaLengkap: string;
  email: string;
  username: string;
  password: string;
  role: string;
  posts: Object;
}

const AuthPageHeader = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const tempUser = getUser();
    if (tempUser) {
      setUser(tempUser);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      // Perform any additional logout logic here, e.g., redirect to login page
      window.location.href = "/login";
    }
  };

  let username = "St";
  if (user) {
    username = getUserName(user.namaLengkap);
  }

  return (
    <header className="min-h-[10vh] min-w-full shadow-md flex justify-around items-center text-teal-500">
      <img src="/logo.png" alt="" className="w-10 h-10 self-center" />
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/houseLogo.png" alt="" className="w-7" />
        <a href="/UserPage">Home</a>
      </div>
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/taskLogo.png" alt="" className="w-7" />
        <a href="/UserPage/Course">My Course</a>
      </div>
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/compassLogo.png" alt="" className="w-7" />
        <a href="/UserPage/Explore">Explore</a>
      </div>
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/trophyLogo.png" alt="" className="w-7" />
        <a href="/UserPage/Leaderboard">Leaderboard</a>
      </div>
      <div className="flex w-30 h-[10vh] gap-5 items-center relative">
        <img src="/bellLogo.png" alt="" className="w-7 h-7" />
        <div className="relative">
          <Avatar className="w-10 h-10 cursor-pointer" onClick={toggleDropdown}>
            <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-500 hover:text-white"
                  onClick={handleSignOut}
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AuthPageHeader;
