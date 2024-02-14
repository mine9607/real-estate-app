"use client";
import { signIn, signOut } from "next-auth/react";
import OAuthButton from "../components/OAuthButton";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <p></p>
        <OAuthButton text={"Google Login"} onClick={() => signIn("google")} />
        <OAuthButton text={"Github Login"} onClick={() => signIn("github")} />
        <OAuthButton text={"Log Out"} onClick={() => signOut()} />
      </div>
      {/* Add conditional rendering of the OAuthButton based on text prop passed */}
    </div>
  );
}
