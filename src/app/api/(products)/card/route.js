import Card from "@/models/card/CardModels";
import Product from "@/models/product/productModel";
import { User } from "@/models/user/userModel";
import { NextResponse } from "next/server";

/* ==========================
 * GET
 * ========================== */

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

/* ==========================
 * POST
 * ========================== */

export const POST = async (request) => {
  try {
    const body = request.json();
    const { productId, quantity, userId } = body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Check if the card for the user already exists
    let card = await Card.findOne({ userId });

    if (!card) {
      // If card doesn't exist, create a new card for the user
      card = new Card({
        userId,
        products: [{ productId, quantity }],
      });
    } else {
      // If card exists, find the product in the card
      const existingProductIndex = card.products.findIndex(
        (product) => product.productId.toString() === productId
      );

      if (existingProductIndex !== -1) {
        // If product exists in the card, update the quantity
        card.products[existingProductIndex].quantity = quantity;
      } else {
        // If product does not exist in the card, add it to the card
        card.products.push({ productId, quantity });
      }
    }

    // Save the updated/created card
    await card.save();

    return NextResponse.json({ card }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

/* ==========================
    Product remove form card and return other products
  ====================== */
export const PUT = async (request) => {
  try {
    const body = request.json();
    const { productId, userId } = body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Check if the card for the user already exists
    let card = await Card.findOne({ userId });

    if (!card) {
      return NextResponse.json({ error: "card not found" }, { status: 404 });
    }

    // Check if the product exists in the card
    const existingProducts = card.products.filter(
      (product) => product.productId.toString() !== productId
    );

    card.products = existingProducts;

    // Save the updated/created card
    await card.save();

    return NextResponse.json({ card }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

/* ==========================
    Delete card
  ====================== */

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
