import React from "react";
import HomeTabs from "../Components/HomeTabs/HomeTabs";
function LandingPage() {
  return (
    <div className="">
      <div className="font-semibold flex justify-end p-10 gap-6">
        <button className="bg-[#F89E1B] border border-[#F89E1B] rounded-[47px] py-2 px-4 text-white">
          Buy PASS
        </button>
        <button className="bg-transparent border border-[#F89E1B] rounded-[47px] py-2 px-4 text-white ">
          Connect Wallet
        </button>
      </div>
      <HomeTabs />
    </div>
  );
}

export default LandingPage;
