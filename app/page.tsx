"use client";
import { signIn, signOut } from "next-auth/react";
import OAuthButton from "../components/OAuthButton";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";
import CardWithButton from "@/components/CardWithButton";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image src="/home-image1.webp" layout="fill" objectFit="cover" alt="woman on porch" />
      </div>
      <div>{/* Add a carousel */}</div>
      <div className="flex flex-row">
        <div className="flex-1">
          <CardWithButton
            main={"Buy a home"}
            paragraph={
              "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
            }
            button={"Browse homes"}
          />
        </div>
        <div className="flex-1">
          <CardWithButton
            main={"Sell a home"}
            paragraph={"No matter what path you take to sell your home, we can help you navigate a successful sale."}
            button={"See your options"}
          />
        </div>
        <div className="flex-1">
          <CardWithButton
            main={"Rent a home"}
            paragraph={
              "We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent."
            }
            button={"Find rentals"}
          />
        </div>
      </div>
      {/* On click bring up a modal to signin */}
      {/* <OAuthButton text={"Google Login"} onClick={() => signIn("google")} />
        <OAuthButton text={"Github Login"} onClick={() => signIn("github")} />
        <OAuthButton text={"Log Out"} onClick={() => signOut()} /> */}

      {/* Add conditional rendering of the OAuthButton based on text prop passed */}
    </div>
  );
}
