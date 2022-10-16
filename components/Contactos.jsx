import Image from "next/image";
import Link from "next/link";
import React from "react";
import contact from "../public/assets/contact.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contactos = () => {
  return (
    <div id="contacto" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl mod:text-7xl tracking-wider uppercase text-black font-bold">
          Contacto
        </h2>
        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-gray-600 bg-white mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image src={contact} alt="contacto" className="rounded-xl" />
            <p className="pt-2 pb-8">
              Estoy abierto a hablar sobre oportunidades de trabajo
              independiente o de tiempo completo. Siéntete libre de contactarme
              usando tu medio preferido
            </p>
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <Link href="https://www.github.com/MaxiiMartins/">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-gray-600 text-black p-3 cursor-pointer  hover:text-[#505050] duration-300 ease-in">
                    <FaGithub size={30} />
                  </div>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/maxiimartins/">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-gray-600 text-black p-3 cursor-pointer  hover:text-[#00a0dc] duration-300 ease-in">
                    <FaLinkedin size={30} />
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/maxii.martins/">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-gray-600 text-black p-3 cursor-pointer hover:text-[#c13584] duration-300 ease-in">
                    <FaInstagram size={30} />
                  </div>
                </a>
              </Link>
            </div>
          </div>

          {/* formulario */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <form
              action="https://getform.io/f/b1aeb7ed-4836-43f2-8757-7dbff31f768d"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 text-black">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre completo..."
                    required
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 text-black ">
                    Telefono
                  </label>
                  <input
                    type="text"
                    name="telefono"
                    placeholder="221..."
                    required
                    className=" rounded-lg p-3 flex focus:outline-none border-2 border-gray-400"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label
                    required
                    className="capitalize text-sm py-2 text-black "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ejemplo@email.com"
                    required
                    className=" rounded-lg p-3 flex focus:outline-none border-2 border-gray-400"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="capitalize text-sm py-2 text-black ">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    placeholder="Hola estoy interesado en tu perfil..."
                    required
                    rows="10"
                    className="rounded-lg p-3 resize-none flex focus:outline-none border-2 border-gray-400"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:text-red-800 duration-200 ease-in">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
