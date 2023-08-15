
const ShippingAddressModal = () => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <div>
            <h1 className="text-2xl font-bold mb-4">Select Division:</h1>
            {/* <select
              className="border border-gray-400 p-2 rounded-md w-full"
              value="Districts">
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select> */}
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 mt-6">Select District:</h1>
            {/* <select
              className="border border-gray-400 p-2 rounded-md w-full"
              value={selectedDistrict}
              onChange={(e) => onDistrictSelect(e.target.value)}>
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select> */}
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 mt-6">Select Upazila:</h1>
            {/* <select
              className="border border-gray-400 p-2 rounded-md w-full"
              value={selectedUpazila}
              onChange={(e) => onUpazilaSelect(e.target.value)}>
              <option value="">Select Upazila</option>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.id}>
                  {upazila.name}
                </option>
              ))}
            </select> */}
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 mt-6">Select Union:</h1>
            {/* <select className="border border-gray-400 p-2 rounded-md w-full">
              <option value="">Select Union</option>
              {unions.map((union) => (
                <option key={union.id} value={union.id}>
                  {union.name}
                </option>
              ))}
            </select> */}
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ShippingAddressModal;
