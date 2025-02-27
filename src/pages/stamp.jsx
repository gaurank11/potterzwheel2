import React, { useState } from "react";

const StampDutyCalculator = () => {
  const [state, setState] = useState("Delhi");
  const [gender, setGender] = useState("male");
  const [ownership, setOwnership] = useState("");
  const [propertyValue, setPropertyValue] = useState(0);
  const [stampDuty, setStampDuty] = useState(0);
  const [rate, setRate] = useState(0);

  const calculateStampDuty = () => {
    if (!state || !gender || !propertyValue) {
      alert("Please fill all fields.");
      return;
    }

    let calculatedRate = 0;

    if (state === "Delhi") {
      if (ownership === "joint" && gender === "male-female") calculatedRate = 5;
      else if (ownership === "joint" && gender === "female-female") calculatedRate = 4;
      else calculatedRate = gender === "male" ? 6 : 4;
    } else if (state === "Haryana") {
      calculatedRate = gender === "male" ? 6 : 4;
    } else if (state === "Uttar Pradesh") {
      calculatedRate = gender === "male" ? 7 : 6;
    } else if (state === "Rajasthan") {
      calculatedRate = gender === "male" ? 6 : 5;
    }

    setRate(calculatedRate);
    const duty = (propertyValue * calculatedRate) / 100;
    setStampDuty(duty.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 mt-10">
      <h1 className="text-4xl font-extrabold text-black mb-6 text-center">
        Stamp Duty Calculator
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl flex flex-col md:flex-row space-y-6 md:space-y-0 gap-6">
        {/* Stamp Duty Calculator */}
        <div className="space-y-6 md:w-1/2">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Select State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
            >
              <option value="">-- Select State --</option>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Rajasthan">Rajasthan</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">Select Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="male-female">Male + Female (Joint)</option>
              <option value="female-female">Female + Female (Joint)</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">Property Value (₹)</label>
            <input
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              placeholder="Enter property value"
            />
          </div>

          <button
            onClick={calculateStampDuty}
            className="w-full py-3 bg-blue-950 text-white font-bold rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Calculate Stamp Duty
          </button>
        </div>

        {/* Stamp Duty Result */}
        <div className="md:w-1/2 space-y-3 md:space-y-6 items-center flex flex-col justify-center">
          {rate !== null && (
            <div className="p-6  border border-black rounded-lg text-center md:p-10">
              <h3 className="text-md font-bold text-blue-950">
                Your stamp duty rate is: {rate}%
              </h3>
            </div>
          )}

          {stampDuty !== null && (
            <div className="p-6 border border-gray-500 rounded-lg text-center md:p-12">
              <h3 className="text-lg font-bold text-black">Stamp Duty</h3>
              <p className="text-2xl font-semibold text-gray-700">₹{stampDuty}</p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-10 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Stamp Duty</h2>
          <p className="text-gray-700 mb-6">
            Stamp Duty is a government-imposed tax on property transactions,
            legally validating the transaction. Rates vary by state, gender, and
            ownership type, generally ranging from 4% to 7%. Ensure timely payment
            to avoid penalties, which can reach up to 200% of the unpaid amount.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What is a Stamp Duty Calculator?
          </h2>
          <p className="text-gray-700 mb-6">
            A stamp duty calculator is an online tool designed to streamline the
            process of calculating stamp duty for property transactions. It provides
            quick and accurate estimates based on essential factors such as the state,
            gender, and property value.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How are Stamp Duty and Registration Charges Calculated?
          </h2>
          <p className="text-gray-700 mb-6">
            Stamp duty and registration charges are mandatory payments made during
            the purchase of a property. While both serve distinct purposes, they play
            a critical role in legalizing property transactions. These charges vary by
            state and are calculated differently:
            <ul className="list-disc pl-6">
              <li><b>Stamp Duty:</b> Typically ranges between 5-7% of the property value, depending on factors like the buyer’s gender and the property location.</li>
              <li><b>Registration Charges:</b> Usually 1-2% of the property value, these are additional charges for registering the property in the buyer’s name.</li>
            </ul>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Stamp Duty Rates</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-gray-100 text-gray-800 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">State</th>
                  <th className="px-4 py-2">Male</th>
                  <th className="px-4 py-2">Female</th>
                  <th className="px-4 py-2">Joint (Male+Female)</th>
                  <th className="px-4 py-2">Joint (Female+Female)</th>
                </tr>
              </thead>
              <tbody>
                {[["Delhi", "6%", "4%", "5%", "4%"],
                  ["Haryana", "6%", "4%", "N/A", "N/A"],
                  ["Uttar Pradesh", "7%", "6%", "N/A", "N/A"],
                  ["Rajasthan", "6%", "5%", "N/A", "N/A"]].map(([state, male, female, jointMF, jointFF], index) => (
                    <tr key={state} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}>
                      <td className="border px-4 py-2 text-center">{state}</td>
                      <td className="border px-4 py-2 text-center">{male}</td>
                      <td className="border px-4 py-2 text-center">{female}</td>
                      <td className="border px-4 py-2 text-center">{jointMF}</td>
                      <td className="border px-4 py-2 text-center">{jointFF}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          </div>
      </div>
    </div>
  );
};

export default StampDutyCalculator;
