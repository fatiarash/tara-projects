import React from "react";
import Logo from "../../images/navbar/logo.svg";
import Facebook from "../../images/footer/facebook.svg";
import Instagram from "../../images/footer/instagram.svg";
import Twitter from "../../images/footer/twitter.svg";
import Youtube from "../../images/footer/youtube.svg";

function Footer() {
  return (
    <div className={"mt-5"}>
      <div className={"w-full bg-primary h-px"} />
      <div className={"flex justify-between"}>
        <ul className={"flex flex-col mt-12 justify-end items-end gap-5"}>
          <li className={"text-neutral font-semibold text-lg"}>About Us</li>
          <li className={"text-gray text-md"}>About</li>
          <li className={"text-gray text-md"}>Careers</li>
          <li className={"text-gray text-md"}>Blog</li>
          <li className={"text-gray text-md"}>Legal & privacy</li>
        </ul>
        <ul className={"flex flex-col mt-12 justify-end items-end gap-5"}>
          <li className={"text-neutral font-semibold text-lg"}>Services</li>
          <li className={"text-gray text-md"}>Aplications</li>
          <li className={"text-gray text-md"}>Buy Crypto</li>
          <li className={"text-gray text-md"}>Affilliate</li>
          <li className={"text-gray text-md"}>Institutional Services</li>
        </ul>
        <ul className={"flex flex-col mt-12 justify-end items-end gap-5"}>
          <li className={"text-neutral font-semibold text-lg"}>Learn</li>
          <li className={"text-gray text-md"}>What is Cryptocurency?</li>
          <li className={"text-gray text-md"}>Crypto Basic</li>
          <li className={"text-gray text-md"}>Tips and Tutorials</li>
          <li className={"text-gray text-md"}>Market Update</li>
        </ul>
        <div className={"flex flex-col justify-end items-end mt-[60px]"}>
          <img className={"w-[133px]"} src={Logo} alt="logo" />
          <div className={"flex justify-end mt-[68px] gap-x-4"}>
            <img src={Youtube} alt="youtube" />
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
          </div>
          <p className={"mt-8 text-gray text-md"}>
            2021 CoinMarketCap. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
