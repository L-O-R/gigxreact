import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      <div className=" mx-auto px-4 sm:px-6 lg:px-14 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <NavLink to="/">
              <img
                src={logo}
                alt="GIGX Logo"
                className="h-12 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 bg-white py-2 px-3 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-black py-2 rounded-lg px-2 text-lg text-white"
                  : "py-2 rounded-lg px-2 text-lg transition-all duration-300 ease-in hover:bg-black hover:text-white"
              }>
              Students
            </NavLink>
            <NavLink
              to="/client"
              className={({ isActive }) =>
                isActive
                  ? "bg-black py-2 rounded-lg px-2 text-lg text-white"
                  : "py-2 rounded-lg px-2 text-lg transition-all duration-300 ease-in hover:bg-black hover:text-white"
              }>
              Client
            </NavLink>
          </nav>

          {/* Download App Button - Desktop */}
          <div className="hidden md:block">
            <button class="cursor-pointer text-lg  relative inline-flex gap-1 items-center justify-center px-4 py-4 bg-[#FF6D39] text-white rounded-lg hover:bg-opacity-70 font-semibold   transition-all duration-300 hover:shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <mask
                  id="mask0_2510_191"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24">
                  <rect
                    width="24"
                    height="24"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2510_191)">
                  <path
                    d="M12 16L16 12L14.6 10.6L13 12.2V8H11V12.2L9.4 10.6L8 12L12 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#FDFAF7"
                  />
                </g>
              </svg>
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">
                Open main menu
              </span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/students"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-black"
              onClick={toggleMenu}>
              Students
            </Link>
            <Link
              to="/clients"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
              onClick={toggleMenu}>
              Clients
            </Link>
            <button class="cursor-pointer text-base  relative inline-flex gap-1 items-center justify-center px-4 py-4 bg-[#FF6D39] text-white rounded-lg hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <mask
                  id="mask0_2510_191"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24">
                  <rect
                    width="24"
                    height="24"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2510_191)">
                  <path
                    d="M12 16L16 12L14.6 10.6L13 12.2V8H11V12.2L9.4 10.6L8 12L12 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#FDFAF7"
                  />
                </g>
              </svg>
              Download
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
