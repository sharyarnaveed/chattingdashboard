import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/lib/models/user";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  try {
    if (!username || !password) {
      return NextResponse.json({
        message: "Fill All The Fields",
        success: false,
      });
    }

    const FindUser = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!FindUser) {
      console.log("user not found");

      return NextResponse.json({
        message: "User Not Found",
        success: false,
      });
    }

    const HashedUserPassword = FindUser?.dataValues.password;

    const MtachPassword = await bcrypt.compare(password, HashedUserPassword);
    console.log(MtachPassword);

    if (!MtachPassword) {
      return NextResponse.json({
        message: "Invalid Password",
        success: false,
      });
    }
    const userid = FindUser?.dataValues.id;

    const tokenData = {
      userid: userid,
      username: username,
    };

    const token = await jwt.sign(tokenData, process.env.TOKENSECRET!, {
      expiresIn: "2d",
    });

    const responce = NextResponse.json(
      {
        message: "User Logged In",
        success: true,
      },
      { status: 201 }
    );

    responce.cookies.set("token", token, {
      httpOnly: true,
      secure:true,
      sameSite:"strict"
    });

    return responce;
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      success: false,
    });
  }
}
