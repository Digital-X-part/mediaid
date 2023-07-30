import connectDb from "@/dbConfig/dbConfig";
import Order from "@/models/order/orderModel";
import { NextResponse } from "next/server";

connectDb();

export const GET = async (request) => {
  try {
    const order = await Order.find();
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// order post request
export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      orderNumber,
      transactionId,
      customerId,
      quantity,
      orderTime,
      shipTo,
      status,
      amount,
      orderItems,
    } = body;

    // Validate the data before creating the order
    // const validationError = new Order({
    //   orderNumber,
    //   transactionId,
    //   customerId,
    //   quantity,
    //   orderTime,
    //   shipTo,
    //   status,
    //   amount,
    //   orderItems,
    // }).validateSync();

    // if (validationError) {
    //   return NextResponse.json(
    //     {
    //       message: "Validation failed",
    //       success: false,
    //       error: validationError.errors,
    //     },
    //     { status: 400 }
    //   );
    // }

    // const { district, area, location, addressType } = shipTo;
    const order = new Order({
      orderNumber,
      transactionId,
      customerId,
      quantity,
      orderTime,
      shipTo,
      status,
      amount,
      orderItems,
    });

    console.log({ body, order });

    await order.save();

    return NextResponse.json(
      {
        message: "Order added successfully",
        success: true,
        order,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Order added failed",
        success: false,
        error,
      },
      { status: 500 } 
    );
  }
};
