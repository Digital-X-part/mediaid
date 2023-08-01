import Image from "next/image";
import Link from "next/link";

const PushProducts = () => {
  return (
    <>
      <div className="flex flex-row md:flex-col mt-2 gap-x-2 md:gap-x-0 px-1 h-full">
        <Link href="">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/fdRWdPv/Screenshot-2023-07-31-164221.png"
            alt=""
            className="w-full rounded-md h-full"
          />
        </Link>
        <Link href="" >
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/9H6nbRn/Screenshot-2023-07-31-164201.png"
            alt=""
            className="w-full h-full rounded-md md:mt-2 "
          />
        </Link>
      </div>
    </>
  );
};

export default PushProducts;
