import React from 'react'

const CurrencyConverter = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/your-background.jpg')" }}>
      <div className="backdrop-blur-md bg-white/30 rounded-2xl p-6 w-[350px] shadow-lg border border-white/20">
        {/* From Section */}
        <div className="mb-4">
          <label className="block text-gray-200 mb-1">From</label>
          <div className="flex items-center space-x-2">
            <input type="number" className="flex-1 p-2 rounded bg-white/80 text-black" defaultValue={10} />
            <select className="p-2 rounded bg-white/80 text-black">
              <option value="usd">usd</option>
              <option value="inr">inr</option>
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="text-center my-4">
          <button className="px-4 py-1 bg-blue-500 text-white rounded">swap</button>
        </div>

        {/* To Section */}
        <div className="mb-4">
          <label className="block text-gray-200 mb-1">To</label>
          <div className="flex items-center space-x-2">
            <input type="number" className="flex-1 p-2 rounded bg-white/80 text-black" defaultValue={832.1473972} />
            <select className="p-2 rounded bg-white/80 text-black">
              <option value="inr">inr</option>
              <option value="usd">usd</option>
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition">
          Convert USD to INR
        </button>
      </div>
    </div>
  )
}

export default CurrencyConverter
