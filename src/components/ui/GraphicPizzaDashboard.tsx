import React from "react";
import { PizzaChart } from "./PizzaChart";

export default function GraphicPizzaDashboard() {
  return (
    <div className='w-[35%] h-[600px] border border-zinc-200/60 rounded-lg p-4'>
      <div>
        <div className='text-white text-lg'>Produtos populares</div>
        <div className='text-zinc-200/60 text-base'>
          Os cinco produtos com mais vendas
        </div>
      </div>
      <PizzaChart />
    </div>
  );
}
