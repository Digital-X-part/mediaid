import Card from "@/models/card/CardModels";
import { NextResponse } from "next/server";


export const GET = async (request) => {
  try {
    const card = await Card.find({
      userId: request.query.userId,
    });

    return NextResponse.json({ card }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const POST = async (request) => {
  try {
    const body = request.json();
    const card = await Card.create({
      userId: body.userId,
      products: body.products,
    });

    return NextResponse.json({ card }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const PUT = async (request) => {
  try {
    const body = request.json();
    const card = await Card.findOneAndUpdate(
      {
        userId: body.userId,
      },
      {
        products: body.products,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({ card }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const DELETE = async (request) => {
  try {
    const body = request.json();
    const card = await Card.findOneAndDelete({
      userId: body.userId,
    });

    return NextResponse.json({ card }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
