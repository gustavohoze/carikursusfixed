"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import RegisterButton from "../component/RegisterButton";

const page = () => {
  const [activeNamaLengkap, setActiveNamaLengkap] = useState("");
  const [activeUsername, setActiveUsername] = useState("");
  const [activePassword, setActivePassword] = useState("");
  const [activeEmail, setActiveEmail] = useState("");
  return (
    <main className="h-[90vh] min-w-full bg-teal-200/80 flex items-center justify-center">
      <div className="min-h-[70vh] min-w-[60vw] bg-white rounded-xl flex shadow-lg">
        <div className="flex items-center justify-center h-[70vh] w-[50%] rounded-l-lg with-background-image">
          <img
            src="/alt2Mascot.png"
            alt=""
            className="overflow-hidden rounded-lg"
            width={420}
            height={900}
          />
        </div>
        <div className="w-[50%] rounded-r-lg h-[70vh] flex flex-col p-8 justify-center gap-4 text-teal-500">
          <h1 className="uppercase mb-4 text-center font-bold">Registration</h1>
          <div className="flex flex-col gap-4 px-4">
            <input
              type="text"
              className="border-b-black border-b-2 p-2 text-sm w-30 text-teal-600 active:border-none"
              placeholder="Nama lengkap"
              value={activeNamaLengkap}
              onChange={(e)=>setActiveNamaLengkap(e.target.value)}
              
            />
            <input
              type="text"
              className="border-b-black border-b-2 p-2 text-sm w-30 text-teal-600 active:border-none"
              placeholder="Email"
              value={activeEmail}
              onChange={(e)=>setActiveEmail(e.target.value)}
              
            />
            <input
              type="text"
              className="border-b-black border-b-2 p-2 text-sm w-30"
              placeholder="Username"
              value={activeUsername}
              onChange={(e)=>setActiveUsername(e.target.value)}
            />
            <input
              type="password"
              className="border-b-black border-b-2 p-2 text-sm w-30"
              placeholder="Password"
              value={activePassword}
              onChange={(e)=>setActivePassword(e.target.value)}
            />
          
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-slate-600 text-center">
              Dengan masuk atau mendaftar, saya menyetujui
            </p>
            <a href="/" className="text-xs underline text-center">
              Ketentuan Penggunaan dan Kebijakan Privasi
            </a>
          </div>

        <RegisterButton username={activeUsername} email={activeEmail} namaLengkap={activeNamaLengkap} password={activePassword}/>
        <div className="flex text-center text-xs items-end gap-1 justify-center">
        <p className="text-slate-600">Sudah memiliki akun?</p>
        <a href="/login" className="underline ">Sign in</a>
        </div>
        </div>
      </div>
    </main>
  );
};

export default page;
