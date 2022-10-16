import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import {  FaGithub} from "react-icons/fa";

const Button = ({ href, text, target,github}) => {
  return (
    <Link href={href}>
      <a target={target ? "_blank": ""} rel="noopener noreferrer">
      <div className="group flex items-center justify-center bg-black text-white my-8 px-6 py-3 font-bold uppercase rounded-md tracking-wider hover:text-red-800 cursor-pointer duration-300 ease-in">
        {text}
        <span className={github?"duration-300 ease-in":"-rotate-90 duration-300 ease-in group-hover:rotate-0"}>
          {github ? <FaGithub size={20} className="ml-2" /> :<MdExpandMore size={25} />}
        </span>
      </div>
      </a>
    </Link>
  );
};

export default Button;
