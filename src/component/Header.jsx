import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import DownloadBtn from "./ui/DownloadBtn";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      <div className=" mx-auto px-4 sm:px-6 lg:px-14 py-3">
        <div className="flex items-center justify-between lg:h-16">
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
            <DownloadBtn />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex flex-col items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none">
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
        <div className="md:hidden flex flex-col gap-6 items-center py-6 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-x-3">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-black py-2 rounded-lg px-2 text-lg text-white"
                  : "py-2 rounded-lg px-2 text-lg transition-all duration-300 ease-in hover:bg-black hover:text-white"
              }>
              Students
            </NavLink>
            <NavLink
              to="/client"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-black py-2 rounded-lg px-2 text-lg text-white"
                  : "py-2 rounded-lg px-2 text-lg transition-all duration-300 ease-in hover:bg-black hover:text-white"
              }>
              Client
            </NavLink>
          </div>
          <div className="">
            <DownloadBtn />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
