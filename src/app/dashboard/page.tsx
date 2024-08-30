import React from "react";

import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";

export default function Dashboard() {
  return (
    <div className='w-screen h-screen bg-neutral-950'>
      <NavBar chosen={true} />
      <div className='w-screen h-[1px] bg-zinc-200/50 shadow-2xl mt-4 mb-6' />
      <div className='flex justify-center'>
        <Hero />
      </div>
    </div>
  );
}
