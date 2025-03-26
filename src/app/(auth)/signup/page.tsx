"use client"
import axios from 'axios'
import React, { useState } from 'react'
import {useForm,SubmitHandler} from "react-hook-form"

type signup={
    fullname:string,
    username:string,
    password:string
}


const page = () => {

const [TheSuccess,SetSuccess]=useState<boolean>(false)
const [successMsg,SetMsg]=useState<string>("")
const {register,handleSubmit,resetField}=useForm<signup>()
const [errorState,SeterrorState]=useState<boolean>()
const [error,Seterror]=useState<string>("")
const onsignup:SubmitHandler<signup>=async(data)=>
{
    try {
        console.log(data);
        const responce=await axios.post("/api/signup",data)
        console.log(responce.data);
        if(responce.data.success)
        {
          SetSuccess(true)
          SetMsg(responce.data.message)
          SeterrorState(false)

        }else{
          SeterrorState(true)
          Seterror(responce.data.message)
          SetSuccess(false)

        }
        
    } catch (error) {
        console.log("error in signing up",error);
        
    }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onsignup)}>
          {TheSuccess?<h1>{successMsg}</h1>:""}
          {errorState? <h1>{error}</h1>:""}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
            
                {...register("fullname",{required:true})}
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                placeholder="John Doe"
              />
            </div>
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page