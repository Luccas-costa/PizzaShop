"use client";
import React, { useState } from "react";

import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";

export default function Dashboard() {
  const [chosen, setChosen] = useState<"inicio" | "pedidos">("inicio");

  const handlerChosen = (page: "inicio" | "pedidos") => {
    console.log(page);
    setChosen(page);
  };
  return (
    <div className='w-screen h-screen bg-zinc-900'>
      <NavBar handlerChosen={handlerChosen} />
      <div className='w-screen h-[1px] bg-zinc-200/50 shadow-2xl mt-4 mb-6' />
      <div className='flex justify-center'>
        <Hero chosen={chosen} />
      </div>
    </div>
  );
}
