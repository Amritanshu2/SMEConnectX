import { NavLink } from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Profilecard from "../Components/Profilecard";
import Down from '../Components/Down';

const Navbar = () => {
  const isLoggedIn = true;
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-teal-600 font-bold pointer-events-none transition-all duration-300 mx-3"
      : "text-emerald-700 hover:text-teal-600 transition-all duration-300";

  return (
    <div className="navbar bg-emerald-100 justify-between flex px-4 py-4 items-center text-xl fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center px-3 py-1 border border-emerald-500 text-emerald-800 ml-10 bg-white rounded-lg font-semibold shadow-sm">
          SMEConnectX
        </div>
        {isLoggedIn && (
          <div className="flex items-center space-x-10 ml-[12rem]">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>

            {/* Prepare Dropdown with hover control */}
            <div
              
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavLink to="/prepare" className={navLinkStyles}>Prepare</NavLink>
              {showDropdown && <Down />}
            </div>

            <NavLink to="/contact" className={navLinkStyles}>SMEs</NavLink>
          </div>
        )}
      </div>

      {isLoggedIn && (
        <>
          {showMenu && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setShowMenu(false)}
            />
          )}

          <div className="flex items-center px-4 py-2 space-x-4 bg-white border mr-12 border-gray-600 rounded-full z-50">
            <Bars3Icon
              className="h-6 w-6 text-emerald-600 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
            <img
              src="https://media.naukri.com/media/jphotov1/l244%253ALukcMTq%252F2gEbErq3VQgEbp00wHshbso7g1t73KRzlTrGKrkS7hVghXj9kP1e"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
          </div>

          {showMenu && <Profilecard onClose={() => setShowMenu(false)} />}
        </>
      )}
    </div>
  );
};

export default Navbar;
