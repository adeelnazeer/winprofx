import React from "react";

const Cards = ({ title, para, amount, spread, commission }) => {
  return (
    <div className="card-shadow mx-auto p-6 bg-gradient-to-r  from-[#041C32] to-[#044670] text-white rounded-2xl">
      {/* Card Title */}
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm mt-2 text-gray-300">
        {para}
      </p>

      <hr className="my-4 border-gray-600" />

      {/* Card Details */}
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-400">Minimum Deposit</p>
          <p className="text-base font-medium">{amount}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Spread</p>
          <p className="text-base font-medium">{spread}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Commission</p>
          <p className="text-base font-medium">{commission}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Maximum Leverage</p>
          <p className="text-base font-medium">1:500</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Instruments</p>
          <p className="text-base font-medium">
            Forex, metals, cryptocurrencies, energies, stocks, indices
          </p>
        </div>
      </div>

      {/* Register Button */}
      <div className="mt-6 text-center">
        <button className="w-full md:w-3/5  py-2 px-4 bg-white text-blue-900 font-semibold rounded hover:bg-gray-100 transition">
          Register
        </button>
      </div>
    </div>
  )
}

const StandardCard = () => {
  return (
    <div className="grid md:grid-cols-3 py-10 inner-container gap-6 grid-cols-1">
      <Cards title={"Standard"} para="Our most popular account. Great for all types of traders."
        amount="$10"
        spread="From 0.2 pips"
        commission="No Commission"
      />
      <Cards title={"Pro"} para="Our instant execution account, with zero commission & low spread."
        amount="$2500"
        spread="From 0.1 pips"
        commission="No Commission"


      />
      <Cards title="ECN" para="Our instant execution account, with zero commission & low sprea"
        amount="$5000"
        spread="From 0.0 pips"
        commission="Up to $3.50 each side per lot"


      />
    </div>
  );
};

export default StandardCard;
