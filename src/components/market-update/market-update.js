import React from "react";
import Category from "./category/category";
import Search from "../../images/market/search.svg";
import Binance from "../../images/coin/binance.svg";
import Bitcoin from "../../images/coin/bitcoin.svg";
import Ethereum from "../../images/coin/ethereum.svg";
import Solana from "../../images/coin/solana.svg";
import Tether from "../../images/coin/tether.svg";
import Usd from "../../images/coin/usd.svg";
import Xrp from "../../images/coin/xrp.svg";
import Chart from "../../images/market-trend/chart-state.svg";
import ChartRed from "../../images/market/chart-red.svg";

function MarketUpdate({ ethereumData, bitcoinData, loading, loadingBtc }) {
  const teampDataTabel = [
    {
      coin: "Ethereum",
      abbreviation: "ETH",
      lastPrice: ethereumData,
      change: "2.22%",
      image: Ethereum,
      status: true,
    },
    {
      coin: "Binance",
      abbreviation: "BNB",
      lastPrice: "587.74",
      change: "-0.82%",
      image: Binance,
      status: true,
    },
    {
      coin: "Tether",
      abbreviation: "USDT",
      lastPrice: "0.9998",
      change: "-0.03%",
      image: Tether,
      status: true,
    },
    {
      coin: "Solana",
      abbreviation: "SOL",
      lastPrice: "213.67",
      change: "-0.53%",
      image: Solana,
      status: false,
    },
    {
      coin: "XRP",
      abbreviation: "XRP",
      lastPrice: "1.04",
      change: "-0.44%",
      image: Xrp,
      status: false,
    },
    {
      coin: "USD Coin",
      abbreviation: "USDC",
      lastPrice: "1.00",
      change: "-0.03%",
      image: Usd,
      status: false,
    },
  ];
  const showTabel = teampDataTabel?.map((item, index) => {
    return (
      <div
        key={`tabelCoin${index}`}
        className={
          "w-full border border-stone bg-zinc py-2 px-[30px] flex flex-row-reverse items-center"
        }
      >
        <p className={"w-[10%] flex justify-end font-medium text-gray text-md"}>
          {index + 2}
        </p>
        <div className={"w-[30%] flex justify-end items-center gap-[22px]"}>
          <div className={"flex items-center"}>
            <p className={"text-gray text-mdd"}>{item.abbreviation}</p>
            <div className={"h-6 w-px bg-white mr-3"} />
          </div>
          <p className={"text-gray text-md"}>{item.coin}</p>
          <img src={item.image} alt={item.coin} />
        </div>
        {loading && <p>Loading</p>}
        {!loading && (
          <p className={"w-[15%] flex justify-end text-gray text-md"}>
            ${item.lastPrice}
          </p>
        )}
        <p
          className={`w-[15%] flex justify-end text-mdd ${
            item.status ? "text-gray" : "text-red"
          }`}
        >
          {item.change}
        </p>
        <div className={"w-[20%] flex justify-end text-gray text-mdd"}>
          <img src={item.status ? Chart : ChartRed} alt="chart" />
        </div>
        <div className={"w-[15%] flex justify-end"}>
          <button
            className={"flex items-center rounded-[10px] bg-green px-6 py-1"}
          >
            <p className={"text-md text-white font-semibold"}>Trade</p>
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className={"mt-24 flex flex-col items-end"}>
      <p className={"font-bold text-neutral text-huge"}>Market Update</p>
      <p className={"font-medium text-gray text-lg mt-8"}>
        Cryptocurrency Categories
      </p>
      <div className={"w-full flex justify-between mt-5"}>
        <div
          className={
            "flex justify-center items-center w-[282px] bg-secondary rounded-md p-3 gap-4"
          }
        >
          <input
            dir="ltr"
            className={"w-full bg-transparent"}
            type={"text"}
            placeholder="Search Coin"
          />
          <img src={Search} alt="search" />
        </div>
        <div className={"flex flex-row-reverse gap-x-3"}>
          <Category />
        </div>
      </div>
      <div className={"w-full mt-8"}>
        <div
          className={
            "w-full border border-stone bg-zinc py-5 px-[30px] rounded-t flex flex-row-reverse items-end"
          }
        >
          <p
            className={
              "w-[10%] flex justify-end font-medium text-gray text-mdd"
            }
          >
            NO
          </p>
          <p
            className={
              "w-[30%] flex justify-end font-medium text-gray text-mdd"
            }
          >
            NAME
          </p>
          <p
            className={
              "w-[15%] flex justify-end font-medium text-gray text-mdd"
            }
          >
            LAST PRICE
          </p>
          <p
            className={
              "w-[15%] flex justify-end font-medium text-gray text-mdd"
            }
          >
            CHANGE
          </p>
          <p
            className={
              "w-[20%] flex justify-end font-medium text-gray text-mdd"
            }
          >
            MARKET STATS
          </p>
          <p
            className={
              "w-[15%] flex justify-end font-medium text-gray text-mdd"
            }
          >
            TRADE
          </p>
        </div>
        <div className={"rounded-b"}>
          <div
            className={
              "w-full border border-stone bg-zinc py-2 px-[30px] flex flex-row-reverse items-center"
            }
          >
            <p
              className={
                "w-[10%] flex justify-end font-medium text-gray text-md"
              }
            >
              1
            </p>
            <div className={"w-[30%] flex justify-end items-center gap-[22px]"}>
              <div className={"flex items-center"}>
                <p className={"text-gray text-mdd"}>BTC</p>
                <div className={"h-6 w-px bg-white mr-3"} />
              </div>
              <p className={"text-gray text-md"}>Bitcoin</p>
              <img src={Bitcoin} alt="bitcoin" />
            </div>
            {loadingBtc && <p>Loading</p>}
            {!loadingBtc && (
              <p className={"w-[15%] flex justify-end text-gray text-md"}>
                ${bitcoinData}
              </p>
            )}
            <p className={`w-[15%] flex justify-end text-mdd text-red`}>
              1.41%
            </p>
            <div className={"w-[20%] flex justify-end text-gray text-mdd"}>
              <img src={Chart} alt="chart" />
            </div>
            <div className={"w-[15%] flex justify-end"}>
              <button
                className={
                  "flex items-center rounded-[10px] bg-green px-6 py-1"
                }
              >
                <p className={"text-md text-white font-semibold"}>Trade</p>
              </button>
            </div>
          </div>
          {showTabel}
        </div>
      </div>
      <p className={"mt-10 text-mdd text-green font-semibold underline"}>
        See All Coins
      </p>
    </div>
  );
}

export default MarketUpdate;
