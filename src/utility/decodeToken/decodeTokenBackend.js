import jwt from "jsonwebtoken";
const decodeTokenBackend = async (token) => {
  try {
    const decodedToken = jwt.decode(token, process.env.TOKEN_SECRET);
    console.log("backend", { decodedToken });
    return decodedToken;
  } catch (error) {
    console.log("decoder error", error);
  }
};

export default decodeTokenBackend;
