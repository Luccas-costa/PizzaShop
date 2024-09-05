import React from "react";

export default function DashboardTitle() {
  return (
    <div className='h-[50px] border-b border-zinc-500 flex items-center text-zinc-400'>
      <div className='pl-[85px] text-center'>Indentificador</div>
      <div className='pl-[135px] text-center'>Realizado há</div>
      <div className='pl-[115px] text-center'>Status</div>
      <div className='pl-[100px] text-center'>Cliente</div>
      <div className='pl-[660px] text-center'>Total pedido</div>
    </div>
  );
}
