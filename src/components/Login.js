import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateUserCreds } from "../utils/validate";
import { signUpUser, signInUser } from "../utils/firebaseSignIn";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleFormSubmit = async () => {
    const validation = validateUserCreds(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (validation) {
      setErrorMessage(validation);
      return;
    }

    try {
      setLoading(true);

      let user;
      if (isSignUp) {
        user = await signUpUser(
          nameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
        );
      } else {
        user = await signInUser(
          emailRef.current.value,
          passwordRef.current.value
        );
      }

      setUser({
        email: user?.email,
        name: user?.displayName,
        uuid: user?.uid,
      });

      navigate("/browse");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login relative min-h-screen overflow-x-hidden">
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
        alt="bg-img"
        className="object-cover w-screen h-screen absolute"
      />

      {/* Form */}
      <form
        className="flex flex-col gap-5 absolute z-10 p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white text-[22px] font-semibold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </label>

        {isSignUp && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full name"
            className="text-[14px] rounded-sm p-3 bg-[#2a2a2a] w-[250px] text-white"
          />
        )}

        <input
          ref={emailRef}
          type="text"
          placeholder="Email or phone number"
          className="text-[14px] rounded-sm p-3 bg-[#2a2a2a] w-[250px] text-white"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="text-[14px] rounded-sm p-3 bg-[#2a2a2a] w-[250px] text-white"
        />

        {errorMessage && (
          <p className="text-red-500 text-[14px] font-medium">
            {errorMessage}
          </p>
        )}

        {/* Button with loader */}
        <button
          className="bg-red-600 rounded-sm p-2 text-white mt-4 text-[14px] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={handleFormSubmit}
          disabled={loading}
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Processing..." : isSignUp ? "Sign up" : "Sign In"}
        </button>

        <p className="text-[#aaa] text-[14px] font-medium mb-5">
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