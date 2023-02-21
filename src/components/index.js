import React, { useState, useEffect } from "react";
import GetStart from "./get-start/get-start";
import Navbar from "./navbar/navbar";
import Ellipse from "../images/navbar/ellipse.svg";
import EllipseLeft from "../images/navbar/ellipse-left.svg";
import Intersect from "../images/intersect.svg";
import IntersectTop from "../images/intersecttop.svg";
import MarketTrend from "./market-trend/market-trend";
import axios from "axios";
import { BASE_URL } from "./BASE-URL/baseurl";
import Footer from "./footer/footer";
import MarketUpdate from "./market-update/market-update";

function HomePage() {
  const [ethereumData, setEthereumData] = useState([]);
  const [bitcoinData, setBitcoinData] = useState([]);

  const fetchEthereumData = async () => {
    const { data } = await axios.get(`${BASE_URL}ethereum&vs_currencies=usd`);
    return setEthereumData(data?.ethereum?.usd);
  };

  const fetchBitcoinData = async () => {
    const { data } = await axios.get(`${BASE_URL}bitcoin&vs_currencies=usd`);
    return setBitcoinData(data?.bitcoin?.usd);
  };

  useEffect(() => {
    fetchEthereumData();
    setTimeout(() => setEthereumData(fetchEthereumData()), 10000);
    if (!ethereumData) return "loading...";
    return () => clearTimeout(ethereumData);
  }, [ethereumData]);

  useEffect(() => {
    fetchBitcoinData();
    setTimeout(() => setBitcoinData(fetchBitcoinData()), 10000);
    if (!bitcoinData
      ) return "loading...";
    return () => clearTimeout(bitcoinData);
  }, [bitcoinData]);

  console.log(ethereumData, "data");
  console.log(bitcoinData, "data");

  return (
    <div className={"relative px-[92px] pb-16"}>
      <img
        className={"absolute opacity-[0.3] right-0 -z-10"}
        src={Ellipse}
        alt="ellipse"
      />
      <img
        className={"absolute opacity-[0.3] left-0 -z-10"}
        src={EllipseLeft}
        alt="ellipseLeft"
      />
      <img
        className={"absolute opacity-[0.2] bottom-0 right-0 -z-10"}
        src={Intersect}
        alt="intersect"
      />
      <img
        className={"absolute opacity-[0.1] left-0 -z-10"}
        src={IntersectTop}
        alt="intersectTop"
      />
      <Navbar />
      <GetStart />
      <MarketTrend />
      <MarketUpdate ethereumData={ethereumData} bitcoinData={bitcoinData} />
      <Footer />
    </div>
  );
}

export default HomePage;
