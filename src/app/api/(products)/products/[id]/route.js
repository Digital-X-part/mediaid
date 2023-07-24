import connectDb from "@/dbConfig/dbConfig";
import Product from "@/models/product/productModel";

   connectDb();

   // get single product
export async function GET(request, params) {

   const products = await Product.find()

   return NextResponse.json({ products }, { status: 200	 })

}

// add product
export const POST = async(request)=>{
   try {} catch (error) {
   
}
}
