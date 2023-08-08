import connectDb from "@/dbConfig/dbConfig";
import { Upazilla } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

connectDb();

export const GET = async (request) => {
  try {
    const upazilla = await Upazilla.find();
    return NextResponse.json({ upazilla }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// upazilla post request
export const POST = async (request) => {
  try {
    const body = await request.json();
    const upazillas = body.upazilla;

    // Create a new Upazilla object for each upazilla in the array.
    const divisionModels = upazillas.map((upazilla) => {
      return new Upazilla({
        id: upazilla.id,
        district_id: upazilla.district_id,
        name: upazilla.name,
        bn_name: upazilla.bn_name,     
        url: upazilla.url,
      });
    });
    console.log(divisionModels);

    // Save the upazilla models in a single MongoDB operation.
    await Upazilla.insertMany(divisionModels);

    return NextResponse.json(
      {
        message: "Districts added successfully",
        success: true,
        upazillas,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Districts added failed",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
};
