import connectDb from "@/dbConfig/dbConfig";
import Product from "@/models/product/productModel";
import { NextResponse } from "next/server";
   connectDb();

   // get single product
export async function GET(request) {
   
   const products = await Product.find()
   
   return NextResponse.json({ products }, { status: 200	 })
   
}

// add product
export const POST = async(request)=>{
   try {
   
   const body = await request.json()
   const { 
      
         productName,
         brandName,
         productDescription,
         category,
         subCategory,
         tags,
         sellingType,
         availableStock,
         basePrice,
         startDate,
         endDate,
         finalPrice,
         imagesUrls,
       
   } = body
   // console.log(body);

   const product = new Product({
      name: productName,
      description: productDescription,
      price:{
         prev: parseFloat(basePrice),
         present: parseFloat(finalPrice)
      },
      category,
      subCategory,
      imagesUrls,
      availableStock:parseInt(availableStock),
      tags,
      startDate,
      endDate,
      sellingType,
      brandName,
      productAddedBy:'user id'
   })

   await product.save()

   return NextResponse.json({ 
      message: 'Product added successfully',
      success: true,
      product  
   } , { status: 200 })
      
} catch (error) {
   console.log(error);
   return NextResponse.json({ 
      message: 'Product added failed',
      success: false,
      error
   } , { status: 500 })
}
}
