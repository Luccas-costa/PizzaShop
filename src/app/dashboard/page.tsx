import React from "react";

import NavBar from "../../components/NavBar";

export default function Dashboard() {
  return (
    <div className='w-screen h-screen bg-neutral-950'>
      <NavBar chosen={true} />
      <div></div>
    </div>
  );
}
