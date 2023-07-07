import Image from "next/image";
import incubatorImage from "@/assests/incubator.jpeg";
const PushProducts = () => {
  return (
    <>
      <div className="container px-2 md:px-8 mx-auto mt-8">
        <h1 className="text-2xl font-bold">Push Products</h1>
        <div className="flex items-center gap-4 md:gap-8 mt-4">
          <div className="flex-1 flex  p-4 gap-2 shadow-lg rounded-md border">
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
              width={200}
              height={200}
            />
          </div>
          <div className="md:flex-1 w-1/4 p-4  flex flex-col-reverse md:flex-row  gap-2 shadow-lg rounded-md flex-shrink border">
            <div className="">
              <div className="hidden md:block">
                <h4 className="text-lg font-bold">BmcMe 3swiCode</h4>
                <h4 className="text-xl text-orange-700 font-bold">Incubator</h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet.lorem Lorem ipsum dolor sit amet
                  consectetur adipisicing.
                </p>
              </div>
              <button className="rounded-full w-fit mx-auto block mt-4 px-4 py-2 bg-gradient-to-br hover:to-orange-600 hover:from-pink-500 from-orange-600 to-pink-500 text-white">
                But Now
              </button>
            </div>

            <Image
              src={incubatorImage}
              alt="incubator"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PushProducts;
