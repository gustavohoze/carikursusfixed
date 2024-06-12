"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { Toaster, toast } from 'sonner'

const LoginButton = () => {
  return (
    <div className='flex justify-center'>

    <Toaster position='top-center' richColors/>

    <Button className="w-[23vw]" onClick={()=>{
        toast.success("Successfully login!")
        }}>Login</Button>
    </div>
  )
}

export default LoginButton