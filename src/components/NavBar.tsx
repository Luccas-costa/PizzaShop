"use client";
import React, { useState } from "react";

import {
  CaretDown,
  CaretUp,
  HouseLine,
  Moon,
  Sun,
} from "@phosphor-icons/react/dist/ssr";
import { UtensilsCrossed } from "lucide-react";

import Pizza from "../components/icon/Pizza";

interface NavBarProps {
  chosen: boolean;
}

export default function NavBar({ chosen }: NavBarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [EstablishmentModal, setEstablishmentModal] = useState(false);

  const Establishment = "Diego's Pizza Shop";
  return (
    <div className='flex justify-between items-center h-[50px] pt-5 pl-5'>
      <div className='flex space-x-3'>
        <Pizza theme='light' size={40} />
        <div className='text-neutral-400/30 text-2xl flex items-center pl-2'>
          |
        </div>
        <div
          className={`pl-2 flex items-center space-x-2  ${
            chosen ? "text-white" : "text-white/70"
          } font-semibold`}
        >
          <HouseLine size={28} color={chosen ? "white" : "#A5A5A5"} />
          <span>Início</span>
        </div>
        <div
          className={`pl-2 flex items-center space-x-2 ${
            chosen ? "text-white/70" : "text-white"
          } font-semibold`}
        >
          <UtensilsCrossed size={24} color={chosen ? "#A5A5A5" : "white"} />
          <span>Pedidos</span>
        </div>
      </div>

      <div className='flex space-x-3 mr-5'>
        <div
          className='size-[40px] border border-white/70 rounded-lg flex items-center justify-center cursor-pointer'
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" && <Moon size={24} color='white' />}
          {theme === "light" && <Sun size={24} color='white' />}
        </div>
        <div
          className='max-w-[250px] h-[40px] border border-white/70 rounded flex items-center justify-start text-white cursor-pointer space-x-1 px-4 transition-all duration-200'
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
