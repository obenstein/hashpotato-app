import React from "react";
import "./HomeTabs.css";

function HomeTabs() {
  const TabData = [
    {
      name: "PASS Price",
      price: "$1520.33",
    },
    {
      name: "APR       /       EPR",
      price: "3280%",
    },
    {
      name: "Market Cap",
      price: "$1520.33",
    },
    {
      name: "Total Value Locked",
      price: "$1520.33",
    },
    {
      name: "Treasury Balance",
      price: "$1520.33",
    },
    {
      name: "PASS Supply",
      price: "1520.33",
    },
    {
      name: "Backing per PASS",
      price: "$1520.33",
    },
    {
      name: "Current Index",
      price: "3.48x",
    },
  ];
  return (
    <div className="">
      <h1 className="flex justify-center text-[#F89E1B] text-[25px] font-[700] pb-20">
        EPOCH STAKING
      </h1>
      <TheTabs />

      {/* {TabData.map((value) => (
        <div className="flex flex-col">
          <TheTabs name={value.name} price={value.price} />
        </div>
      ))} */}
    </div>
  );
}

function TheTabs({ name, price }) {
  return (
    <>
      <div className="flex justify-center gap-10 pb-6">
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]"> PASS Price</p>
          <p className="text-[25px]">$1520.33</p>
        </div>
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]">
            {" "}
            APR &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; EPR
          </p>
          <p className="text-[25px]">3280% &nbsp; &nbsp; &nbsp; &nbsp; 3%</p>
        </div>
      </div>
      <div className="flex justify-center gap-10 pb-6">
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]"> Market Cap</p>
          <p className="text-[25px]">$1520.33</p>
        </div>
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]">Total Value Locked</p>
          <p className="text-[25px]">$1520.33</p>
        </div>
      </div>
      <div className="flex justify-center gap-10 pb-6">
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]"> Treasury Balance</p>
          <p className="text-[25px]">$1520.33</p>
        </div>
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]">PASS Supply</p>
          <p className="text-[25px]">$1520.33</p>
        </div>
      </div>
      <div className="flex justify-center gap-10 pb-6">
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]"> Backing Per PASS</p>
          <p className="text-[25px]">$1520.33</p>
        </div>
        <div className="py-3 px-20 theCard flex items-center flex-col">
          <p className="text-[15px]">Current Index</p>
          <p className="text-[25px]">3.48x</p>
        </div>
      </div>
    </>
  );
}
export default HomeTabs;
