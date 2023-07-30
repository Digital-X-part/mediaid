import connectDb from "@/dbConfig/dbConfig";
import { UpdateUser, User } from "@/models/user/userModel";
import { NextResponse } from "next/server";

connectDb();

// get single user details
export const GET = async (request, { params }) => {
  try {
    const userId = params.id;

    const user = await User.findById(userId);
    console.log({ user });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// user details update

export const PATCH = async (request, { params }) => {
  try {
    const userId = params.id;
    const body = await request.json();
    const update = await UpdateUser.findOneAndUpdate({ _id: userId }, body);
    console.log({ update });
    return NextResponse.json({ update }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
};
