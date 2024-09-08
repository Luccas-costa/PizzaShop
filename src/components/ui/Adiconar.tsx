import React, { useState } from "react";

import { DataInputs } from "@/types/DataInputs";

interface AdiconarProps {
  data: DataInputs;
  isLoading: boolean;
  handlerUpdateData: (key: string, value: string) => void;
  handlerInsertPedido: () => void;
}

export default function Adiconar({
  data,
  isLoading,
  handlerUpdateData,
  handlerInsertPedido,
}: AdiconarProps) {
  const handlerSend = () => {
    if (data.nome_cliente != "" && data.valor != "") {
      handlerInsertPedido();
    }
  };
  return (
    <div className='w-full h-full mt-6'>
      <div className='flex flex-col space-y-4  justify-center'>
        <input
          type='text'
          className='w-[500px] rounded-lg border border-white p-2 bg-transparent placeholder:text-white text-white'
          placeholder='Nome cliente'
          value={data.nome_cliente || ""}
          onChange={(e) => handlerUpdateData("nome_cliente", e.target.value)}
        />
        <input
          type='text'
          className='w-[500px] rounded-lg border border-white p-2 bg-transparent placeholder:text-white text-white'
          placeholder='Valor da compra'
          value={data.valor || ""}
          onChange={(e) => {
            let valor = e.target.value;
            valor = valor.replace(",", "."); // Substitui vírgulas por pontos
            valor = valor.replace(/[^0-9.]/g, ""); // Remove qualquer caractere que não seja número ou ponto
            handlerUpdateData("valor", valor);
          }}
        />
        <button
          className='w-[500px] rounded-lg border border-white p-2 bg-transparent text-white text-center hover:bg-zinc-800'
          onClick={handlerSend}
        >
          {isLoading ? "Adicionando..." : "Adicionar"}
        </button>
      </div>
    </div>
  );
}
