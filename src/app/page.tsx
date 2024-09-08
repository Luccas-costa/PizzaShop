"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Pizza from "@/components/icon/Pizza";
import { Cube } from "@phosphor-icons/react/dist/ssr";
import { verifyEmail } from "@/lib/VerifyEmail";
import { ClienteInsertBD } from "@/database/clientesInsert";

export default function Home() {
  const [Register, setRegister] = useState(false);
  const [nome_estabelecimento, setnome_estabelecimento] = useState("");
  const [email, setEmail] = useState("");
  const [inputBorder, setInputBorder] = useState(false);
  const router = useRouter();

  const handleAccessPanel = () => {
    if (verifyEmail(email)) {
      router.push("/dashboard");
    } else {
      setInputBorder(true);
    }
  };

  const idAleatorio = () => {
    const id = Math.floor(10000 + Math.random() * 90000);
    return id;
  };

  const handlerNewClient = async () => {
    const id = idAleatorio();
    await ClienteInsertBD({
      nome_estabelecimento: nome_estabelecimento,
      receita_total: "0",
      numero_pedidos: "0",
      numero_cancelamentos: "0",
      id: id,
    });
    setRegister(false);
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#252525]'>
      <div className='w-[50vw] h-screen flex flex-col justify-between'>
        <div className='flex space-x-2 items-center text-zinc-200 text-xl pt-10 pl-10'>
          <Pizza theme='light' size={40} />
          <span>pizza.shop</span>
        </div>

        {Register && (
          <div>
            <div className='m-auto flex flex-col items-center justify-center space-y-2'>
              <div className='text-center font-semibold text-2xl text-zinc-200'>
                Criar conta grátis
              </div>
              <div className='text-center text-zinc-200/70'>
                Seja um parceiro e comece suas vendas!
              </div>
              <div className='flex flex-col pt-3 pb-1 relative'>
                <div className='text-zinc-200'>Nome do estabelicimento</div>
                <input
                  type='text'
                  placeholder='Nome do seu estabelecimento'
                  className='w-[400px] bg-zinc-200 p-2 rounded mt-1 placeholder:text-neutral-800'
                  value={nome_estabelecimento}
                  onChange={(e) => setnome_estabelecimento(e.target.value)}
                />
              </div>

              <div className='flex flex-col pt-1 pb-1 relative'>
                <div className='text-zinc-200'>Seu nome</div>
                <input
                  type='text'
                  placeholder='Seu nome completo'
                  className='w-[400px] bg-zinc-200 p-2 rounded mt-1 placeholder:text-neutral-800'
                />
              </div>

              <div className='flex flex-col pt-1 pb-1 relative'>
                <div className='text-zinc-200'>Seu e-mail</div>
                <div className='absolute right-2 top-9'>
                  <Cube size={32} color='#252525' />
                </div>
                <input
                  type='text'
                  placeholder='example@email.com'
                  className='w-[400px] bg-zinc-200 p-2 rounded mt-1 placeholder:text-neutral-800'
                />
              </div>

              <div className='flex flex-col pt-1 pb-4 relative'>
                <div className='text-zinc-200'>Seu celular</div>
                <input
                  type='text'
                  placeholder='Seu numero de telefone'
                  className='w-[400px] bg-zinc-200 p-2 rounded mt-1 placeholder:text-neutral-800'
                />
              </div>

              <button
                type='submit'
                className='w-[400px] bg-red-600 p-3 rounded text-zinc-300 font-semibold text-sm'
                onClick={handlerNewClient}
              >
                Finalizar cadastro
              </button>

              <div className='text-zinc-200/70 mt-2 text-sm'>
                Ao continuar, você concorda com os nossos <br />{" "}
                <span className='underline'>termos de serviço</span> e{" "}
                <span className='underline'>política de privacidade</span>.
              </div>
            </div>
          </div>
        )}

        <div className='pb-10 pl-10 text-zinc-200/70 text-sm'>
          Painel do parceiro © pizza.shop - 2024
        </div>
      </div>
      <div className='bg-[#090909] h-screen w-[50vw] flex flex-col items-end '>
        {Register ? (
          <div
            className='pt-12 pr-10 text-zinc-200 cursor-pointer'
            onClick={() => setRegister(false)}
          >
            Entrar
          </div>
        ) : (
          <>
            <div
              className='pt-12 pr-10 text-zinc-200 cursor-pointer'
              onClick={() => setRegister(true)}
            >
              Novo estabelicimento
            </div>
            <div className='m-auto flex flex-col items-center justify-center space-y-2'>
              <div className='text-center font-semibold text-2xl text-zinc-200'>
                Acessar painel
              </div>
              <div className='text-center text-zinc-200/70'>
                Acompanhe suas vendas pelo painel do parceiro!
              </div>
              <div className={`flex flex-col pt-4 pb-2 relative`}>
                <div className='text-zinc-200'>Seu e-mail</div>
                <div className='absolute right-2 top-12'>
                  <Cube size={32} color='#252525' />
                </div>
                <input
                  type='text'
                  placeholder='example@email.com'
                  className={`w-[400px] bg-zinc-200 p-2 rounded mt-1 placeholder:text-neutral-800 ${
                    inputBorder && "border border-red-500 bg-red-500/60"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='w-[400px] bg-red-600 p-3 rounded text-zinc-300 font-semibold text-sm'
                onClick={handleAccessPanel}
              >
                Acessar painel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
