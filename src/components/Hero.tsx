import React from "react";
import CardDashboard from "./ui/CardDashboard";
import { CurrencyDollar } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className='w-[calc(100%-80px)] h-full flex flex-col'>
      <div className='text-3xl font-semibold text-white'>Dashboard</div>
      <div className='flex space-x-4 mt-3'>
        <CardDashboard
          title='Receitra total (mês)'
          number='R$ 65.575,00'
          porcentagem='-70.66%'
          description='em relação ao mês passado'
          icon={CurrencyDollar}
        />
        <CardDashboard
          title='Receitra total (mês)'
          number='R$ 65.575,00'
          porcentagem='-70.66%'
          description='em relação ao mês passado'
          icon={CurrencyDollar}
        />
        <CardDashboard
          title='Receitra total (mês)'
          number='R$ 65.575,00'
          porcentagem='-70.66%'
          description='em relação ao mês passado'
          icon={CurrencyDollar}
        />
        <CardDashboard
          title='Receitra total (mês)'
          number='R$ 65.575,00'
          porcentagem='-70.66%'
          description='em relação ao mês passado'
          icon={CurrencyDollar}
        />
      </div>
    </div>
  );
}
