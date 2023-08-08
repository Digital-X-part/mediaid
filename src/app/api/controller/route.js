import connectDb from "@/dbConfig/dbConfig";
import Controller from "@/models/control/controllerModel";
import { NextResponse } from "next/server";

connectDb();

export const GET = async (request) => {
  try {
    const controller = await Controller.find();
    return NextResponse.json({ controller }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// controller post request
export const PATCH = async (request) => {
  try {
    const body = await request.json();
    const { pointConvert, offerCardDiscount } = body;

    const controller = new Controller({
      pointConvert,
      offerCardDiscount,
    });

    console.log({ body, controller });

    await controller.save();

    return NextResponse.json(
      {
        message: "Controller added successfully",
        success: true,
        controller,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Controller added failed",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
};
