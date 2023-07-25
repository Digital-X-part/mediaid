import connectDb from "@/dbConfig/dbConfig";
import Product from "@/models/product/productModel";
import { NextResponse } from "next/server";

   connectDb();

   // get single product
export async function GET(request, {params}) {
   const productId = params.id

   const product = await Product.findById(productId)
console.log(product, 'api products');
   return NextResponse.json({ product }, { status: 200	 })

}

// add product
export const POST = async(request)=>{
   try {} catch (error) {
   
}
}
