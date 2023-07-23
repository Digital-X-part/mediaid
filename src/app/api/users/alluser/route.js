import connectDb from "@/dbConfig/dbConfig";
import { User } from "@/models/user/userModel";
import { NextResponse } from "next/server";

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
    await connectDb();
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

    const newUser = new User({
      fullName,
      phone,
      email,
      photo,
      password,
      role,
      rewardPoints,
      addresses,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "User added successfully",
        success: true,
        newUser,
      },
      { status: 200 }
    );
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
