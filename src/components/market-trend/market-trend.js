import React from "react";
import Bitcoin from "../../images/coin/bitcoin.svg";
import Binance from "../../images/coin/binance.svg";
import Ethereum from "../../images/coin/ethereum.svg";
import Tether from "../../images/coin/tether.svg";
import Flesh from "../../images/market-trend/flesh.svg";
import ChartState from "../../images/market-trend/chart-state.svg";

const teampData = [
  {
    name: "USDT",
    nameCoin: "TETHER",
    price: "$0.9998",
    percent: "0,03%",
    image: Tether,
  },
  {
    name: "ETH",
    nameCoin: "ETHEREUM",
    price: "$4,267.90",
    percent: "2.22%",
    image: Binance,
  },
  {
    name: "BNB",
    nameCoin: "BINANCE",
    price: "$587.74",
    percent: "0.82%",
    image: Ethereum,
  },
  {
    name: "BTC",
    nameCoin: "BITCOIN",
    price: "$56,623.54",
    percent: "1.41%",
    image: Bitcoin,
  },
];

function MarketTrend() {
  const showCoin = teampData?.map((item, index) => {
    return (
      <div
        key={`coin${index}`}
        className={
          "w-[297px] rounded-[18px] border border-stone bg-zinc px-5 py-[18px]"
        }
      >
        <div className={"flex items-center justify-between"}>
          <div
            className={
              "flex items-center justify-center bg-indigo rounded-full w-[34px] h-[34px] ml-8"
            }
          >
            <img src={Flesh} alt="flesh" />
          </div>
          <div className={"px-1.5 py-1 bg-slate rounded"}>
            <p className={"text-purpole font-semibold text-xxs"}>
              {item.nameCoin}
            </p>
          </div>
          <p className={"font-semibold text-neutral text-lg mx-3.5"}>
            {item.name}
          </p>
          <img src={item.image} alt={item.nameCoin} />
        </div>
        <div className={"w-full bg-primary h-px my-[17px]"} />
        <div className={"flex justify-between gap-x-3"}>
          <img src={ChartState} alt="chartState" />
          <div className={"flex flex-col justify-end items-end"}>
            <p className={"font-medium text-neutral text-xl"}>{item.price}</p>
            <p>{item.percent}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={"flex items-end justify-end flex-col mt-36"}>
      <p className={" font-semibold text-neutral text-xlg"}>Market Trend</p>
      <div className={"flex items-center mt-6 gap-x-6"}>{showCoin}</div>
    </div>
  );
}

export default MarketTrend;
