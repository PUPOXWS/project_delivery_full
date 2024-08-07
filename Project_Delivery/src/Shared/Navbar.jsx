import React, { useState } from "react";
import logo from "../assets/logo_2.svg";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
      <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="h-14 cursor-pointer" />
          <div className="lg:flex hidden gap-8 items-center">
            <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
              Especiales Hoy
            </a>
            <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
              Encuentra ya!
            </a>
            <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
              Nuestro Menu
            </a>
            <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
              agregar Pedido
            </a>
            <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
              Comida Popular
            </a>
            <button
              className="bg-[#22E125] active:scale-90 transition duration-100 transform
              hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"
            >
              Login
            </button>
          </div>

          <div className="block lg:hidden z-40" onClick={handleNav}>
            {nav ? (
              <RxCross2 size={25} className="text-[#191919] cursor-pointer" />
            ) : (
              <TiThMenu className="text-green-500 cursor-pointer" size={25} />
            )}
          </div>
          <div
            className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${
              nav ? "right-0" : "right-[-100%]"
            } pt-24`}
          >
            <div className="flex flex-col  gap-8 items-center">
              <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
                Especiales Hoy
              </a>
              <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
                Encuentra ya!
              </a>
              <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
                Nuestro Menu
              </a>
              <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
                agregar Pedido
              </a>
              <a href="" className="text-[#191919] text-xl font-medium hover:text-green-500">
                Comida Popular
              </a>
              <Link to="/login">
                <button
                  className="bg-[#22E125] active:scale-90 transition duration-100 transform
                hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
