"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import React from 'react'
import { Toaster, toast } from 'sonner'


const handleSubmit = async (username:string,password:string,email:string,namaLengkap:string)=>{
    const route = useRouter();
    let role = "student"
    if(email.includes("admin")){
        role = "admin";
    }
    const res = await fetch("http://localhost:3000/api/users",{
        method:"POST",
        body:JSON.stringify({username,password,email,namaLengkap,role})
    })
    if(res.status!=200){
        toast.error("Account couldn't be made, make sure your email and username are unique");
        return
    }
    toast.success("Account has been successfully created!")
    route.replace("/");
}

const RegisterButton = ({username,password,email,namaLengkap}: {username:string,password:string,email:string,namaLengkap:string}) => {
  return (
    <div className='flex justify-center'>

    <Toaster position='top-center' richColors/>

    <Button className="w-[23vw]" onClick={()=>{
        handleSubmit(username,password,email,namaLengkap);
        }}>Register</Button>
    </div>
  )
}

export default RegisterButton