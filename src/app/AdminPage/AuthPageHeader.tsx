"use client"
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const getUserName = (name : string)=>{
 const first = name[0]
 const secondIndex = name.search(" ")
 const second = name[secondIndex+1]
 return ((first + second).toUpperCase())
}
const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return user.data;
};

type User = {
  id: string   
  namaLengkap: string 
  email:     string
  username:  string
  password:  string
  role:    string
  posts: Object
}

const AuthPageHeader = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (window) {
      const temp = getUser();
      setUser(temp);
    }
  }, []);
  let username = "St";
  if(user){
    username = getUserName(user.namaLengkap)
  }
  
  return (
    <header className="min-h-[10vh] min-w-full shadow-md flex justify-around items-center text-teal-500">
      <img src="/logo.png" alt="" className="w-10 h-10 self-center" />
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/houseLogo.png" alt="" className="w-7" />
        <a href="/AdminPage">Home</a>
      </div>
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/taskLogo.png" alt="" className="w-7" />
        <a href="/AdminPage/Course">My Course</a>
      </div>
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/compassLogo.png" alt="" className="w-7" />
        <a href="/AdminPage/Explore">Explore</a>
      </div>
      <div className="flex items-center gap-2 w-13 h-7">
        <img src="/trophyLogo.png" alt="" className="w-7" />
        <a href="/AdminPage/Leaderboard">Leaderboard</a>
      </div>
      <div className="flex w-30 h-[10vh]  gap-5 items-center">
        <img src="/bellLogo.png" alt="" className="w-7 h-7" />
        {/* <img src="/profileLogo.png" alt="" className="w-10 h-10" /> */}
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg"/>
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default AuthPageHeader;
