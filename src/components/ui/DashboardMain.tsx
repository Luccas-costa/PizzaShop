import React from "react";

import { MagnifyingGlass, ArrowRight, X } from "@phosphor-icons/react";

interface DashboardMainProps {
  id: string;
  time: string;
  status: string;
  name: string;
  price: string;
  last: boolean;
}

export default function DashboardMain({
  id,
  time,
  status,
  name,
  price,
  last,
}: DashboardMainProps) {
  return (
    <div
      className={`h-[60px] ${
        last ? "" : "border-b"
      } border-zinc-500 flex items-center px-5`}
    >
      <div className='size-[35px] border border-zinc-500 rounded-lg flex items-center justify-center mr-8 cursor-pointer'>
        <MagnifyingGlass size={16} color='white' />
      </div>

      <div className='text-xs text-white min-w-[240px]'>{id}</div>

      <div className='text-zinc-400 text-sm min-w-[208px]'>{time}</div>

      <div className='flex space-x-2 items-center min-w-[150px]'>
        <div
          className={`size-[8px] rounded-full ${
            status === "Enviado" && "bg-green-500"
          } ${status === "Erro" && "bg-red-500"} ${
            status === "Pendente" && "bg-blue-300"
          } ${status === "Enviando" && "bg-yellow-500"} ${
            status === "Null" && "bg-zinc-200"
          }`}
        />
        <div className='text-zinc-400 text-sm'>{status}</div>
      </div>

      <div className='text-white min-w-[718px]'>{name}</div>

      <div className='text-white min-w-[120px]'>{price}</div>

      <div
        className={`w-[120px] h-[35px] border  rounded-lg flex items-center justify-center pr-2 space-x-2 cursor-pointer ${
          status === "Erro" ? "border-red-500/70" : "border-zinc-500"
        }`}
      >
        <div>
          <ArrowRight
            size={16}
            weight='bold'
            color={status === "Erro" ? "#AF3738" : "white"}
          />
        </div>
        <div
          className={`${status === "Erro" ? "text-red-500/70" : "text-white"}`}
        >
          {status === "Null" && "Nao existe"}
          {status === "Erro" && "Deu erro"}
          {status === "Enviado" && "Enviado"}
          {status === "Enviando" && "Enviando"}
          {status === "Pendente" && "Enviar"}
        </div>
      </div>

      <div className='flex items-center space-x-2 ml-10 p-2 rounded-lg cursor-pointer hover:border hover:border-zinc-500/50'>
        <X size={12} weight='bold' color='white' />
        <div className='text-white'>Cancelar</div>
      </div>
    </div>
  );
}
