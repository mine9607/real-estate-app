"use client";
import React from "react";

interface OAuthButtonProps {
  text: string;
  onClick: () => void;
}

const OAuthButton = (props: OAuthButtonProps) => {
  return (
    <>
      <button
        className="text-white border-2 border-slate-400 p-2 rounded-lg hover:bg-slate-500"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
};

export default OAuthButton;
