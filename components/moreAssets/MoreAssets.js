import React from "react";

const dummyCryptoCoins = [
  {
    name: "BitTech",
    shortName: "(BTT)",
    industry: "Cryptocurrency",
    rate: 0.0125,
    value: 6422,
    highestRate: false,
    lowestRate: false,
  },
  {
    name: "Etherium",
    shortName: "(ETG)",
    industry: "Cryptocurrency",
    rate: 0.045,
    value: 3428,
    highestRate: true,
    lowestRate: false,
  },
  {
    name: "LitePay",
    shortName: "(LTP)",
    industry: "Cryptocurrency",
    rate: 0.035,
    value: 43677,
    highestRate: false,
    lowestRate: false,
  },
  {
    name: "RippleX",
    shortName: "(RPX)",
    industry: "Cryptocurrency",
    rate: 0.03,
    value: 32234,
    highestRate: true,
    lowestRate: true,
  },
  {
    name: "NeoChain",
    shortName: "(NEC)",
    industry: "Cryptocurrency",
    rate: 0.055,
    value: 6765,
    highestRate: true,
    lowestRate: false,
  },
  {
    name: "StellarBit",
    shortName: "(XSB)",
    industry: "Cryptocurrency",
    rate: 0.02,
    value: 33345,
    highestRate: false,
    lowestRate: false,
  },
];

const MoreAssets = () => {
  return (
    <div className="w-[300px]  border-2 rounded-xl my-3">
      <div className="px-3 text-center font-bold">Assets</div>

      <div className="px-2">
        <table className="table-auto">
          <tbody>
            {dummyCryptoCoins.map((coin, index) => (
              <tr key={index}>
                <th className="text-[14px] flex items-start flex-col w-full">
                  <p className="text-[14px] ">{coin.name}</p>
                  <p className="text-[11px] text-[#999999]">{coin.shortName}</p>
                </th>
                <td className="text-[14px] px-2 w-full text-center font-bold">
                  ${coin.value}
                </td>
                <td className="text-[14px] px-2 flex items-center justify-center">
                  <div
                    className={`rounded-full p-[4px] w-[70px] flex items-center justify-center text-white text-[13px] font-semibold ${
                      coin.highestRate ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {coin.rate.toFixed(2)}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoreAssets;
