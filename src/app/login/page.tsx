"use client"
import React, { useState } from 'react'

import LoginButton from '../component/LoginButton'
import LoginHeader from '../component/LoginHeader';

const page = () => {
  const [activeUsername, setActiveUsername] = useState("");
  const [activePassword, setActivePassword] = useState("");
  return (
    <div>

    <LoginHeader />
    <main className="h-[90vh] min-w-full bg-teal-200/80 flex items-center justify-center">
      <div className="min-h-[70vh] min-w-[60vw] bg-white rounded-xl flex shadow-lg">
        <div className="flex items-center justify-center h-[70vh] w-[50%] rounded-l-lg with-background-image">
          <img
            src="/altMascot.png"
            alt=""
            className="overflow-hidden rounded-lg"
            width={420}
            height={900}
            />
        </div>
        <div className="w-[50%] rounded-r-lg h-[70vh] flex flex-col p-8 justify-center gap-4 text-teal-500">
          <h1 className="uppercase text-center font-bold">Login</h1>
          <div className="flex text-center text-xs items-end gap-1 justify-center mb-4">
        <p className="text-slate-600">Belum memiliki akun?</p>
        <a href="/register" className="underline ">Register</a>
        </div>
          <div className="flex flex-col gap-8 px-4 mb-6">
            <input
              type="text"
              className="border-b-black border-b-2 p-2 text-sm w-30"
              placeholder="Username"
              value={activeUsername}
              onChange={(e)=>{setActiveUsername(e.target.value)}}
              />
            <input
              type="password"
              className="border-b-black border-b-2 p-2 text-sm w-30"
              placeholder="Password"
              value={activePassword}
              onChange={(e)=>{setActivePassword(e.target.value)}}
              />
          
          </div>
        <LoginButton username={activeUsername} password={activePassword}/>
        </div>
      </div>
    </main>
              </div>
  )
}

export default page