
import "./globals.css";
import { Roboto } from "next/font/google";
import decodeTokenFrontend from "@/utility/decodeToken/decodeTokenFrontend";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  decodeTokenFrontend();
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.variable} font-serif max-w-full mx-auto`}>
        {children}
      </body>
    </html>
  );
}
