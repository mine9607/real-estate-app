import React from "react";

const OAuthButton = (props) => {
  return (
    <>
      <button className="text-white border border-2 border-slate-400 p-2 rounded-lg hover:bg-slate-500">
        {props.text}
      </button>
    </>
  );
};

export default OAuthButton;
