import connectDb from "@/dbConfig/dbConfig";
import { User } from "@/models/user/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

connectDb();
export const GET = async (request) => {
  try {
    const products = await User.find();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "User data failed",
        error,
      },
      { status: 500 }
    );
  }
};
export const POST = async (request) => {
  try {
    const data = await request.json(); // Parse the JSON data from the request body

    const {
      fullName,
      phone,
      email,
      photo,
      password,
      role,
      rewardPoints,
      addresses,
    } = data; // Use the parsed data to extract user properties

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullName,
      phone,
      email,
      photo,
      password: hashedPassword,
      role,
      rewardPoints,
      addresses,
    });

    const saveUser = await newUser.save();
    const response = NextResponse.json(
      {
        message: "User added successfully",
        success: true,
        newUser,
      },
      { status: 200 }
    );
    // set cookie
    const cookiesStore = cookies();
    const tokenData = {
      id: saveUser.id,
      email: saveUser.email,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    cookiesStore.set("token", token);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "User added failed",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
};
