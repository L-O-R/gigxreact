import React from "react";
import { NavLink } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="relative bg-black px-5 sm:px-8 lg:px-14 pt-40 lg:pt-14 lg:py-14 flex flex-col gap-10">
      <nav>
        <ul className="bg-white w-max flex gap-4 px-2 py-4 rounded-lg text-black">
          <li className="">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-3 py-2 rounded-lg"
                  : "text-black px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:bg-black hover:text-white"
              }>
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/client"}
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-3 py-2 rounded-lg"
                  : " text-black rounded-2 px-3 py-2 rounded-lg transition-all duration-300 ease-in hover:bg-black hover:text-white"
              }>
              Clients
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className=" mt-6 flex flex-col md:flex-row justify-between md:items-center text-white text-lg md:text-xl gap-8">
        <span className="max-w-[90%] md:max-w-[30%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="513"
            height="164"
            viewBox="0 0 513 164"
            className="w-full h-full object-contain"
            fill="none">
            <path
              d="M73.4072 84.6863H141.769V94.8478C142.012 120.046 127.74 143.736 105.614 155.558C73.2259 173.474 27.9885 161.662 9.80467 128.661C-17.3309 79.224 14.578 18.531 72.0907 18.6174C87.081 18.6174 100.413 22.336 112.097 29.7664C117.13 32.9706 121.565 36.7479 125.408 41.1018C132.335 48.95 126.892 61.3662 116.48 61.3662C112.63 61.3662 108.975 59.5259 106.749 56.3528C103.487 51.6984 99.4281 48.0178 94.5727 45.3108C88.0897 41.6992 80.598 39.8899 72.0907 39.8899C43.0608 39.5308 23.393 62.2501 23.8819 91.2293C23.7759 110.023 31.4831 127.307 47.1777 136.433C54.4711 140.663 62.7731 142.772 72.0907 142.772C96.7918 143.038 113.652 127.59 117.058 103.297H73.4072C68.3158 103.297 64.1922 99.1292 64.1922 93.9915C64.1922 88.8538 68.3193 84.6863 73.4072 84.6863ZM172.283 18.4447C165.906 18.4447 160.736 23.6653 160.736 30.1048V152.185C160.736 158.624 165.906 163.845 172.283 163.845C178.66 163.845 183.83 158.624 183.83 152.185V30.1048C183.83 23.6653 178.66 18.4447 172.283 18.4447ZM434.38 98.7598L428.471 93.5185L412.472 79.331L400.741 68.9278L396.521 65.185L364.889 37.1346C351.424 25.1949 334.14 18.6174 316.222 18.6174H273.597V18.6346C234.245 18.6036 201.973 51.0562 202.804 91.2293C202.018 131.844 234.802 164.497 274.712 163.841C312.451 164.618 344.962 132.759 344.391 94.8443V84.6828H276.028C270.937 84.6828 266.813 88.8503 266.813 93.988C266.813 99.1258 270.94 103.293 276.028 103.293H319.679C316.274 127.587 299.413 143.035 274.712 142.769C265.394 142.769 257.089 140.656 249.799 136.43C234.104 127.304 226.401 110.019 226.503 91.2258C226.018 62.7404 245.084 40.0867 273.597 39.9037V39.9383H276.948C276.996 39.9383 277.047 39.9383 277.095 39.9417L316.222 39.9383C329.011 39.9383 341.347 44.6306 350.959 53.1521L396.477 93.5185L368.952 117.93V146.305L412.476 107.706L475.955 164H507.953L443.964 107.257L434.383 98.7598H434.38ZM392.777 37.4764C401.828 41.8131 410.879 46.1602 419.903 50.5521C421.828 51.4878 423.613 51.4844 425.544 50.5625C438.726 44.2819 451.924 38.0496 465.12 31.8035C467.482 30.6848 469.848 29.5696 472.215 28.4543L438.517 62.2018L434.445 90.9945L455.056 74.1242C455.056 74.1242 470.785 87.338 477.887 93.3389C478.951 94.2366 480.069 94.72 481.453 94.1952C482.78 93.6911 483.225 92.5482 483.618 91.3156C490.029 71.2239 513 0 513 0C513 0 421.93 24.7322 393.287 32.4078C391.974 32.7599 390.907 33.2675 390.791 34.7902C390.678 36.2369 391.601 36.9205 392.774 37.4833L392.777 37.4764Z"
              fill="url(#paint0_linear_2563_552)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2563_552"
                x1="-0.00190446"
                y1="82"
                x2="513.003"
                y2="82"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.11" stopColor="#F38343" />
                <stop offset="0.86" stopColor="#E63932" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <ul className=" absolute -top-10 right-2 lg:top-auto lg:bottom-16 lg:right-10 space-y-3 text-gray-300 ">
          <li>
            <NavLink to={"/terms"}>
              Terms & Condition
            </NavLink>
          </li>
          <li>
            <NavLink to={"/privacy"}>
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to={"/refund"}>Refund Policy</NavLink>
          </li>
          <li>
            <NavLink to={"/shipping"}>
              Shipping Policy
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="text-lg md:text-xl text-white">
        © 2024 Copyrights , Designed & Developed by StudX
      </span>
    </footer>
  );
};

export default MainFooter;
