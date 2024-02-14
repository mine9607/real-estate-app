import MapContainer from "@/components/MapContainer";
import Image from "next/image";
import React from "react";

const Homes = () => {
  return (
    <>
      <div className="flex gap-2 p-4 border-2 bg-white text-black text-xl items-center">
        <div className="border-2 border-slate-300 rounded-md p-4">
          <p> Location Searchbar</p>
          <Image src="" height={20} width={20} alt="magnifying glass icon" />
        </div>
        <div className="border-2 border-slate-300 rounded-md p-4">For Sale Filter Toggle</div>
        <div className="border-2 border-slate-300 rounded-md p-4">Price Filter Toggle</div>
        <div className="border-2 border-slate-300 rounded-md p-4">Beds & Baths Filter Toggle</div>
        <div className="border-2 border-slate-300 rounded-md p-4">Home Type Filter Toggle</div>
        <div className="border-2 border-slate-300 rounded-md p-4">More Filter Toggle</div>
        <button className=" bg-blue-600 rounded-md p-4 text-white">Save Search</button>
      </div>
      <div className="flex bg-white text-black border-2 border-slate-300">
        <MapContainer />
        <div>Home Card List</div>
      </div>
    </>
  );
};

export default Homes;
