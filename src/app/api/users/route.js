import connectDb from "@/dbConfig/dbConfig";
import { User } from "@/models/user/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import createCookie from "@/utility/createCookie/createCookie";

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
        fullName: saveUser.fullName,
        email: saveUser.email,
        photo: saveUser.photo,
        role: saveUser.role,
        rewardPoints: saveUser.rewardPoints,
        addresses: saveUser.addresses,
      },
      { status: 200 }
    );

    const tokenData = {
      id: saveUser.id,
      email: saveUser.email,
    };

    /* // set cookie
    const cookiesStore = cookies();
    
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    cookiesStore.set("token", token,{
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 3600000),
    }); */
    await createCookie(tokenData);

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

// login user
export const PUT = async (request) => {
  try {
    const data = await request.json();
    const { email, password } = data;
    
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User does not exists",
          success: false,
        },
        { status: 404 }
      );
    }
 
    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          message: "Invalid password",
          success: false,
        },
        { status: 400 }
      );
    }

    // create token
    
    const tokenData = {
      id: user.id,
      email: user.email,
    }
    const token = await createCookie(tokenData)
    // console.log(token);
    return NextResponse.json(
      {
        message: "Login successful",
        success: true,
        validPassword,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
