import Image from "next/image";
import Link from "next/link";

const PushProducts = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2 mt-2">
        <Link href="">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/fdRWdPv/Screenshot-2023-07-31-164221.png"
            alt=""
            className="w-full rounded-md"
          />
        </Link>
        <Link href="">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/9H6nbRn/Screenshot-2023-07-31-164201.png"
            alt=""
            className="w-full rounded-md"
          />
        </Link>
      </div>
    </>
  );
};

export default PushProducts;
