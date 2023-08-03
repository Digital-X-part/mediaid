import { cookies } from "next/headers";
import React from "react";
import jwt from "jsonwebtoken";

const createCookie = async (payload) => {
  // set cookie
  const cookiesStore = cookies();
  // create token
  const token = await jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });
  cookiesStore.set("token", token, {
    httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    secure: true,
    expires: new Date(Date.now() + 3600000),
  });

  return token;
};

export default createCookie;
