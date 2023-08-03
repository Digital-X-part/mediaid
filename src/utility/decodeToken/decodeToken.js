import jwt from "jsonwebtoken";
const decodeToken = async (token) => {
  try {
      let token = request.cookies.get('token')
      
      console.log('middleware',token);
      if(token){
            decodeToken(token.value);
      }
    const decodedToken = jwt.decode(token, process.env.TOKEN_SECRET);
    console.log({ decodedToken });
    return decodedToken;
  } catch (error) {
    console.log("decoder error", error);
  }
};

export default decodeToken;
