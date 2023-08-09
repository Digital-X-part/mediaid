// import { NextResponse } from "next/server";
// import decodeTokenBackend from "./utility/decodeToken/decodeTokenBackend";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//   // check cookie
//   let token = request.cookies.get("token");
//   // console.log(token);
//   if (token) {
//     const decodedToken = await decodeTokenBackend(token.value);
//     console.log("middleware", decodedToken);
//   }

//   // console.log("middleware", request.url);
//   return NextResponse.next();
// }

// See "Matching Paths" below to learn more

//  Middleware config
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Trigger the function if callback permission
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // const { pathname } = req.nextUrl;
        return !!token;
      },
    },
  }
);
export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*"],
};
