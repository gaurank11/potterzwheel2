import React, { useState } from "react";
import { Banknote, ChevronRight, PlusCircle, Percent } from "lucide-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate] = useState(8); // Fixed interest rate
  const [tenure, setTenure] = useState(1);
  const [prePayments, setPrePayments] = useState([]);
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [selectedBank, setSelectedBank] = useState(""); // For selected bank
  const [showPrePayment, setShowPrePayment] = useState(false);

  const banks = [
    { name: "HDFC Bank", logo: "hdfc-logo.png" },
    { name: "ICICI Bank", logo: "icici-logo.png" },
    { name: "SBI Bank", logo: "sbi-logo.png" },
    { name: "Axis Bank", logo: "axis-logo.png" },
  ];

  const calculateEMI = () => {
    const totalPrePayment = prePayments.reduce((sum, p) => sum + parseFloat(p || 0), 0);
    const p = parseFloat(principal) - totalPrePayment;
    const r = rate; // Annual rate of interest
    const t = tenure; // Tenure in years

    if (p <= 0 || isNaN(p)) {
      alert("Principal amount after pre-payments must be greater than zero.");
      return;
    }

    // Calculate Simple Interest (SI)
    const simpleInterest = (p * r * t) / 100;

    // Calculate Total Payment and EMI
    const totalPaymentValue = p + simpleInterest;
    const emiValue = totalPaymentValue / (t * 12);

    setEmi(emiValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setTotalInterest(simpleInterest.toFixed(2));
  };

  const addPrePayment = () => {
    setPrePayments([...prePayments, ""]);
  };

  const updatePrePayment = (index, value) => {
    const updatedPrePayments = [...prePayments];
    updatedPrePayments[index] = value;
    setPrePayments(updatedPrePayments);
  };

  // Data for the pie chart
  const chartData = {
    labels: ["Loan Amount", "Processing Fees", "Total Interest"],
    datasets: [
      {
        data: [
          parseFloat(principal) - prePayments.reduce((sum, p) => sum + parseFloat(p || 0), 0),
          1000, // Placeholder for processing fee
          totalInterest || 0,
        ],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 mt-10">
      {/* Main Content */}
      <h1 className="text-4xl font-extrabold text-black mb-6 text-center">
        EMI Calculator
      </h1>
      <main className="flex-grow p-3 ">
        <div className="max-w-screen-md mx-auto bg-white p-6 rounded-lg shadow-lg">


          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateEMI();
            }}
            className="space-y-6"
          >
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium">Loan Amount (₹)</label>
              <div className="flex items-center gap-2">
                <Banknote className="text-gray-600" />
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder="Enter loan amount"
                  required
                />
              </div>
            </div>

            {/* Loan Tenure and Interest Rate */}
            <div className="flex gap-6 flex-wrap">
              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-medium">Loan Tenure (Years)</label>
                <div className="flex items-center gap-2">
                  <ChevronRight className="text-gray-600" />
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-600 text-right">{tenure} Years</p>
              </div>

              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-medium">Rate of Interest (%)</label>
                <div className="flex items-center gap-2">
                  <Percent className="text-gray-600" />
                  <input
                    type="range"
                    min="8"
                    max="8"
                    value={rate}
                    className="w-full"
                    readOnly
                  />
                </div>
                <p className="text-sm text-gray-600 text-right">{rate}% (Fixed)</p>
              </div>
            </div>

            {/* Select Bank */}
            <div>
              <label className="block text-sm font-medium">Select Bank (Optional)</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">-- Select a Bank --</option>
                {banks.map((bank) => (
                  <option key={bank.name} value={bank.name}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Pre-Payment */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={() => setShowPrePayment(!showPrePayment)}
                className="flex items-center gap-2 text-blue-800 hover:text-blue-900"
              >
                <PlusCircle className="text-lg" />
                Add Pre-Payment (Optional)
              </button>
            </div>

            {showPrePayment && (
              <div className="mt-4">
                {prePayments.map((prePayment, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="number"
                      value={prePayment}
                      onChange={(e) => updatePrePayment(index, e.target.value)}
                      className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder={`Pre-Payment ${index + 1}`}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addPrePayment}
                  className="p-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
                >
                  Add More
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 transition-all"
            >
              Calculate EMI
            </button>
          </form>

          {/* EMI Details and Pie Chart in Parallel */}
          {emi && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-100 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Your EMI Details:</h3>
                <p className="text-lg">
                  <strong>Monthly EMI:</strong> ₹{emi}
                </p>
                <p className="text-lg">
                  <strong>Total Payment:</strong> ₹{totalPayment}
                </p>
                <p className="text-lg">
                  <strong>Total Interest:</strong> ₹{totalInterest}
                </p>
              </div>

              {/* Pie Chart */}
              <div className="text-center p-6 bg-gray-100 rounded-md shadow-md">
                <h3 className="text-lg font-bold mb-4">Loan Breakdown</h3>
                <Pie data={chartData} options={{ responsive: true }} />
                <div className="mt-4 space-y-2">
                  <p><strong>Loan Amount:</strong> ₹{principal}</p>
                  <p><strong>Processing Fees:</strong> ₹1000</p>
                  <p><strong>Total Interest:</strong> ₹{totalInterest}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EmiCalculator;
