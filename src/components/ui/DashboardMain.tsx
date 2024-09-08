"use client";
import React, { useState } from "react";

import DashboardButton from "./DashboardButton";

import { PedidosDelete } from "@/database/pedidosDelete";
import { PedidosUpdateStatusBD } from "@/database/pedidosUpdate";
import { ClienteUpdateCancelamentoBD } from "@/database/clientesUpdate";

import { MagnifyingGlass, ArrowRight, X } from "@phosphor-icons/react";

interface DashboardMainProps {
  id: string;
  time: string;
  status: string;
  name: string;
  price: string;
  last: boolean;
  handlerRefrash: () => void;
}

export default function DashboardMain({
  id,
  time,
  status,
  name,
  price,
  last,
  handlerRefrash,
}: DashboardMainProps) {
  const [Status, setStatus] = useState(status);
  const [Cancelar, setCancelar] = useState(false);
 

  const handlerCancelar = async (id: string) => {
    setCancelar(false);
    await PedidosDelete(id);
    await ClienteUpdateCancelamentoBD();
    handlerRefrash();
  };

  const UpdateBD = async (id: string, Status: string) => {
    await PedidosUpdateStatusBD(id, Status);
  };

  const handleStatus = async (newStatus: string) => {
    // Atualiza o estado
    setStatus((prevStatus) => {
      let updatedStatus = prevStatus;

      if (newStatus === "Null") {
        updatedStatus = "Null";
      } else if (newStatus === "Pendente") {
        updatedStatus = "Enviando";
      } else if (newStatus === "Enviando") {
        updatedStatus = "Enviado";
      } else if (newStatus === "Enviado") {
        updatedStatus = "Enviado";
      } else if (newStatus === "Erro") {
        updatedStatus = "Erro";
      } else {
        updatedStatus = "Erro";
      }

      // Atualiza o banco de dados com o novo status
      UpdateBD(id, updatedStatus);

      return updatedStatus;
    });
  };

  // Função para formatar o preço
  const formatPrice = (price: string) => {
    // Substitui a vírgula por ponto para converter para número
    const normalizedPrice = price.replace(",", ".");
    const priceFloat = parseFloat(normalizedPrice);
    if (isNaN(priceFloat)) return price; // Retorna o preço original se não for um número válido

    // Formata o número para duas casas decimais e substitui o ponto por vírgula
    return priceFloat.toFixed(2).replace(".", ",");
  };

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

      <div className='text-zinc-400 text-sm min-w-[208px]'>há {time}</div>

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

      <div className='text-white min-w-[120px]'>R$ {formatPrice(price)}</div>

      <DashboardButton status={Status} handleStatusProps={handleStatus} />

      <div className='flex items-center space-x-2 ml-10 p-2 rounded-lg cursor-pointer hover:border hover:border-zinc-500/50'>
        <X size={12} weight='bold' color='white' />
        <div className='text-white' onClick={() => setCancelar(true)}>
          Cancelar
        </div>
      </div>
      {Cancelar && (
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex space-x-2 text-2xl font-bold p-4 border border-zinc-500 bg-zinc-900 rounded-lg'>
          <div
            className='p-3 border border-blue-500 text-blue-500 rounded-lg cursor-pointer'
            onClick={() => setCancelar(false)}
          >
            Voltar
          </div>
          <div
            className='p-3 border border-red-500 text-red-500 rounded-lg cursor-pointer'
            onClick={() => handlerCancelar(id)}
          >
            Certeza
          </div>
        </div>
      )}
    </div>
  );
}
