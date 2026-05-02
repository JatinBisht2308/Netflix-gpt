import React, { useState, useRef, useEffect } from "react";
import profileIcon from "../assets/profile-icon.jpg";
import { signOutUser } from "../utils/firebaseSignIn";
import useAuthStore from "../store/useAuthStore";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const user = useAuthStore((state) => state.user);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Example logout logic
    signOutUser();
    window.location.href = "/";
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      {/* LEFT */}
      <div className="left">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44"
        />
      </div>

      {/* RIGHT */}
      <div className="right relative flex items-center" ref={dropdownRef}>
        {user && (
          <img
            src={profileIcon}
            alt="profile icon"
            className="w-7 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}

        {/* Dropdown Modal */}
        {open && (
          <div className="absolute right-0 top-16 bg-black text-white rounded-md shadow-lg w-40 p-2">
            <button
              onClick={handleLogout}
              className="w-full text-left px-2 py-1 hover:bg-gray-800 rounded text-[14px]"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
