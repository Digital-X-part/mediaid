import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const jwtCookies = async (id, email) => {
  try {
    // create token data
    const tokenData = {
      id,
      email,
    };
    // create token
   const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
     expiresIn: "1h",
   });

    return true;
  } catch (error) {
    console.log(error.message);
  }
};

export default jwtCookies;
