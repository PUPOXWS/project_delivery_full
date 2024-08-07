import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import cabecera from '../assets/banner.jpg'
const Header = () => {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 bg-neon-dark'>
        <div className='container mx-auto py-[16vh]'>
            <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
              <div className='lg:w-[32rem] w-full flex flex-col space-y-6'>
                <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
              App Food Daniel  El Placer <span className='text-[#f54748]'>
                   de  
                </span> Comer bien   <span className='text-[#f54748]'>nunca </span><span className='text-[#fdc55e]'>  fue tan fácil!</span>
                </div>
                <div className='lg:text-xl text-[#191919] md:text-lg text-base'>
                FastBite es una innovadora aplicación de pedidos de comida rápida diseñada para brindarte una experiencia gastronómica rápida, conveniente y deliciosa. Nuestra plataforma conecta a los usuarios con una amplia variedad de restaurantes locales y cadenas de comida rápida, permitiéndoles ordenar sus platos favoritos con solo unos toques en su teléfono
                </div>

                <div className='flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md'>
                  <div className='flex items-center'>
                    <FaSearch size={22} className='cursor-pointer ' />
                    <input type='text' placeholder='Buscar Aqui!' className='text-[#191919] w-full border-none outline-none py-2 px-4' />
                  </div>
                  <div className='h-10 w-10 relative bg-[#fdc55e] rounded-full'>
                      <FaSearch size={15} className='cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row  gap-8 items-center'>
                  <button className='bg-[#f54748] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>
                    Explorar mas!
                  </button>

                  <div className='sm:flex hidden gap-4 items-center'>
                    <div className='h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full'>
                       <FaPlay size={18} className='cursor-pointer text-[#f54748] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                    </div>
                    <div className='lg:text-xl   text-[#191919] md:text-lg text-base cursor-pointer'>
                      Ver Ahora

                    </div>
                  </div>
                </div>
              </div>
              <img src={cabecera} className='h-[38rem] mx-auto justify-end rounded-lg shadow-lg border-4 border-red-600 object-cover transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl' alt='' />

            </div>
        </div>
    </div>
  )
}

export default Header