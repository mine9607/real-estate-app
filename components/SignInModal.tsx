import Link from "next/link";
import React from "react";

const SignInModal = () => {
  return (
    <div>
      <h2>Welcome to Zillow</h2>
      <nav>Sign in</nav>
      {/* Nav is an option of "Sign in or New Account" */}
      {/* Conditionally render the Modal based on the choice */}
      <div>
        <label htmlFor=""></label>
        <input type="text" placeholder="Enter email" />
        <label htmlFor=""></label>
        <input type="text" placeholder="Enter password" />
      </div>
      <div>
        <button>Sign in</button>
        <button>Forgot your password?</button>
        {/* On click show different modal to enter password */}
      </div>
      <div className="border-1 border-slate-300"></div>
      <div>
        <h2>Or connect with:</h2>
        <button>Continue with Apple</button>
        <button>Continue with Facebook</button>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default SignInModal;
