import { District } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = params.id;
    const district = await District.find({ division_id: id });
    // console.log(district);
    return NextResponse.json(district, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
