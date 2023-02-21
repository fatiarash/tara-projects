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
  const [loading, setLoading] = useState(true);
  const [loadingBtc, setLoadingBtc] = useState(true);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      setLoadingBtc(true);
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}bitcoin&vs_currencies=usd`
        );
        setBitcoinData(response && response.bitcoin && response.bitcoin.usd);
      } catch (error) {
        console.error(error.message);
      }
      setLoadingBtc(false);
    };

    fetchBitcoinData();
    setTimeout(() => setBitcoinData(fetchBitcoinData()), 10000);
    if (!bitcoinData) return "loading...";
    return () => clearTimeout(bitcoinData);
  }, []);

  useEffect(() => {
    const fetchEthereumData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}ethereum&vs_currencies=usd`
        );
        setEthereumData(response && response.ethereum && response.ethereum.usd);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchEthereumData();
    setTimeout(() => setEthereumData(fetchEthereumData()), 10000);
    if (!ethereumData) return "loading...";
    return () => clearTimeout(ethereumData);
  }, []);

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
      <MarketUpdate
        ethereumData={ethereumData}
        bitcoinData={bitcoinData}
        loading={loading}
        loadingBtc={loadingBtc}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
