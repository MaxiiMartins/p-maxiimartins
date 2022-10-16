import Head from "next/head";
import React from "react";

const EnDesarrollo = () => {
  return (
    <div class="w-full min-h-screen flex flex-col justify-center items-center bg-black">
      <Head>
        <title>Maxi Martins</title>
        <meta name="description" content="Portafolio web en desarrollo - Maxi Martins"/>
      </Head>
      <p
        id="modal-switch"
        class=" xl:mt-64 md:mt-44 text-[10vw] select-none bg-gradient-to-r from-gray-200 via-gray-400 text-transparent bg-clip-text  to-gray-800 font-bold"
      >
        Maxi Martins
      </p>
      <p class="text-lg text-gray-300 flex-grow select-none">Desarrollador Web Full Stack...</p>
    </div>
  );
};

export default EnDesarrollo;
