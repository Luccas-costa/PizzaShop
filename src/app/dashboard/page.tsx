"use client";
import React, { useState } from "react";

import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";

export default function Dashboard() {
  const [name, setname] = useState("");
  const [chosen, setChosen] = useState<"inicio" | "pedidos" | "adicionar">(
    "inicio"
  );

  const handlerChosen = (page: "inicio" | "pedidos" | "adicionar") => {
    console.log(page);
    setChosen(page);
  };

  const handlerName = (name: string) => {
    setname(name);
  };

  return (
    <div className='w-screen h-screen bg-zinc-900'>
      <NavBar handlerChosen={handlerChosen} name={name} />
      <div className='w-screen h-[1px] bg-zinc-200/50 shadow-2xl mt-4 mb-6' />
      <div className='flex justify-center'>
        <Hero chosen={chosen} handlerName={handlerName} />
      </div>
    </div>
  );
}
