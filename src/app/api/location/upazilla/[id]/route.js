import { Upazilla } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = params.id;
    const upazilla = await Upazilla.find({ district_id: id });
    // console.log(upazilla);
    return NextResponse.json(upazilla, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
