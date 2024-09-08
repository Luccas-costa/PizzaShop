"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface DashboardButtonProps {
  status: "Null" | "Enviado" | "Enviando" | "Erro" | "Pendente" | string;
  handleStatusProps: (Status: string) => void;
}

export default function DashboardButton({
  status,
  handleStatusProps,
}: DashboardButtonProps) {
  const [IsAnimation, setIsAnimation] = useState(false);
  const [numberStatus, setNumberStatus] = useState(0);
  const [IsFinalAnimation, setIsFinalAnimation] = useState(false);
  const [statusButton, setStatusButton] = useState<
    "Null" | "Deu erro" | "Enviar" | "Enviando" | "Enviado"
  >("Null");

  const handleStatus = (numberStatus: number) => {
    if (numberStatus === 0) {
      setIsAnimation(true);
      setStatusButton("Enviar");
      handleStatusProps(status);
    } else if (numberStatus === 1) {
      setIsAnimation(true);
      setStatusButton("Enviando");
      handleStatusProps(status);
    } else if (numberStatus === 2) {
      setIsAnimation(true);
      setStatusButton("Enviado");
      handleStatusProps(status);
    } else {
      setIsAnimation(true);
      setStatusButton("Null");
      handleStatusProps("Null");
    }
    console.log(status); // imprime o status atual
    setNumberStatus(numberStatus); // Atualiza o número de status
  };

  useEffect(() => {
    {
      status === "Null" && setStatusButton("Null");
    }
    {
      status === "Erro" && setStatusButton("Deu erro");
    }
    {
      status === "Enviado" && setStatusButton("Enviado");
    }
    {
      status === "Enviando" && setStatusButton("Enviando");
    }
    {
      status === "Pendente" && setStatusButton("Enviar");
    }
  }, [status]);

  useEffect(() => {
    setIsAnimation(true);
  }, [statusButton]);

  useEffect(() => {
    if (IsAnimation) {
      setTimeout(() => {
        setIsAnimation(false);
        setIsFinalAnimation(true);
      }, 1000);
      setTimeout(() => {
        setIsFinalAnimation(false);
      }, 2000);
    }
  }, [IsAnimation]);

  return (
    <div
      className={`w-[120px] h-[35px] border  rounded-lg flex items-center justify-center pr-2 space-x-2 cursor-pointer ${
        status === "Erro" ? "border-red-500/70" : "border-zinc-500"
      } ${
        statusButton === "Enviado" ? "border-zinc-700 pointer-events-none" : ""
      }`}
      onClick={() => handleStatus(numberStatus + 1)}
    >
      <div
        className={`${
          IsAnimation
            ? "transition-all duration-200 translate-x-[100px] opacity-0"
            : ""
        }`}
      >
        <ArrowRight
          size={16}
          weight='bold'
          color={
            status === "Erro"
              ? "#AF3738"
              : statusButton === "Enviado"
              ? "#3f3f46"
              : "white"
          }
        />
      </div>
      <div
        className={`transition-all duration-200 ${
          status === "Erro"
            ? "text-red-500/70"
            : statusButton === "Enviado"
            ? "text-zinc-700"
            : "text-white"
        } ${IsAnimation ? "opacity-0" : ""} ${
          IsFinalAnimation ? "opacity-1 " : ""
        }`}
      >
        {statusButton}
      </div>
    </div>
  );
}
