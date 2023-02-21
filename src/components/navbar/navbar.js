import React from "react";
import Logo from "../../images/navbar/logo.svg";
import Arrow from "../../images/navbar/arrow.svg";
import JamWorld from "../../images/navbar/jam_world.svg";

function Navbar() {
  return (
    <div className={"flex justify-between py-5"}>
      <div className={"flex gap-x-7"}>
        <button
          className={
            "flex items-center justify-center rounded-[10px] bg-green w-[104px] h-[50px]"
          }
        >
          <p className={"text-md text-white"}>Login</p>
        </button>
        <div className={"flex items-center justify-center"}>
          <img src={Arrow} alt="arrow" />
          <p className={"text-mdd text-gray font-semibold mr-1.5 ml-3"}>EN</p>
          <img src={JamWorld} alt="jamWorld" />
        </div>
      </div>
      <ul className={"flex items-center justify-center gap-x-10"}>
        <li className={"font-medium	text-neutral text-mdd cursor-pointer"}>
          Learn
        </li>
        <li className={"font-medium	text-neutral text-mdd cursor-pointer"}>
          Market
        </li>
        <li className={"font-medium	text-neutral text-mdd cursor-pointer"}>
          Trade
        </li>
        <li className={"font-medium	text-neutral text-mdd cursor-pointer"}>
          Businesses
        </li>
        <li className={"font-semibold	text-green text-mdd cursor-pointer"}>
          Home
        </li>
      </ul>
      <img className={"cursor-pointer"} src={Logo} alt="logo" />
    </div>
  );
}

export default Navbar;
