import Image from "next/image";
import { GrMapLocation } from "react-icons/gr";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";
import ChangeAddress from "@/components/Shared/ChangeAddress/ChangeAddress"
import { BiDotsVerticalRounded } from "react-icons/bi";


const AbsoluteCartDetails = () => {
  return (
    <div className="h-[80vh] bg-white w-[360px] shadow-2xl duration-500 transition-transform rounded-sm overflow-y-scroll mt-24">
      <div className="flex items-center justify-between p-1 bg-teal-700 text-white rounded-t-sm">
        <p className="text-xs">
          Free delivery above $999 order (outside Dhaka){" "}
        </p>
        <button onClick={() => setIsCartClicked(false)}>
          <BiDotsVerticalRounded size={35} />
        </button>
      </div>
      <p className="text-xs text-gray-700 px-1 mt-2">
        Items not Requiring Prescription (3){" "}
      </p>
      <div className="px-1 pb-20">
        {/* ************** cart list ************** */}

        <div>
          {[1, 3, 4].map((item) => (
            <div
              key={item}
              className="flex justify-start gap-2 w-full p-2 mt-2 shadow-sm rounded-md border">
              <Image
                className="object-cover rounded-full w-[55px] h-[55px]"
                src="https://previews.123rf.com/images/marushy/marushy2003/marushy200300448/142433063-a-young-girl-in-the-background-of-a-building-wears-a-face-mask-that-protects-against-the-spread-of.jpg"
                alt=""
                width={100}
                height={100}
              />
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-[12px]">
                    KN95 Face Mask 5 Layers Protection
                  </h3>
                  <p className="cursor-pointer hover:text-teal-600 mr-1">✖</p>
                </div>
                <div className="flex justify-between mt-1">
                  <div>
                    <p className="text-xs text-gray-600">Maccons Limited</p>
                    <p className="text-xs mt-1 text-gray-700">
                      <span className="text-teal-500 font-bold">1 * </span>{" "}
                      <span className="text-teal-500 font-bold">100</span> s
                      pack
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      <del className="text-xs text-gray-400">৳70</del>
                      <span className="ml-4 text-teal-600">৳63</span>
                    </p>
                    <select className="px-2 border w-full py-[2px] rounded-md cursor-pointer hover:border-teal-500 duration-300">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ************** address list ************** */}

        


        <ChangeAddress></ChangeAddress>




        <div className="border p-2 rounded-md mb-4">
          <p
            onClick={() => setIsShowCouponInput(!isShowCouponInput)}
            className="underline text-sm cursor-pointer text-gray-700 hover:text-teal-600 duration-100 w-fit">
            Have a coupon code?
          </p>
          {isShowCouponInput && (
            <form className="flex ">
              <div className="flex items-center outline-dotted mt-2 bg-teal-300 outline-teal-300 rounded-md pl-1">
                <BiDotsVerticalRounded className="" size={25} color="teal" />
                <input
                  placeholder="Enter Coupon Code"
                  className="outline-none bg-teal-300 placeholder:text-sm ml-1 mr-2"
                  type="text"
                />
                <button className="bg-teal-600 p-2 text-neutral-100 rounded-r-md text-sm tracking-wider hover:bg-teal-500">
                  Apply
                </button>
              </div>
            </form>
          )}
          <div className="flex items-center mt-4 border-2 border-dotted p-2 border-teal-500 rounded-md bg-teal-500 bg-opacity-5">
            <Image
              src="https://i.ibb.co/MCc6r7k/taka.webp"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-sm ml-1 text-teal-600">
              You are saving{" "}
              <span className="font-bold text-teal-600">৳ 44</span> in this
              order.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-y-1">
            <div className="flex text-neutral-700 items-center justify-between text-sm">
              <p>Subtotal</p>
              <p className=" text-teal-600 tracking-wide">৳ 230</p>
            </div>
            <div className="flex text-neutral-700 items-center justify-between text-sm">
              <p>Discount applied</p>
              <p className=" text-teal-600 tracking-wide">-৳ 44</p>
            </div>
            <div className="flex text-neutral-700 items-center justify-between text-sm">
              <p>Delivery charge</p>
              <p className=" text-teal-600 tracking-wide">৳ 68</p>
            </div>
            <hr className="mt-1" />
            <div className="flex text-neutral-700 items-center justify-between">
              <p className="font-bold text-sm text-teal-600">Amount Payable</p>
              <p className=" text-teal-600 tracking-wide font-bold">৳ 360</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-white py-3 border-t-2 border-t-teal-600">
        <div className="flex items-center justify-center">
          <p className="px-2 py-2 bg-teal-600 text-white rounded-s-md">৳ 360</p>
          <p
            onClick={() => window.my_modal_4.showModal()}
            className="uppercase ml-[1px] bg-teal-600 px-2 py-2 text-white rounded-e-md cursor-pointer">
            proceed to checkout
          </p>
        </div>
      </div>
      {/* //! checkout modal */}
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2">
            ✕
          </button>
          <div className="w-full">
            <h3 className="text-lg">Checkout</h3>
            <div className="flex items-center my-4 border rounded-md gap-2 ">
              <div className="flex flex-col items-center bg-yellow-300 px-1 py-2">
                <GrMapLocation className="text-2xl" />
                <p className="text-sm rounded-md mt-[2px] text-center">Home</p>
              </div>
              <div className="text-xs">
                <p className="text-sm font-bold text-neutral-800 tracking-wide">
                  Bulbul Ahmed
                </p>
                <p className="text-gray-700">+8801789499829</p>
                <p className="text-gray-700">
                  8 road, karpara,balakair,gopalganj
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="flex items-center justify-between bg-teal-400 bg-opacity-40 px-2 py-1">
              <div className="flex items-center gap-1">
                <Image
                  src="https://i.ibb.co/85JhnZz/money.webp"
                  alt=""
                  width={20}
                  height={20}
                />
                <p>To be paid</p>
              </div>
              <p>৳ 360</p>
            </div>
            <div className="my-4 px-1">
              <Accordion
                title="Credit/Debit card & Mobile banking Payment"
                paymentIconLink="https://i.ibb.co/jkFXfsb/sslcz-verified.png"
                isOpen={"SSLCommerz"}>
                <p>
                  Pay securely by Credit/Debit card, Internet banking or Mobile
                  banking through SSLCommerz and get 10% discount on selective
                  bank cards.
                </p>
              </Accordion>
              <Accordion
                title="Cash on delivery"
                paymentIconLink="https://i.ibb.co/pKrnkm6/cash-on-delivery-1.png"
                isOpen={"cashOnDelivery"}>
                <p>
                  Pay with cash upon delivery. Need to pay 200 Taka in advance
                  for Cash on Delivery outside Dhaka.
                </p>
              </Accordion>
              {paymentFieldData.map((item) => (
                <div key={item.id}>
                  <Accordion
                    title={item.name}
                    paymentIconLink={item.logoUrl}>
                    <div>
                      <p className="text-sm text-gray-600">
                        {item.paymentDescription}
                      </p>
                      <p className="mt-1 text-gray-900">
                        {item.paymentNumberTypeAndNumber}
                      </p>
                    </div>
                    <div className="flex justify-center mt-2">
                      <table className="w-full bg-teal-400 bg-opacity-40 shadow-md rounded-lg overflow-hidden">
                        <tbody>
                          <tr>
                            <td className="py-2 px-2 border-b border-gray-200 text-base text-neutral-800 font-semibold">
                              {item.name} Number
                            </td>
                            <td className="py-2 px-2 border-b border-gray-200">
                              <input
                                type="number"
                                className="w-full py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 border-b border-gray-200 text-base text-neutral-800 font-semibold">
                              {item.name} Transaction ID
                            </td>
                            <td className="py-2 px-2">
                              <input
                                type="text"
                                className="w-full py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="w-[420px] p-2">
              <p className="text-sm text-gray-600">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <Link className="text-blue-800" href="">
                  privacy policy
                </Link>
                .
              </p>
              <div className="flex items-center mt-4 gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm cursor-pointer "
                />
                <p className="text-sm">
                  I have read and agree to the website{" "}
                  <Link className="text-blue-800 underline" href="">
                    terms and conditions
                  </Link>
                  *
                </p>
              </div>
              <p className="text-center cursor-pointer bg-[#101B7A] w-full font-bold text-white py-2 mt-3 rounded-sm">
                Place order
              </p>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AbsoluteCartDetails;
