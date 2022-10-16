import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

const NavResponsive = ({ navegacion, setNavegacion, links }) => {
  return (
    <div
      className={
        navegacion
          ? "fixed left-0 top-0 w-4/5 h-full bg-black text-white p-10 ease-in duration-500"
          : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
      }
    >
      <div>
        <div className="flex w-full items-center justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-wider">
          {`< M />`}
          </h2>
          <div
            className="p-3 cursor-pointer hover:text-red-800 duration-300 ease-in"
            onClick={() => setNavegacion(false)}
          >
            <FaTimes size={30} />
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col h-fit gap-20">
        <ul className="uppercase">
          {links.map((link, index) => {
            let href = link === "sobre mi" ? link.split(" ").join("-") : link;
            return (
              <Link key={index} href={`/#${link}`}>
                <li
                  onClick={() => setNavegacion(false)}
                  className="py-4 text-2xl tracking-wider cursor-pointer hover:text-red-800 duration-300 ease-in"
                >
                  {link}
                </li>
              </Link>
            );
          })}
        </ul>

        <div>
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <Link href="https://www.github.COM/MaxiiMartins/">
              <a target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center rounded-[12px] shadow-md shadow-white py-3 cursor-pointer  hover:text-[#2a2a2a] duration-300 ease-in">
                  <FaGithub size={30} />
                </div>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/maxiimartins/">
              <a target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center rounded-[12px] shadow-md shadow-white py-3 cursor-pointer  hover:text-[#00a0dc] duration-300 ease-in">
                  <FaLinkedin size={30} />
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/maxii.martins/">
              <a target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center rounded-[12px] shadow-md shadow-white py-3 cursor-pointer hover:text-[#c13584] duration-300 ease-in">
                  <FaInstagram size={30} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavResponsive;
