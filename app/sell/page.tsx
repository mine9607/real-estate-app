import Image from "next/image";
import React from "react";

const Sell = () => {
  return (
    <>
      <div>
        <div className="relative flex items-center justify-center">
          <Image src="/sell-image1.jpg" layout="responsive" height={270} width={1440} alt="image of home" />
          <div className="absolute flex flex-col items-center justify-center text-center">
            <p className="m-4 text-white text-6xl font-semibold">Sell your home with confidence</p>
            <p className="m-4 text-white text-2xl">Zillow is making it simpler to sell your home and move forward.</p>
          </div>
        </div>
      </div>
      <div className="bg-sky-100">
        <div>Sell with a partner agent or get a cash offer</div>
      </div>
    </>
  );
};

export default Sell;
