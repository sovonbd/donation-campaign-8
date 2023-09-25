import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-5">
      <img src="https://i.ibb.co/PDt620N/Group.png" alt="" />
      <div>
        <h1 className="text-[#FF444A] text-2xl md:text-4xl font-bold">Donation</h1>
        <p className="tracking-[3.94px] md:tracking-[10.54px] font-medium">Campaign</p>
      </div>
    </div>
  );
};

export default Logo;
