import Image from "next/image";
import React from "react";

interface CardWithButtonProps {
  main: string;
  paragraph: string;
  button: string;
}

const CardWithButton = (props: CardWithButtonProps) => {
  return (
    <div className="flex flex-col items-center m-8 border border-slate-300 shadow-xl rounded-lg">
      <Image src="/home-buyHome.png" height={1200} width={300} alt="home cartoon" className="m-16" />
      <h2 className="font-bold text-4xl">{props.main}</h2>
      <p className=" p-8 text-xl">{props.paragraph}</p>
      <button className="m-16 border-2 rounded-lg border-blue-700 p-4 text-blue-700 text-xl">{props.button}</button>
    </div>
  );
};

export default CardWithButton;
