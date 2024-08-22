import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import imagen from "../assets/registro2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registro = () => {
  const [image, setImage] = useState({});
  const [subiendo, setSubiendo] = useState(false);
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleImagen = async (e) => {
    const archivo = e.target.files[0];
    let datosFormulario = new FormData();
    datosFormulario.append("image", archivo);
    setSubiendo(true);

    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/all/upload-image", datosFormulario);
      console.log(data);
      setSubiendo(false);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
    } catch (error) {
      console.log(error);
      setSubiendo(false);
    }
  };

  const handleSubmit = async (event) => {
    // Corregido de handleSumbit a handleSubmit
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmpassword = from.confirmpassword.value; // Debe coincidir con el campo en el formulario
    const imageProfile = image?.url;

    const userData = { name, email, password, confirmpassword, imageProfile }; // Corregido confirmPassword a confirmpassword

    try {
      const response = await fetch("http://localhost:8000/api/v1/usuario/registro", {
        // Corregida la URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.data.token);
        toast.success(data.message);
        from.reset();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      toast.error("Error al registrar el usuario.");
    }
  };

  console.log(image);

  return (
    <div className="register bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-full mx-auto pt-[16vh]">
        <form
          className="ease-in duration-300 w-[80%] sm:w-max shadow-lg backdrop-blur-lg bg-white/90 lg:w-max mx-auto rounded-lg px-8 py-10"
          onSubmit={handleSubmit}
        >
          <label htmlFor="file-upload" className="custom-file-upload cursor-pointer">
            <img src={image?.url || imagen} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer shadow-md" />
          </label>
          <label className="block text-center text-gray-900 text-lg font-semibold mb-4">Foto De Perfil</label>
          <input type="file" name="myfile" id="file-upload" className="hidden" accept=".jpeg, .png, .jpg" onChange={handleImagen} />

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Nombre Usuario
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ingresar Nombre"
              className="shadow-md bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ingresar Email"
              className="shadow-md bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="mb-5 w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-medium mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Ingresar Contraseña"
                className="shadow-md bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="mb-5 w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-medium mb-2">Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirmar Contraseña"
                className="shadow-md bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 active:scale-95 transition transform duration-150 ease-in-out shadow-lg w-full rounded-full px-8 py-3 text-xl font-medium text-white mx-auto mb-6 mt-5">
            Regístrate
          </button>

          <Link to="/login" className="text-center text-green-600 font-semibold hover:underline w-full py-2">
            Ve a tu cuenta
          </Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Registro;
