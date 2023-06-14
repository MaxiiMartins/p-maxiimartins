import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/Button";
import Head from "next/head";
import proyectos from "../../../src/data";

//con esto generamos los paths !!
export async function getStaticPaths() {
  const paths = proyectos.map((p) => ({
    params: { id: p.url.slice(1) }
  }));
  return {
    paths,
    fallback: false
  };
}
// accedemos a un paths en especifico
export async function getStaticProps({ params }) {
  const proy = proyectos.find((e) => e.url === `/${params.id}`);
  return {
    props: { proy }
  };
}

const Proyecto = ({ proy }) => {
  return (
    <div className="h-fit w-full text-center">
      <Head>
        <title>{proy.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/proyectos">
            <div className="flex items-center justify-center my-8 text-black font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> Atras
            </div>
          </Link>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-black tracking-wider">
          {proy.title}
        </h1>
        <div className="w-full h-full">
          <Image
            src={proy.src}
            alt={proy.title}
            objectFit="cover"
          />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Descripcion
        </h2>
        <p>{proy.description}</p>
        <div className="flex items-center justify-center gap-10">
          {proy.deploy && (
            <Button href={proy.deploy} text="demo" target={true} />
          )}
          {proy.link && (
            <Button
              href={proy.link}
              text="github"
              github={true}
              target={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
