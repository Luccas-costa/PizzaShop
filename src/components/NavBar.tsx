"use client";
import React, { useState } from "react";

import { HouseLine, Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { UtensilsCrossed } from "lucide-react";

import Pizza from "../components/icon/Pizza";

interface NavBarProps {
  chosen: boolean;
}

export default function NavBar({ chosen }: NavBarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  return (
    <div className='flex justify-between items-center h-[50px] pt-5 pl-5'>
      <div className='flex space-x-3'>
        <Pizza theme='light' size={40} />
        <div className='text-neutral-400/30 text-2xl flex items-center pl-2'>
          |
        </div>
        <div
          className={`pl-2 flex items-center space-x-2  ${
            chosen ? "text-zinc-100" : "text-zinc-200/70"
          } font-semibold`}
        >
          <HouseLine size={28} color={chosen ? "#f4f4f5" : "#A5A5A5"} />
          <span>Início</span>
        </div>
        <div
          className={`pl-2 flex items-center space-x-2 ${
            chosen ? "text-zinc-200/70" : "text-zinc-100"
          } font-semibold`}
        >
          <UtensilsCrossed size={24} color={chosen ? "#A5A5A5" : "#f4f4f5"} />
          <span>Pedidos</span>
        </div>
      </div>

      <div className='flex space-x-2'>
        <div
          className='size-[34px] border border-zinc-200/50 rounded flex items-center justify-center cursor-pointer'
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" && <Moon size={20} color='white' />}
          {theme === "light" && <Sun size={20} color='white' />}
        </div>
        <div>
          <input type='text' />
        </div>
      </div>
    </div>
  );
}
