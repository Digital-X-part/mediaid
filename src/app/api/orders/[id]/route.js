import connectDb from "@/dbConfig/dbConfig";
import Order from "@/models/order/orderModel";
import { NextResponse } from "next/server";

connectDb();

// get single order details
export const GET = async (request, { params }) => {
  const orderId = params.id;

  const order = await Order.findById(orderId);
  console.log({ order });
  return NextResponse.json({ order }, { status: 200 });
};

