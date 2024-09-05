"use client";
import React, { useState, useEffect } from "react";

import {
  CaretDown,
  HouseLine,
  Moon,
  Sun,
} from "@phosphor-icons/react/dist/ssr";
import { UtensilsCrossed } from "lucide-react";

import Pizza from "../components/icon/Pizza";

interface NavBarProps {
  handlerChosen: (page: "pedidos" | "inicio") => void;
}

export default function NavBar({ handlerChosen }: NavBarProps) {
  const Establishment = "Diego's Pizza Shop";
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [page, setpage] = useState<"inicio" | "pedidos">("inicio");
  const [EstablishmentModal, setEstablishmentModal] = useState(false);

  useEffect(() => {
    handlerChosen(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className='flex justify-between items-center h-[50px] pt-5 pl-5'>
      <div className='flex space-x-3'>
        <Pizza theme='light' size={40} />
        <div className='text-neutral-400/30 text-2xl flex items-center pl-2'>
          |
        </div>

        <div
          className={`pl-2 flex items-center space-x-2 ${
            page === "inicio" ? "text-white" : "text-white/70"
          } font-semibold cursor-pointer`}
          onClick={() => setpage("inicio")}
        >
          <HouseLine
            size={28}
            color={page === "inicio" ? "white" : "#A5A5A5"}
          />
          <span>Início</span>
        </div>

        <div
          className={`pl-2 flex items-center space-x-2 ${
            page === "pedidos" ? "text-white" : "text-white/70"
          } font-semibold cursor-pointer`}
          onClick={() => setpage("pedidos")}
        >
          <UtensilsCrossed
            size={24}
            color={page === "pedidos" ? "white" : "#A5A5A5"}
          />
          <span>Pedidos</span>
        </div>
      </div>

      <div className='flex space-x-3 mr-5'>
        <div
          className='size-[40px] border border-zinc-500 rounded-lg flex items-center justify-center cursor-pointer'
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" && <Moon size={24} color='white' />}
          {theme === "light" && <Sun size={24} color='white' />}
        </div>
        <div
          className='max-w-[250px] h-[40px] border border-zinc-500 rounded flex items-center justify-start text-white cursor-pointer space-x-1 px-4 transition-all duration-200'
          onClick={() => setEstablishmentModal(!EstablishmentModal)}
        >
          <span>{Establishment}</span>
          <div
            className={`${
              EstablishmentModal ? "rotate-180" : ""
            } transition-all duration-200`}
          >
            <CaretDown size={18} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}
