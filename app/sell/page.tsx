import Image from "next/image";
import Link from "next/link";
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
      <div className="flex flex-row gap-8 items-center p-16 bg-[#f2faff] text-black">
        <div>
          <h2 className="font-semibold text-6xl">Sell with a partner agent or get a cash offer</h2>
          <p className="py-8 text-xl">
            Zillow helps you sell your home, your way. Easily explore your selling options below and get personalized
            market value estimates — we can even help you choose the best option when you’re ready.
          </p>
          <p className="text-xl">
            This experience is currently available in 45 markets across Arizona, Colorado, Florida, Georgia, Indiana,
            Kansas, Massachusetts, Michigan, Minnesota, Missouri, Nevada, New Jersey, New Mexico, New York, North
            Carolina, Ohio, Oklahoma, Oregon, South Carolina, Tennessee, Texas, Utah, and Washington DC.{" "}
            <Link href="https://www.zillow.com/sell/#faq">Click here</Link> to see if it's available in your city.
          </p>
          <h3 className="py-8 font-semibold text-2xl">Compare personalized options, no commitment required</h3>
          {/* Enter a search bar below */}
          <div>Search Bar Here</div>
          <div className="flex flex-row gap-16">
            <div>
              <h3 className="py-8 font-semibold text-2xl">Sell directly to Opendoor</h3>
              <p>
                Get an all-cash offer from our trusted partner, Opendoor, to sell your home faster and avoid the hassle
                of showings.*
              </p>
            </div>
            <div>
              <h3 className="py-8 font-semibold text-2xl">Sell with a Zillow partner agent</h3>
              <p>
                List your home with a Zillow Premier Agent partner to get local expertise and potentially maximize your
                sales price.
              </p>
              <br />
              <p>*Offer eligibility and purchase price vary.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/sell-image2.png" width={700} height={700} alt="sell icon" />
        </div>
      </div>
    </>
  );
};

export default Sell;
