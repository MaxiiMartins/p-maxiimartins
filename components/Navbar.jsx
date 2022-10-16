import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img from "../public/assets/logo.png"
import { FaBars } from "react-icons/fa";

import NavResponsive from "./NavResponsive";

const Navbar = () => {
  const [navegacion, setNavegacion] = useState(false);
  const links = ["inicio", "proyectos", "habilidades", "sobre mi", "contacto"];

  return (
    <div className="w-full h-20 z-10 fixed bg-black text-white duration-300 ease-in">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider  hover: cursor-pointer">
          {/* <Image src={img} width="150px" height="90px"  alt={""} /> */}
          {`< M />`}
          </h1>
        </Link>
        <div>
          <ul className="hidden md:flex">
            {links.map((link, index) =>{
              let href = link === "sobre mi" ? link.split(" ").join("-") : link
              return(
                <Link key={index} href={href === "inicio" ?"/" :`/#${href}`}>
                  <li className="ml-10 text-sm uppercase cursor-pointer font-semibold duration-300 ease-in-out hover:text-red-800 ">
                    {link}
                  </li>
                </Link>
              )
            })}
          </ul>
          {!navegacion && (
            <div
              className="md:hidden cursor-pointer hover:text-red-800 duration-500 ease-in-out"
              onClick={() => setNavegacion(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          navegacion
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <NavResponsive links={links} navegacion={navegacion} setNavegacion={setNavegacion} />
      </div>
    </div>
  );
};

export default Navbar;
