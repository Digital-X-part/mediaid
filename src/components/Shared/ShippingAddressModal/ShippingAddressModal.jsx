"use client";
import { useEffect, useState } from "react";

const ShippingAddressModal = () => {
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [upazilas, setUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [unions, setUnions] = useState([]);

  // Fetch all divisions when the component mounts
  useEffect(() => {
    async function fetchDivisions() {
      const response = await fetch(
        "http://localhost:3000/api/location/division"
      );
      const data = await response.json();
      setDivisions(data);
    }
    fetchDivisions();
  }, []);

  // Function to fetch data from the provided API URLs
  async function fetchData(url, stateSetter) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    stateSetter(data);
  }

  // Function to handle division selection
  async function onDivisionSelect(divisionId) {
    setSelectedDivision.divisionId;
    setSelectedDistrict("");
    setSelectedUpazila("");
    if (divisionId) {
      const districtApiUrl = `http://localhost:3000/api/location/district/${divisionId}`;
      fetchData(districtApiUrl, setDistricts);
    } else {
      setDistricts([]);
      setUpazilas([]);
      setUnions([]);
    }
  }

  // Function to handle district selection
  async function onDistrictSelect(districtId) {
    setSelectedDistrict(districtId);
    setSelectedUpazila("");
    if (districtId) {
      const upazilaApiUrl = `http://localhost:3000/api/location/upazila/${districtId}`;
      fetchData(upazilaApiUrl, setUpazilas);
    } else {
      setUpazilas([]);
      setUnions([]);
    }
  }

  // Function to handle upazila selection
  async function onUpazilaSelect(upazilaId) {
    setSelectedUpazila(upazilaId);
    if (upazilaId) {
      const unionApiUrl = `http://localhost:3000/api/location/union/${upazilaId}`;
      fetchData(unionApiUrl, setUnions);
    } else {
      setUnions([]);
    }
  }

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
            <select
              className="border border-gray-400 p-2 rounded-md w-full"
              value={selectedDivision}
              onChange={(e) => onDivisionSelect(e.target.value)}>
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 mt-6">Select District:</h1>
            <select
              className="border border-gray-400 p-2 rounded-md w-full"
              value={selectedDistrict}
              onChange={(e) => onDistrictSelect(e.target.value)}>
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 mt-6">Select Upazila:</h1>
            <select
              className="border border-gray-400 p-2 rounded-md w-full"
              value={selectedUpazila}
              onChange={(e) => onUpazilaSelect(e.target.value)}>
              <option value="">Select Upazila</option>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.id}>
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 mt-6">Select Union:</h1>
            <select className="border border-gray-400 p-2 rounded-md w-full">
              <option value="">Select Union</option>
              {unions.map((union) => (
                <option key={union.id} value={union.id}>
                  {union.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ShippingAddressModal;
