import connectDb from "@/dbConfig/dbConfig";
import Product from "@/models/product/productModel";
import { NextResponse } from "next/server";

connectDb();

// get single product
export async function GET(request, { params }) {
  const productId = params.id;

  const product = await Product.findById(productId);
  console.log(product, "api products");
  return NextResponse.json({ product }, { status: 200 });
}

// deleted product
export async function DELETE(request, { params }) {
  try {
    const productId = params.id;
    const product = await Product.findByIdAndDelete(productId);

    if (!product)
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );

    return NextResponse.json(
      {
        message: "Product removed",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// update product
export async function PUT(request, { params }) {
  try {
    const productId = params.id;

    const body = await request.json();
    const {
      productName,
      brandName,
      productDescription,
      category,
      subCategory,
      tags,
      highlights,
      sellingType,
      availableStock,
      basePrice,
      startDate,
      productStatus,
      endDate,
      finalPrice,
      // imagesUrls, //todo: add image upload
    } = body;

    const product = await Product.findByIdAndUpdate(
      productId,
      {
        $set: {
          name: productName,
          description: productDescription,
          price: {
            prev: parseFloat(basePrice),
            present: parseFloat(finalPrice),
          },
          category,
          subCategory,
          // imagesUrls, //todo: add image upload
          availableStock: parseInt(availableStock),
          tags,
          highlights: highlights.split(","),
          startDate,
          endDate,
          productStatus,
          sellingType,
          brandName,
        },
      },
      { new: true }
    );

    if (!product)
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    return NextResponse.json(
      {
        message: "Product updated",
        product,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
