import Image from "next/image";

const AbsoluteCart = () => {
  return (
    <div
      className="w-fit hidden md:block shadow-2xl shadow-teal-600 cursor-pointer hover:scale-95 duration-300 relative border-2 border-white">
      <div className="bg-teal-600 p-1 text-center">
        <Image
          className="mx-auto"
          src=""
          alt=""
          width={25}
          height={25}
        />
        <p className="text-white">
          <span>2</span> Items
        </p>
      </div>
      <p className="bg-white p-1 text-center">
        ৳ <span>452</span>
      </p>
    </div>
  );
};

export default AbsoluteCart;
