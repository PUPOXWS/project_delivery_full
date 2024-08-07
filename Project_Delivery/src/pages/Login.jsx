import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/login2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-200 bg-opacity-90 transform  backdrop-blur-md hover:shadow-xl transition-all duration-300">
        <form className="space-y-6">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="mb-6 mx-auto w-32" />
          </NavLink>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              placeholder="ingresar EMAIL"
              className="shadow-sm bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="*************"
              className="shadow-sm bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 active:scale-95 transition-transform duration-150 transform hover:scale-105 shadow-md w-full rounded-full px-8 py-3 text-xl font-medium text-white mx-auto"
            type="submit"
          >
            Ingresar
          </button>

          <Link to="/registro" className="block text-center text-green-600 font-semibold hover:underline">
            Crea Tu Cuenta!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
