import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
export async function POST(request: Request) {
  try {
    const { fullname, username, password } = await request.json();


    if (!fullname || !username || !password) {
      return NextResponse.json(
    {
      success:false,
      message: "Please fill in all fields",
    }
      );
    }

    const Checkuser=await User.findOne({
      where:{
        username:username
      }
    })

 
    if(Checkuser)
      {
        return NextResponse.json({ 
          message: "User Already Exist",
          success:false
        }, { status: 201 });
      }
      else{

const HashedPassword= await bcrypt.hash(password,12)

console.log(HashedPassword);

        const result=await User.create({fullname,username,password:HashedPassword})


        return NextResponse.json({ 
          message: "User created successfully",
          success:true
        }, { status: 201 });
      }



  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
