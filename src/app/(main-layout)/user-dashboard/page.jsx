import userimg from "../../../assests/userprofile.png";
import Image from "next/image";
const UserDashBoard = () => {
  return (
    <div>
      <div className="mx-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={userimg} alt="" className="" />
            <div className="flex flex-col">
              <p>Hello,</p>
              <h1 className="text-3xl">Eshrak G</h1>
            </div>
          </div>
          <div className="flex">
          <div className="text-center mr-4">
            <p className="border-l-2 border-r-2 w-32">Star Points</p>
            <p className="text-orange-500 font-bold text-2xl">0</p>
          </div>
          <div className="text-center mr-4">
            <p className="border-l-2 border-r-2 w-32">Star Points</p>
            <p className="text-orange-500 font-bold text-2xl">0</p>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
