import { Division } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = params.id;
    const division = await Division.find({ id: id });

    return NextResponse.json({ division }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
