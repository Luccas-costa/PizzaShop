import Pizza from "@/components/icon/Pizza";
import { Cube } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#252525]'>
      <div className='w-[50vw] h-screen flex flex-col justify-between'>
        <div className='flex space-x-2 items-center text-zinc-200  text-xl pt-10 pl-10'>
          <Pizza theme='light' size={40} />
          <span>pizza.shop</span>
        </div>
        <div className='pb-10 pl-10 text-zinc-200/70 text-sm'>
          Painel do parceiro © pizza.shop - 2024
        </div>
      </div>
      <div className='bg-[#090909] h-screen w-[50vw] flex flex-col items-end '>
        <div className='pt-12 pr-10 text-zinc-200'>Novo estabelicimento</div>
        <div className='m-auto flex flex-col items-center justify-center space-y-2'>
          <div className='text-center font-semibold text-2xl text-zinc-200'>
            Acessar painel
          </div>
          <div className='text-center text-zinc-200/70'>
            Acompanhe suas vendas pelo painel do parceiro!
          </div>
          <div className='flex flex-col pt-4 pb-2 relative'>
            <div className='text-zinc-200'>Seu e-mail</div>
            <div className='absolute right-2 top-12'>
              <Cube size={32} color='#252525' />
            </div>
            <input
              type='text'
              placeholder='example@email.com'
              className='w-[400px] bg-zinc-200 p-2 rounded mt-1 placeholder:text-neutral-800'
            />
          </div>
          <button
            type='submit'
            className='w-[400px] bg-red-600 p-3 rounded text-zinc-300 font-semibold text-sm'
          >
            Acessar painel
          </button>
        </div>
      </div>
    </div>
  );
}
