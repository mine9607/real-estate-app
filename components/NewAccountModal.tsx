import Link from "next/link";
import React from "react";

const NewAccountModal = () => {
  return (
    <div>
      <h2>Welcome to Zillow</h2>
      <nav>New account</nav>
      {/* Nav is an option of "Sign in or New Account" */}
      {/* Conditionally render the Modal based on the choice */}
      <div>
        <label htmlFor=""></label>
        <input type="text" placeholder="Enter email" />
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Enter password" />
          <p>At least 8 characters</p>
          <p>Mix of letters and numbers</p>
          <p>At least 1 special character</p>
          <p>At least 1 lowercase letter and uppercase letter</p>
        </div>
      </div>
      <div>
        <button>Submit</button>
        {/* Disable button until form is filled out */}
        <p>
          By submitting, I accept Zillow's{" "}
          <span>
            <Link href="https://www.zillow.com/z/corp/terms/">terms of use</Link>
          </span>
        </p>
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

export default NewAccountModal;

// Note: the modals should be closed on click of the "X" button or outside of the modal or ESC key press
