import connectDb from "@/dbConfig/dbConfig";
import { Division } from "@/models/location/locationModel";
import { NextResponse } from "next/server";

connectDb();

export const GET = async (request) => {
  try {
    const division = await Division.find();
    console.log(division);
    return NextResponse.json(division, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// division post request
export const POST = async (request) => {
  try {
    const body = await request.json();
    const divisions = body.data;

    // Create a new Division object for each division in the array.
    const divisionModels = divisions.map((division) => {
      return new Division({
        id: division.id,
        name: division.name,
        bn_name: division.bn_name,
        url: division.url,
      });
    });

    // Save the division models in a single MongoDB operation.
    await Division.insertMany(divisionModels);

    return NextResponse.json(
      {
        message: "Divisions added successfully",
        success: true,
        divisions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Divisions added failed",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
};
