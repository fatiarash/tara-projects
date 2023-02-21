import React from "react";

function GetStart() {
  return (
    <div className={"flex flex-col items-center justify-center mt-24"}>
      <p className={"text-neutral text-huge font-bold"}>
        Start and Build Your Crypto Portfolio Here
      </p>
      <p className={"text-gray text-lg mt-7"}>
        Only at CryptoCap, you can build a good portfolio and learn
      </p>
      <p className={"text-gray text-lg"}>
        .best practices about cryptocurrency
      </p>
      <button
        className={
          "w-48 h-14 flex items-center justify-center mt-12 bg-green rounded-[10px]"
        }
      >
        <p className={"text-white font-semibold text-md"}>Get Started</p>
      </button>
    </div>
  );
}

export default GetStart;
