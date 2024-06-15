"use client"
import { Button } from '@/components/ui/button'
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Toaster, toast } from 'sonner'

const prisma = new PrismaClient();
const handleSubmit= async (username:string, password:string)=>{
    const res = await fetch("http://localhost:3000/api/users/asdsadsadas",{
        method:"POST",
        body:JSON.stringify({username,password})
    })
    return res.json();
}

const LoginButton = ({username, password} : {username:string, password:string}) => {
    const router = useRouter();
  return (
    <div className='flex justify-center'>

    <Toaster position='top-center' richColors/>

    <Button className="w-[23vw]" onClick={async ()=>{
        let trimmedUsername = username.trim()
        const res = await handleSubmit(trimmedUsername,password)

        if(res.data === null){
            toast.error("Invalid username or password!")
            return
        }
        toast.success("Login successfull!")
        localStorage.setItem("user",JSON.stringify(res));
        router.replace("/")
    }}>Login</Button>
    </div>
  )
}

export default LoginButton