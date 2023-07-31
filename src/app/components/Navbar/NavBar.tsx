import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-primary px-5 py-4 items-center mb-8">
      <div className="flex flex-row gap-5">
        <Image
          className="ml-2"
          src="/pokeball.png"
          alt="pokeball"
          width={30}
          height={30}
        />
        <h1 className="text-white font-bold text-2xl"><a href="/">PokeNext</a></h1>
      </div>

      <div className="flex flex-row text-white gap-5 font-medium text-2xl p-1.5">
        <Link
          className="border-b-2 border-solid border-transparent hover:border-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="border-b-2 border-solid border-transparent hover:border-white"
          href="/about"
        >
          Sobre
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
