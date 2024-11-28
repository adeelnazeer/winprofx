import React from "react";

const BonusWithdrawal = () => {
    return (
        <section className="inner-container mx-auto  text-white py-6">
            <div className="bg-gradient-to-b from-[#0d1821] via-[#122330] to-[#133d4f] md:p-12 p-8 rounded-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">Bonus Withdrawal:</h2>
                <p className="text-sm font-normal mb-4">
                    Clients may withdraw the bonus after meeting the required trading lot size, as determined by the formula below:
                </p>
                <div className="mb-6">
                    <p className="text-sm font-medium">
                        <span className="text-white font-semibold">Required Trading Lot Size =</span> (Bonus Amount in USD) / 4
                    </p>
                </div>
                <div className="mb-6 pl-6">
                    <p className="text-sm font-semibold">a. Example:</p>
                    <ul className=" text-sm font-normal mt-2 pl-6">
                        <li> <span className="text-primary pr-1.5">✔ </span> Deposit Amount: $500</li>
                        <li>  <span className="text-primary pr-1.5">✔ </span> 20% Bonus: $100</li>
                        <li>  <span className="text-primary pr-1.5">✔ </span> Required Trading Lots: 100 / 4 = 25 lots</li>
                    </ul>
                </div>
                <p className="text-sm font-normal">
                    <span className="text-white font-semibold">Bonus Expiry:</span > Winpro FX reserves the right to cancel or withdraw the bonus amount if any of the terms and conditions are violated.
                </p>
            </div>
        </section>
    );
};

export default BonusWithdrawal;
