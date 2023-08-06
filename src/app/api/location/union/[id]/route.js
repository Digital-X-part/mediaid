import { Union } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = params.id;
    const union = await Union.find({ upazilla_id: id });
    console.log(union);
    return NextResponse.json({ union }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
