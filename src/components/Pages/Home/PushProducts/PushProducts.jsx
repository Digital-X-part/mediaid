import Image from "next/image";
import incubatorImage from "@/assests/incubator.jpeg";
const PushProducts = () => {
  return (
    <>
      <div className="container px-2 md:px-0 mx-auto mt-8">
        <h1 className="text-2xl font-bold font-serif">Push Products</h1>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-4">
          <div className="w-full md:flex-1  flex  p-4 gap-2 shadow-lg rounded-md border">
            <div className="">
              <h4 className="font-bold">BmcMe 3swiCode</h4>
              <h4 className="text-xl text-orange-700 font-bold">Incubator</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet.lorem Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </p>
              <button className="rounded-full w-fit mx-auto block mt-4 px-4 py-2 bg-gradient-to-br from-orange-600 to-pink-500 hover:to-orange-600 hover:from-pink-500 text-white">
                But Now
              </button>
            </div>

            <Image
              src={incubatorImage}
              alt="incubator"
              className="w-[100px] h-[150px] md:w-[300px] md:h-[300px] "
            />
          </div>
          <div className="w-full md:flex-1  flex  flex-row-reverse md:flex-row p-4 gap-2 shadow-lg rounded-md border">
            <div className="">
              <h4 className="font-bold">BmcMe 3swiCode</h4>
              <h4 className="text-xl text-orange-700 font-bold">Incubator</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet.lorem Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </p>
              <button className="rounded-full w-fit mx-auto block mt-4 px-4 py-2 bg-gradient-to-br from-orange-600 to-pink-500 hover:to-orange-600 hover:from-pink-500 text-white">
                But Now
              </button>
            </div>

            <Image
              src={incubatorImage}
              alt="incubator"
              className="w-[100px] h-[150px] md:w-[300px] md:h-[300px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PushProducts;
