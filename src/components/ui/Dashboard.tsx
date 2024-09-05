import React, { useState, useEffect } from "react";

import { userData } from "@/data/UserData";
import DashboardMain from "./DashboardMain";
import DashboardTitle from "./DashboardTitle";
import DashboardPagination from "./DashboardPagination";

interface DashboardProps {
  filters: {
    id: string;
    name: string;
    status: string;
  };
}

export default function Dashboard({ filters }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const [filteredData, setFilteredData] = useState(userData);

  useEffect(() => {
    // Aplica os filtros
    const newFilteredData = userData.filter((user) => {
      const matchesId = filters.id
        ? user.id.toString().includes(filters.id)
        : true;
      const matchesName = filters.name
        ? user.name.toLowerCase().includes(filters.name.toLowerCase())
        : true;
      const matchesStatus = filters.status
        ? user.status === filters.status
        : true;
      return matchesId && matchesName && matchesStatus;
    });

    setFilteredData(newFilteredData);
    setCurrentPage(1); // Reinicia a página para 1 quando os filtros mudam
  }, [filters]);

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
          {currentData.map((user, index) => (
            <DashboardMain
              key={user.id}
              id={user.id}
              time={user.time}
              status={user.status}
              name={user.name}
              price={user.price}
              last={
                index === currentData.length - 1 &&
                (startIndex + index) % itemsPerPage === itemsPerPage - 1
              } // Ajusta a lógica para passar `last={true}` apenas para o último item da página
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
