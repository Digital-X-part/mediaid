import Image from "next/image";
import Link from "next/link";

const PushProducts = () => {
  return (
    <>
      <div className="flex flex-row md:flex-col mt-2 gap-x-2 md:gap-x-0 px-1 h-full">
        <Link href="" className="h-full">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/fdRWdPv/Screenshot-2023-07-31-164221.png"
            alt=""
            className="w-full rounded-md lg:h-[90%]"
          />
        </Link>
        <Link href="" >
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/9H6nbRn/Screenshot-2023-07-31-164201.png"
            alt=""
            className="rounded-md w-full lg:h-[90%]"
          />
        </Link>
      </div>
    </>
  );
};

export default PushProducts;
