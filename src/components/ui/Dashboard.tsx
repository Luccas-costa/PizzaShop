import React, { useState, useEffect } from "react";

import { SearchPedidosBD } from "@/database/pedidosSearch"; // Ajuste o caminho conforme necessário

import DashboardMain from "./DashboardMain";
import DashboardTitle from "./DashboardTitle";
import DashboardPagination from "./DashboardPagination";

import { formatDate } from "@/lib/FomatDate"; // Importa a função de formatação de data
import { SearchPedidos } from "@/types/SearchPedidos";

interface DashboardProps {
  filters: {
    id: string;
    name: string;
    status: string;
  };
}

export default function Dashboard({ filters }: DashboardProps) {
  const [filteredData, setFilteredData] = useState<SearchPedidos[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const itemsPerPage = 11;

  // Fetch data from the server when the component mounts or filters change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SearchPedidosBD({
          identificador: filters.id,
          status: filters.status,
        });
        setFilteredData(data);
        setCurrentPage(1); // Reinicia a página para 1 quando os filtros mudam
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [filters, refresh]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Calcula os itens da página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className='w-full h-[calc(100vh-260px)] border border-zinc-500 rounded-xl flex flex-col'>
        <DashboardTitle />
        <div className='flex flex-col'>
          {currentData.map((pedido, index) => (
            <DashboardMain
              key={pedido.identificador} // Use identificador como chave
              id={pedido.identificador}
              time={formatDate(pedido.data_pedido)} // Usa a função de formatação de data
              status={pedido.status}
              name={pedido.nome_cliente}
              price={pedido.valor.toString()}
              last={
                index === currentData.length - 1 &&
                (startIndex + index) % itemsPerPage === itemsPerPage - 1
              } // Ajusta a lógica para passar `last={true}` apenas para o último item da página
              handlerRefrash={() => setRefresh(!refresh)}
            />
          ))}
        </div>
      </div>
      <DashboardPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredData.length}
        onPageChange={handlePageChange}
      />
    </>
  );
}
