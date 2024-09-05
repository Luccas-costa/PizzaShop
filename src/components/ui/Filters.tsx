"use client";
import React, { useState } from "react";
import { CaretDown, MagnifyingGlass, X } from "@phosphor-icons/react";

interface FiltersProps {
  onFilterChange: (filters: {
    id: string;
    name: string;
    status: string;
  }) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [OpenStatus, setOpenStatus] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const applyFilters = () => {
    onFilterChange({ id, name, status });
  };

  const clearFilters = () => {
    setId("");
    setName("");
    setStatus("");
    onFilterChange({ id: "", name: "", status: "" });
  };

  const handleStatusClick = (statusValue: string) => {
    setStatus(statusValue);
    onFilterChange({ id, name, status: statusValue });
  };

  const handleShowAllStatus = () => {
    setStatus("");
    onFilterChange({ id, name, status: "" });
  };

  return (
    <div className='mt-4 w-full mb-4 relative transition-all duration-200'>
      <div className='flex space-x-2 items-center w-full'>
        <div className='text-white'>Filtros:</div>
        <input
          type='text'
          placeholder='ID do pedido'
          value={id}
          onChange={(e) => setId(e.target.value)}
          className='border border-zinc-500 focus:border-zinc-200 bg-transparent rounded p-1 text-white placeholder:text-zinc-300/80 pl-2 w-[200px]'
        />
        <input
          type='text'
          placeholder='Nome do cliente'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border border-zinc-500 focus:border-zinc-200 bg-transparent rounded p-1 text-white placeholder:text-zinc-300/80 pl-2 w-[400px]'
        />
        <div
          className='transition-all duration-200 border border-zinc-500 focus:border-zinc-200 bg-transparent rounded p-1 text-zinc-200 placeholder:text-zinc-300/80 pl-2 w-[170px] flex items-center justify-between space-x-8 cursor-pointer'
          onClick={() => setOpenStatus(!OpenStatus)}
        >
          <div>{status ? status : "Todos status"}</div>
          <CaretDown
            size={18}
            weight='bold'
            color='#71717A'
            className={`transition-all duration-200 ${
              OpenStatus && "rotate-180"
            }`}
          />
        </div>
        <div
          className='transition-all duration-200 bg-zinc-200/30 rounded p-1 text-white placeholder:text-zinc-300/80 pl-2 w-[170px] flex items-center space-x-2 cursor-pointer'
          onClick={applyFilters}
        >
          <MagnifyingGlass size={18} weight='bold' color='white' />
          <div>Filtrar resultados</div>
        </div>
        <div
          className='transition-all duration-200 bg-transparent rounded p-1 border border-zinc-700 text-zinc-500 placeholder:text-zinc-300/80 pl-2 w-[170px] flex items-center space-x-2 cursor-pointer'
          onClick={clearFilters}
        >
          <X size={18} weight='bold' color='#71717a  ' />
          <div>Remover filtros</div>
        </div>
      </div>
      {OpenStatus && (
        <div className='absolute left-[676px] top-[40px]'>
          <div className='w-[170px] h-[150px] bg-zinc-800 shadow-2xl rounded-lg'>
            <div className='flex flex-col w-full h-full items-center justify-evenly'>
              <div
                className='w-full h-full rounded-lg flex items-center justify-center text-white cursor-pointer hover:border hover:border-zinc-500'
                onClick={() => handleStatusClick("Erro")}
              >
                <div className='size-[8px] mr-2 rounded-full bg-red-500' />
                Erro
              </div>
              <div
                className='w-full h-full rounded-lg flex items-center justify-center text-white cursor-pointer hover:border hover:border-zinc-500'
                onClick={() => handleStatusClick("Pendente")}
              >
                <div className='size-[8px] mr-2 rounded-full bg-blue-300' />
                Pendente
              </div>
              <div
                className='w-full h-full rounded-lg flex items-center justify-center text-white cursor-pointer hover:border hover:border-zinc-500'
                onClick={() => handleStatusClick("Enviando")}
              >
                <div className='size-[8px] mr-2 rounded-full bg-yellow-500' />
                Enviando
              </div>
              <div
                className='w-full h-full rounded-lg flex items-center justify-center text-white cursor-pointer hover:border hover:border-zinc-500'
                onClick={() => handleStatusClick("Enviado")}
              >
                <div className='size-[8px] mr-2 rounded-full bg-green-500' />
                Enviado
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
