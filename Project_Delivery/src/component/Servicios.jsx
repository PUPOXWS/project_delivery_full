import React from "react";
import servicio from "../assets/servicio1.jpg";
const Servicios = () => {
  return (
    <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img
            src={servicio}
            alt="Imagen de servicio"
            className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
          <div className="w-full flex flex-col justify-center items-center lg:items-start">
            <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Tu <span className="text-red-500">Favorita </span> Justo <span className="text-yellow-500">A Tu Alcance!</span>
              </h2>
              <p className="text-lg text-gray-600">
                ofrecemos una experiencia gastronómica conveniente y variada al conectar a los usuarios con una amplia selección de restaurantes
                locales y cadenas reconocidas. Permite a los usuarios explorar menús, personalizar pedidos, y realizar pagos seguros de manera
                intuitiva. Además, proporciona opciones de entrega rápida y seguimiento en tiempo real del estado de los pedidos, asegurando una
                experiencia sin complicaciones desde la selección hasta la entrega de la comida deseada directamente en la puerta del usuario{" "}
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <button className="bg-[#27A328] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium">
                Nosotros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
