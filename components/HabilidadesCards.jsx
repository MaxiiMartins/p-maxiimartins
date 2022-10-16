import Image from "next/image";
import React from "react";
import js from "../public/assets/javascript.webp";
import html from "../public/assets/habilidades/html.png";
import css from "../public/assets/habilidades/css.png";
import reactjs from "../public/assets/habilidades/react.svg";
import nextjs from "../public/assets/habilidades/nextjs.svg";
import nodejs from "../public/assets/habilidades/node.png";
import tailwind from "../public/assets/habilidades/tailwind.png";
import github from "../public/assets/habilidades/github.svg";
import redux from "../public/assets/habilidades/redux.svg";
import firebase from "../public/assets/habilidades/firebase.svg";
import bootstrap from "../public/assets/habilidades/bootstrap.svg";
import postgresql from "../public/assets/habilidades/postgresql.svg";

const Habilidad = ({ src, nombre }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg shadow-gray-500 rounded-xl hover:shadow-gray-700 ease-in duration-300 cursor-pointer">
      <Image src={src} alt={nombre} width="64" height="64" />
      <h3 className="font-semibold">{nombre}</h3>
    </div>
  );
};

const HabilidadesCards = () => {
  return (
    <>
      <Habilidad src={html} nombre={"HTML"} />
      <Habilidad src={css} nombre={"CSS"} />
      <Habilidad src={js} nombre={"Javascript"} />
      <Habilidad src={reactjs} nombre={"React js"} />
      <Habilidad src={nextjs} nombre={"Next js"} />
      <Habilidad src={nodejs} nombre={"Node js"} />
      <Habilidad src={tailwind} nombre={"Tailwind"} />
      <Habilidad src={github} nombre={"GitHub"} />
      <Habilidad src={redux} nombre={"Redux"} />
      <Habilidad src={firebase} nombre={"Firebase"} />
      <Habilidad src={bootstrap} nombre={"Bootstrap"} />
      <Habilidad src={postgresql} nombre={"PostgreSQL"} />
    </>
  );
};

export default HabilidadesCards;
