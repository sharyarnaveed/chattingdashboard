"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {useForm,SubmitHandler} from "react-hook-form"

type signin={
    username:string,
    password:string
}

const page = () => {

  const router=useRouter()
const {register,handleSubmit}=useForm<signin>()

const [TheSuccess,SetSuccess]=useState<boolean>(false)
const [successMsg,SetMsg]=useState<string>("")
const [errorState,SeterrorState]=useState<boolean>()
const [error,Seterror]=useState<string>("")

const onsignin:SubmitHandler<signin>=async(data)=>
{
try {
    const responce=await axios.post("/api/signin",data)
    console.log(responce.data);
    if (responce.data.success) {
      router.push("/dashboard")
    }
} catch (error) {
    console.log("error in signing in",error);
    
}
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign In
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onsignin)}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="email"
                  {...register("username",{required:true})}
  
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                  placeholder="UserName"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  {...register("password",{required:true})}
  
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                  placeholder="••••••••"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}



export default page