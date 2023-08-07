
const ShortFilterModal = () => {
    return (
        <dialog id="short_modal_1" className="modal">
        <form method="dialog" className="modal-box p-0 rounded-sm text-gray-600">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base p-5 pb-0">Short Options: </h3>
          <div className="mt-2 space-y-1 px-5 py-2">
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"default"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>Default</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"Low to High (Price)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>Low to High (Price)</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"High to Low (Price)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>High to Low (Price)</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"Low to High (Discount)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>Low to High (Discount)</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"High to Low (Discount)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>High to Low (Discount)</p>
            </div>
          </div>
          <div className="w-full h-10 border grid grid-cols-2 mt-3">
            <button className="border-r">Cancel</button>
            <button className="">Apply</button>
          </div>
        </form>
      </dialog>
    );
};

export default ShortFilterModal;