import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number; // Recebe o número total de itens
  onPageChange: (page: number) => void;
}

export default function DashboardPagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: PaginationProps) {
  return (
    <div className='mt-4 flex items-center justify-between'>
      <div className='text-zinc-400 text-sm'>Total de {totalItems} item(s)</div>
      <div className='flex items-center space-x-6'>
        <div className='text-white text-sm'>
          Página {currentPage} de {totalPages}
        </div>
        <div className='flex space-x-3'>
          <div
            className='size-[30px] border border-zinc-500 rounded flex items-center justify-center cursor-pointer'
            onClick={() => onPageChange(1)}
          >
            <CaretDoubleLeft size={16} color='white' />
          </div>
          <div
            className='size-[30px] border border-zinc-500 rounded flex items-center justify-center cursor-pointer'
            onClick={() => onPageChange(currentPage - 1)}
          >
            <CaretLeft size={16} color='white' />
          </div>
          <div
            className='size-[30px] border border-zinc-500 rounded flex items-center justify-center cursor-pointer'
            onClick={() => onPageChange(currentPage + 1)}
          >
            <CaretRight size={16} color='white' />
          </div>
          <div
            className='size-[30px] border border-zinc-500 rounded flex items-center justify-center cursor-pointer'
            onClick={() => onPageChange(totalPages)}
          >
            <CaretDoubleRight size={16} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}
