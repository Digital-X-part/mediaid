import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const decodeTokenFrontend = async () => {
  try {
    const cookiesStore = cookies();
    // get cookie
    const token = cookiesStore.get("token");

    if (token) {
      const decodedToken = jwt.decode(token.value, process.env.TOKEN_SECRET);
      // console.log('frontend',{ decodedToken });
      return decodedToken;
    }
    return null;
  } catch (error) {
    console.log("decoder error", error);
  }
};

export default decodeTokenFrontend;
