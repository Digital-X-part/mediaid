import React from "react";
// import userImg from "../../../../assests/userprofile.png";
import Image from "next/image";
import { HiPencil } from "react-icons/Hi";

export const metadata = {
  title: "Edit Profile | Mediaid BD",
  description:
    "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};

const EditProfile = () => {
  return (
    <>
      <div className="rounded-full relative w-[100px] h-[100px] border ">
        <Image
          src="https://i.ibb.co/wykZxfv/Screenshot-2023-02-21-000327.png"
          width={40}
          height={40}
          className="w-[100px] h-[100px] rounded-full"
          alt=""
          sizes="5"
        />
        <span className="w-8 h-8 rounded-full bg-[#0B8580] flex items-center justify-center absolute bottom-0 left-0">
          <HiPencil color="white" size={22} />
        </span>
      </div>

      <div className="ml-5 mb-5">
        <div className="border-y-2 py-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type your name"
              class="border-none focus:outline-none w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Type your phone number"
              class="border-none focus:outline-none w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">E-mail</span>
            </label>
            <input
              type="text"
              placeholder="Type your E-mail"
              class="border-none focus:outline-none w-full max-w-xs"
            />
          </div>
        </div>
        <div className="pt-6">
          <button>Sign Out </button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
