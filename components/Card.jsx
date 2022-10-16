import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ href = "/", title, src }) => {
  return (
    <Link href={`/proyectos${href}`}>
      <div key={title} className="cursor-pointer group shadow-md shadow-gray-700 overflow-hidden rounded-md">
        <Image
          width={490}
          height={277}
          src={src}
          alt={title}
          className="rounded-md duration-200 hover:scale-110"
        />
        <h2 className="text-center text-base capitalize my-4 font-ligth duration-200 group-hover:underline underline-offset-4">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
