import React from "react";
import Header from "../component/Header";
import ComidaRecomendada from "../component/ComidaRecomendada";
import Servicios from "../component/Servicios";
import NuevosPlatillos from "../component/NuevosPlatillos";
import Servicios2 from "../component/Servicios2";

const Home = () => {
  return (
    <div>
      <Header />
      <ComidaRecomendada />
      <Servicios />
      <NuevosPlatillos />
      <Servicios2 />

    </div>
  );
};

export default Home;
