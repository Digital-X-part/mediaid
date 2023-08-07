import connectDb from "@/dbConfig/dbConfig";
import { District } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

connectDb();

export const GET = async (request) => {
  try {
    const district = await District.find();
    return NextResponse.json( district , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};



// district post request
export const POST = async (request) => {
  try {
    const body = await request.json();
    const districts = body.data;

    // Create a new District object for each district in the array.
    const divisionModels = districts.map((district) => {
      return new District({
        id: district.id,
        division_id: district.division_id,
        name: district.name,
        bn_name: district.bn_name,
        lat: district.lat,
        lon: district.lon,
        url: district.url,
      });
    });
    console.log(divisionModels);

    // Save the district models in a single MongoDB operation.
    await District.insertMany(divisionModels);

    return NextResponse.json(
      {
        message: "Districts added successfully",
        success: true,
        districts,
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
