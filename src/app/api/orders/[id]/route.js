import connectDb from "@/dbConfig/dbConfig";
import Order from "@/models/order/orderModel";
import { NextResponse } from "next/server";

connectDb();

// get single order details
export const GET = async (request, { params }) => {
  try {
    const orderId = params.id;
    const order = await Order.findById(orderId);
    console.log({ order });
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
