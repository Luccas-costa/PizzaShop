'use client';
import React, { useState } from "react";

import { MagnifyingGlass, ArrowRight, X } from "@phosphor-icons/react";
import DashboardButton from "./DashboardButton";

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
  const [Status, setStatus] = useState(status);

  const handleStatus = (status: string) => {
    if (status === "Null") {
      setStatus("Null");
    } else if (status === "Pendente") {
      setStatus("Enviando");
    } else if (status === "Enviando") {
      setStatus("Enviado");
    } else if (status === "Enviado") {
      setStatus("Enviado");
    } else if (status === "Erro") {
      setStatus("Erro");
    } else {
      setStatus("Erro");
    }
  }
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
            Status === "Enviado" && "bg-green-500"
          } ${Status === "Erro" && "bg-red-500"} ${
            Status === "Pendente" && "bg-blue-300"
          } ${Status === "Enviando" && "bg-yellow-500"} ${
            Status === "Null" && "bg-zinc-200"
          }`}
        />
        <div className='text-zinc-400 text-sm'>{Status}</div>
      </div>

      <div className='text-white min-w-[718px]'>{name}</div>

      <div className='text-white min-w-[120px]'>{price}</div>

      <DashboardButton status={Status} handleStatusProps={handleStatus} />

      <div className='flex items-center space-x-2 ml-10 p-2 rounded-lg cursor-pointer hover:border hover:border-zinc-500/50'>
        <X size={12} weight='bold' color='white' />
        <div className='text-white'>Cancelar</div>
      </div>
    </div>
  );
}
