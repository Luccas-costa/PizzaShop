"use client";
import React, { useState } from "react";
import CardDashboard from "./ui/CardDashboard";
import { CurrencyDollar, ForkKnife } from "@phosphor-icons/react/dist/ssr";
import GraphicDashboard from "./ui/GraphicDashboard";
import GraphicPizzaDashboard from "./ui/GraphicPizzaDashboard";
import Filters from "./ui/Filters";
import Dashboard from "./ui/Dashboard";

interface HeroProps {
  chosen: "inicio" | "pedidos";
}

export default function Hero({ chosen }: HeroProps) {
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    status: "",
  });

  const handleFilterChange = (newFilters: {
    id: string;
    name: string;
    status: string;
  }) => {
    setFilters(newFilters);
  };
  return (
    <div className='w-[calc(100%-80px)] h-full flex flex-col'>
      {chosen === "inicio" && (
        <>
          <div className='text-3xl font-semibold text-white'>Dashboard</div>
          <div className='flex space-x-4 mt-3'>
            <CardDashboard
              title='Receitra total (mês)'
              number='R$ 65.575,00'
              porcentagem='-70.66%'
              color={false}
              description='em relação ao mês passado'
              icon={CurrencyDollar}
            />
            <CardDashboard
              title='Pedidos (mês)'
              number='35'
              porcentagem='-74.64%'
              color={false}
              description='em relação ao mês passado'
              icon={ForkKnife}
            />
            <CardDashboard
              title='Pedidos (dia)'
              number='0'
              porcentagem='0%'
              color={false}
              description='em relação a ontem'
              icon={ForkKnife}
            />
            <CardDashboard
              title='Cancelamento (mês)'
              number='6'
              porcentagem='-79.64%'
              color={true}
              description='em relação ao mês passado'
              icon={CurrencyDollar}
            />
          </div>
          <div className='flex space-x-4 mt-4'>
            <GraphicDashboard />
            <GraphicPizzaDashboard />
          </div>
        </>
      )}

      {chosen === "pedidos" && (
        <>
          <div className='text-3xl font-semibold text-white'>Pedidos</div>
          <Filters onFilterChange={handleFilterChange} />
          <Dashboard filters={filters} />
        </>
      )}
    </div>
  );
}
