import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p- items-center bg-white justify-around h-28">
      <div className="flex-grow flex pl-8 pr-32">
        <ul className="flex gap-2 text-black text-xl justify-between w-full">
          <Link href={"/homes"}>Buy</Link>
          <Link href={"/homes/for_rent"}>Rent</Link>
          <Link href={"/sell"}>Sell</Link>
          <Link href={"/"}>Home Loans</Link>
          <Link href={"/"}>Agent finder</Link>
        </ul>
      </div>
      <Link href={"/"} className="p-8">
        <Image src="z-logo-default.svg" height={75} width={250} alt="Zillow logo" />
      </Link>
      <div className="flex-grow flex pl-32 pr-8">
        <ul className="flex gap-2 text-black text-xl justify-between w-full">
          <Link href={"/"}>Manage Rentals</Link>
          <Link href={"/"}>Advertise</Link>
          <Link href={"/"}>Help</Link>
          <Link href={"/"}>Sign In</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
