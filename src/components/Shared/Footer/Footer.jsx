import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import payWith from "@/assests/Available-Payment-Methods-550x461.bk-2.png";

const Footer = () => {
  return (
    <div className="py-4 px-3 md:px-7 sm:p-4 md:py-8 w-full bg-slate-800 mt-10 flex items-center justify-center relative">
      <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-2 pb-[28px]">
        <div>
          <h1 className="text-white text-sm md:text-xl font-semibold uppercase">
            Information
          </h1>
          <ul className="text-slate-200 text-xs md:text-sm font-normal space-y-1 mt-2">
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Return & Refund policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-sm md:text-xl font-semibold uppercase">
            Useful Link
          </h1>
          <ul className="text-slate-200 text-xs md:text-sm font-normal space-y-1 mt-2">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Special Offers</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-sm md:text-xl font-semibold uppercase">
            Contact Us
          </h1>
          <ul className="text-slate-200 text-xs md:text-sm font-normal space-y-1 mt-2">
            <li>
              <a href="">Address: Bonani, Dhaka-1100, Bangladesh</a>
            </li>
            <li>
              <a href="">Hot Line: 16226</a>
            </li>
            <li>
              <a href="">Email: mediaid@gmail.com</a>
            </li>
            <li>
              <div>
                <h1>Social Links</h1>
                <div className="flex items-center gap-2 mt-2">
                  <FaFacebookSquare className="text-xs text-blue-400 hover:text-slate-200 cursor-pointer" />
                  <FaInstagram className="text-xs text-blue-400 hover:text-slate-200 cursor-pointer" />
                  <FaTwitterSquare className="text-xs text-blue-400 hover:text-slate-200 cursor-pointer" />
                  <FaLinkedin className="text-xs text-blue-400 hover:text-slate-200 cursor-pointer" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-sm md:text-xl font-semibold uppercase">
            Pay With
          </h1>
          <Image
            src={payWith}
            alt="paywith"
            fill={false}
            className="mt-2 md:w-[80%]"
          ></Image>
        </div>
      </div>
      <p className="absolute bottom-3 text-xs text-white">
        &copy; 2023. All right reserved by MediAid
      </p>
    </div>
  );
};

export default Footer;
