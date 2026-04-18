import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login relative min-h-screen overflow-x-hidden">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
        alt="bg-img"
        className="object-cover w-screen h-screen absolute"
      />
      {/* login sign up form */}
      <form
        action=""
        className="bg-blue flex flex-col gap-5 absolute z-10 p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 rounded-md bg-opacity-80"
      >
        <label className="text-white text-[22px] font-semibold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </label>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full name"
            className="text-[14px] rounded-sm p-3 bg-[#2a2a2a] w-[250px]"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="text-[14px] rounded-sm p-3 bg-[#2a2a2a] w-[250px]"
        />
        <input
          type="text"
          placeholder="Password"
          className="text-[14px] rounded-sm p-3 bg-[#2a2a2a] w-[250px]"
        />
        <button className="bg-red-600 rounded-sm p-2 text-white mt-4 text-[14px]">
          {isSignUp ? "Sign up" : "Sign In"}
        </button>

         
          <p className="text-[#2a2a2a] text-[14px] font-medium mb-5">
            {isSignUp ? "Already Registered?" : "New to Netflix?"}
            &nbsp;
            <span
              className="text-white cursor-pointer"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp ? "Sign in now." : "Sign up now."}
            </span>
          </p>
      </form>
    </div>
  );
};

export default Login;
