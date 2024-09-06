'use client';
import React, { useEffect, useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export default function AreaDeTestes() {
    const [IsAnimation, setIsAnimation] = useState(false);
    const [IsFinalAnimation, setIsFinalAnimation] = useState(false);
    const [numberStatus, setNumberStatus] = useState(0);
    const [status, setStatus] = useState<"Null" | "Enviado" | "Enviando" | "Erro">("Null");

    const handleStatus = (numberStatus: number) => {
        if (numberStatus === 0) {
            setIsAnimation(true);
            setStatus("Null");
        } else if (numberStatus === 1) {
            setIsAnimation(true);
            setStatus("Enviado");
        } else if (numberStatus === 2) {
            setIsAnimation(true);
            setStatus("Enviando");
        } else if (numberStatus === 3) {
            setIsAnimation(true);
            setStatus("Erro");
        } else if (numberStatus >= 4) {
            setIsAnimation(true);
            setNumberStatus(0);
            setStatus("Null");  
        }

        console.log(status); // imprime o status atual
        setNumberStatus(numberStatus); // Atualiza o número de status
    }

    useEffect(() => {
        if (IsAnimation) {
            setTimeout(() => {
                setIsAnimation(false);
                setIsFinalAnimation(true);
            }, 2000);
            setTimeout(() => {
                setIsFinalAnimation(false);
            }, 4000);
        }
    }, [IsAnimation]);

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-zinc-900'>
            <div>
                <div
                    className={`w-[120px] h-[35px] border  rounded-lg flex items-center justify-center pr-2 space-x-2 cursor-pointer ${
                    status === "Erro" ? "border-red-500/70" : "border-zinc-500"
                    }`}
                    onClick={() => handleStatus(numberStatus + 1)}
                >
                    <div className={`${IsAnimation ? "transition-all duration-200 translate-x-[100px] opacity-0" : ""}`}>
                        <ArrowRight
                            size={16}
                            weight='bold'
                            color={status === "Erro" ? "#AF3738" : "white"}
                        />
                    </div>  
                    <div
                      className={`transition-all duration-200 ${status === "Erro" ? "text-red-500/70" : "text-white"} ${IsAnimation ? "opacity-0" : ""} ${IsFinalAnimation ? "opacity-1 " : ""}`}
                    >
                        {status === "Null" && "Nao existe"}
                        {status === "Erro" && "Deu erro"}
                        {status === "Enviado" && "Enviado"}
                        {status === "Enviando" && "Enviando"}
                    </div>
                </div>
            </div>
        </div>
    )
}
