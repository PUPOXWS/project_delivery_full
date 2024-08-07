import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
const ComidaRecomendada = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
          Platillos <span className="text-[#f54748]">Recomendados</span>
        </div>
        <div className="grid py-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="food-card  flex flex-col cursor-pointer items-center p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative mb-3 rounded-lg overflow-hidden shadow-md">
              <img src="https://i.ibb.co/xqpxjGk/comida1.jpg" alt="" srcSet="" className="w-full h-auto object-cover" />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-green-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>

              <div className="absolute bottom-2 right-2">
                <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full transition-colors duration-300">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$5</div>
                </button>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <p className="text-xl text-center font-bold text-[#f54748]">Juan</p>
              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.8</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">(4)</span>
              </div>
            </div>

            <button className="bg-[#27A328] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
              Ordenar Ahora
            </button>
          </div>

          <div className="food-card  flex flex-col cursor-pointer items-center p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative mb-3 rounded-lg overflow-hidden shadow-md">
              <img src="https://i.ibb.co/xqpxjGk/comida1.jpg" alt="" srcSet="" className="w-full h-auto object-cover" />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-green-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>

              <div className="absolute bottom-2 right-2">
                <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full transition-colors duration-300">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$5</div>
                </button>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <p className="text-xl text-center font-bold text-[#f54748]">Juan</p>
              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.8</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">(4)</span>
              </div>
            </div>

            <button className="bg-[#27A328] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
              Ordenar Ahora
            </button>
          </div>

          <div className="food-card flex flex-col cursor-pointer items-center p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative mb-3 rounded-lg overflow-hidden shadow-md">
              <img src="https://i.ibb.co/xqpxjGk/comida1.jpg" alt="" srcSet="" className="w-full h-auto object-cover" />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-green-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>

              <div className="absolute bottom-2 right-2">
                <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full transition-colors duration-300">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$5</div>
                </button>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <p className="text-xl text-center font-bold text-[#f54748]">Juan</p>
              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.8</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">(4)</span>
              </div>
            </div>

            <button className="bg-[#27A328] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
              Ordenar Ahora
            </button>
          </div>

          <div className="food-card flex flex-col cursor-pointer items-center p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative mb-3 rounded-lg overflow-hidden shadow-md">
              <img src="https://i.ibb.co/xqpxjGk/comida1.jpg" alt="" srcSet="" className="w-full h-auto object-cover" />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-green-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>

              <div className="absolute bottom-2 right-2">
                <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full transition-colors duration-300">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$5</div>
                </button>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <p className="text-xl text-center font-bold text-[#f54748]">Juan</p>
              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.8</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">(4)</span>
              </div>
            </div>

            <button className="bg-[#27A328] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
              Ordenar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComidaRecomendada;
