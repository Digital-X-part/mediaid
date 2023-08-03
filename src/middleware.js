import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import decodeToken from './utility/decodeToken/decodeToken';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
      // check cookie
      /* let token = request.cookies.get('token')
      
      console.log('middleware',token); */
      
            decodeToken();
      

      return NextResponse.next()
  console.log('middleware',request.url );
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/'],
}