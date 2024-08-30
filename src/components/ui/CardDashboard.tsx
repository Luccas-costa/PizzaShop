import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface CardDashboardProps {
  title: string;
  number: string;
  description: string;
  icon: React.ElementType;
  porcentagem: string;
}

export default function CardDashboard({
  title,
  number,
  description,
  icon: Icon, // Renomear para Icon para usá-lo como um componente
  porcentagem,
}: CardDashboardProps) {
  return (
    <div className='border border-zinc-200/60 rounded-lg flex flex-col p-6 w-[calc(25%-20px)]'>
      <div className='flex items-center justify-between'>
        <span className='text-white'>{title}</span>
        <span>
          <Icon size={25} color='#A5A5A5' />
        </span>
      </div>
      <div className='text-3xl font-semibold text-white mt-2 mb-1'>
        {number}
      </div>
      <div className='text-zinc-200/60 text-sm'>
        <span className='text-red-500/70'>{porcentagem}</span> em relação ao mês
        passado
      </div>
    </div>
  );
}
