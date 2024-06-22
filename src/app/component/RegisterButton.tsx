import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Toaster, toast } from 'sonner'


const handleSubmit = async (username:string,password:string,email:string,namaLengkap:string)=>{
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
    return res;
}

const RegisterButton = ({username,password,email,namaLengkap}: {username:string,password:string,email:string,namaLengkap:string}) => {
    const route = useRouter();
    return (
    <div className='flex justify-center'>

    <Toaster position='top-center' richColors/>

    <Button className="w-[23vw]" onClick={async ()=>{
        const res = await handleSubmit(username,password,email,namaLengkap);
        // if(res?.status==200){
        //     setTimeout(()=>{
        //         route.replace("/")
        //     }, 2000)
        // }
        }}>Register</Button>
        
    </div>
  )
}

export default RegisterButton