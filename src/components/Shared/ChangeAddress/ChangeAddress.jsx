import { GrMapLocation } from "react-icons/gr";
import { BiDownArrow, BiDotsVerticalRounded } from "react-icons/bi";

const ChangeAddress = () => {
  return (
    <div className="flex justify-between items-center my-4 border rounded-md shadow-sm p-4">
      {/* Address Information */}
      <div className="flex flex-col items-center bg-yellow-300 px-2 py-3 rounded-lg">
        <GrMapLocation className="text-2xl text-slate-700" />
        <p className="text-sm font-medium text-slate-700 mt-1">Home</p>
      </div>
      <div className="text-xs text-slate-800">
        <p className="text-sm font-bold tracking-wide">Bulbul Ahmed</p>
        <p className="text-gray-700">+8801789499829</p>
        <p className="text-gray-700">8 Road, Karpara, Balakair, Gopalganj</p>
      </div>

      {/* Change Address Button */}
      <div
        onClick={() => window.my_modal_3.showModal()}
        className="flex items-center p-1 border border-teal-500 rounded-md hover:bg-teal-200 cursor-pointer"
      >
        <p className="text-xs text-teal-500 mr-1">Change</p>
        <BiDownArrow size={16} className="text-teal-500" />
      </div>

      {/* Address Modal */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-teal-500">
            ✕
          </button>
          <div className="w-full">
            <h3 className="font-medium text-slate-700 text-lg">Address</h3>
            <div className="flex justify-between border border-teal-500 p-2 rounded-md bg-teal-100 mt-4">
              <div className="text-slate-800">
                <p>Name: Bulbul Molla</p>
                <p>Phone: +8801789499829</p>
                <p>Address: 8 Road, Karpara Union, Balakair, Gopalganj Sadar</p>
                <p>
                  Address Type:{" "}
                  <span className="border px-1 py-0.5 rounded-lg border-teal-700 text-teal-700">
                    Home
                  </span>
                </p>
              </div>
              <div className="p-2 hover:bg-teal-200 duration-300 h-fit rounded-full cursor-pointer">
                <BiDotsVerticalRounded size={20} className="text-teal-500" />
              </div>
            </div>

            {/* Add New Address Button */}
            <div
              onClick={() => window.my_modal_5.showModal()}
              className="flex flex-col items-center justify-center border-2 border-dotted border-teal-500 rounded-md mt-4 py-6 bg-gray-100 cursor-pointer"
            >
              <span className="text-teal-500 text-2xl font-bold mb-1">+</span>
              <p className="text-teal-500 font-medium">Add New Address</p>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ChangeAddress;
