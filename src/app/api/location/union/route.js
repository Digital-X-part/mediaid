import connectDb from "@/dbConfig/dbConfig";
import { Union } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

connectDb();

export const GET = async (request) => {
  try {
    const union = await Union.find();
    return NextResponse.json(union , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// union post request
export const POST = async (request) => {
  try {
    const body = await request.json();
    const unions = body.data;

    // Create a new Union object for each union in the array.
    const divisionModels = unions.map((union) => {
      return new Union({
        id: union.id,
        upazilla_id: union.upazilla_id,
        name: union.name,
        bn_name: union.bn_name,
        url: union.url,
      });
    });
    console.log(divisionModels);

    // Save the union models in a single MongoDB operation.
    await Union.insertMany(divisionModels);

    return NextResponse.json(
      {
        message: "Districts added successfully",
        success: true,
        unions,
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
