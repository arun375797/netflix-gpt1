import React, { useState } from "react";
import Header from "./Header";

const Signin = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <form className=" p-23 bg-black bg-opacity-80 w-3/12  my-36 mx-auto right-0 left-0 absolute p-12 text-white">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign in" : "Sign up"}</h1>
        {!isSignInForm&&(<input
          type="text"
          placeholder="Full Name"
          className="p-2 w-full my-2 bg-gray-900"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 w-full my-2 bg-gray-900"
        />
      
        <input
          type="Password"
          placeholder="Password"
          className="p-2 w-full my-2 bg-gray-900"
        />
        <button className="p-2 my-4 bg-red-700 rounded-2xl">
          {" "}
          {isSignInForm ? "Sign in" : "sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "  Are you new to Netflix? Sign Up now" : "Already Registerd? Sign In now"}
        
        </p>
      </form>
    </div>
  );
};

export default Signin;
