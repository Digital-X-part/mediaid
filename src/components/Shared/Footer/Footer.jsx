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
    <div className="py-8 px-4 md:px-12 lg:px-24 bg-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        <div className="text-white">
          <h1 className="text-lg md:text-xl font-semibold uppercase mb-4">
            Information
          </h1>
          <ul className="text-sm md:text-base font-normal space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Return & Refund Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-lg md:text-xl font-semibold uppercase mb-4">
            Useful Links
          </h1>
          <ul className="text-sm md:text-base font-normal space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Special Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                My Account
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-lg md:text-xl font-semibold uppercase mb-4">
            Contact Us
          </h1>
          <ul className="text-sm md:text-base font-normal space-y-2">
            <li>
              Address: Bonani, Dhaka-1100, Bangladesh
            </li>
            <li>
              Hot Line: 16226
            </li>
            <li>
              Email: mediaid@gmail.com
            </li>
            <li>
              <div>
                <h1 className="font-semibold mb-2">Social Links</h1>
                <div className="flex items-center gap-2">
                  <a href="#" className="text-blue-400 hover:text-gray-300">
                    <FaFacebookSquare className="text-xl" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-gray-300">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-gray-300">
                    <FaTwitterSquare className="text-xl" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-gray-300">
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-semibold uppercase mb-4">
            Pay With
          </h1>
          <Image
            src={payWith}
            alt="paywith"
            width={440}
            height={368}
            className="w-full"
          />
        </div>
      </div>
      <p className="text-center text-sm md:text-base text-white mt-8">
        &copy; {new Date().getFullYear()}. All rights reserved by MediAid
      </p>
    </div>
  );
};

export default Footer;
