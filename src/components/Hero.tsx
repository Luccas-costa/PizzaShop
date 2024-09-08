"use client";
import React, { useEffect, useState } from "react";

import Adiconar from "./ui/Adiconar";
import Filters from "./ui/Filters";
import Dashboard from "./ui/Dashboard";
import CardDashboard from "./ui/CardDashboard";
import GraphicDashboard from "./ui/GraphicDashboard";
import GraphicPizzaDashboard from "./ui/GraphicPizzaDashboard";

import { DataInputs } from "@/types/DataInputs";
import { SearchPedidos } from "@/types/SearchPedidos";
import { SearchClientes } from "@/types/SearchClientes";

import { ClienteSearch } from "@/database/clientesSearch";
import { PedidosInsertBD } from "@/database/pedidosInsert";
import { SearchPedidosBD } from "@/database/pedidosSearch";

import { getFormattedDate } from "@/hooks/createData";
import CreateIndentificador from "@/hooks/createIndentificador";

import dayjs from "dayjs";
import debounce from "lodash.debounce";
import { CurrencyDollar, ForkKnife } from "@phosphor-icons/react/dist/ssr";

interface HeroProps {
  chosen: "inicio" | "pedidos" | "adicionar";
  handlerName: (name: string) => void;
}

export default function Hero({ chosen, handlerName }: HeroProps) {
  const [filteredData, setFilteredData] = useState<SearchPedidos[]>([]);
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    status: "",
  });

  const dataInputs = {
    nome_cliente: "",
    valor: "",
  };

  useEffect(() => {
    const fetchData = debounce(async () => {
      try {
        const data = await SearchPedidosBD({
          identificador: filters.id,
          status: filters.status,
        });
        setFilteredData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }, 300); // ajuste o tempo conforme necessário

    fetchData();
    // Limpar o debounce quando o componente desmontar
    return () => fetchData.cancel();
  }, [filters.id, filters.status]);

  useEffect(() => {
    const getRecentOrders = () => {
      const oneMonthAgo = dayjs().subtract(1, "month").startOf("day");
      const oneDayAgo = dayjs().subtract(1, "day").startOf("day");

      // Filtrar os pedidos que são menores que 1 mês
      const resultados = filteredData.filter((pedido) => {
        const pedidoDate = dayjs(pedido.data_pedido, "YYYY/MM/DD/HH:mm:ss");
        return pedidoDate.isAfter(oneMonthAgo);
      });

      // Filtrar os pedidos que são menores que 1 dia
      const resultadosDia = filteredData.filter((pedido) => {
        const pedidoDate = dayjs(pedido.data_pedido, "YYYY/MM/DD/HH:mm:ss");
        return pedidoDate.isAfter(oneDayAgo);
      });

      // Atualizar os estados
      setnumeroPedidosMes(resultados.length);
      setNumeroPedidosDia(resultadosDia.length);
    };

    const calcularValorTotal = () => {
      // Calcular a soma de todos os valores dos pedidos
      const valorTotal = filteredData.reduce((acc, pedido) => {
        // Garantir que o valor é um número
        const valor = parseFloat(String(pedido.valor)); // Converte o valor para string antes de usar parseFloat
        return acc + (isNaN(valor) ? 0 : valor); // Se não for número, considere 0
      }, 0);

      // Formatar o valor total com 2 casas decimais
      const valorTotalFormatado = valorTotal.toFixed(2);

      setReceitaTotal(parseFloat(valorTotalFormatado)); // Converte de volta para número se necessário
    };

    calcularValorTotal();
    getRecentOrders();
  }, [filteredData]); // Dependência adicionada para chamar a função quando filteredData mudar

  const [ReceitaTotal, setReceitaTotal] = useState<number>(0);
  const [numeroPedidosMes, setnumeroPedidosMes] = useState<number>(0);
  const [numeroPedidosDia, setNumeroPedidosDia] = useState<number>(0);

  const [data, setData] = useState<DataInputs>(dataInputs);
  const [isLoading, setIsLoading] = useState(false);

  const handlerUpdateData = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handlerInsertPedido = async () => {
    setIsLoading(true);
    const identificador = CreateIndentificador();
    const datacompra = getFormattedDate();

    const valor = Number(data.valor);

    await PedidosInsertBD({
      identificador: identificador,
      data_pedido: datacompra,
      status: "Pendente",
      nome_cliente: data.nome_cliente,
      valor: valor,
    });

    handlerUpdateData("nome_cliente", "");
    handlerUpdateData("valor", "");
    setIsLoading(false);
  };

  const handleFilterChange = (newFilters: {
    id: string;
    name: string;
    status: string;
  }) => {
    setFilters(newFilters);
  };

  const [MetricaCliente, setMetricaCliente] = useState<SearchClientes[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await ClienteSearch();
        console.log("Dados buscados do banco de dados:", data);
        setMetricaCliente(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchClients();
  }, []);

  // Acessar o primeiro cliente do array, se disponível
  const primeiroCliente = MetricaCliente[0];
  if (primeiroCliente) {
    handlerName(primeiroCliente.nome_estabelecimento || "Erro");
  } else {
    handlerName("Erro");
  }

  return (
    <div className='w-[calc(100%-80px)] h-full flex flex-col'>
      {chosen === "inicio" && (
        <>
          <div className='text-3xl font-semibold text-white'>Dashboard</div>
          <div className='flex space-x-4 mt-3'>
            <CardDashboard
              title='Receitra total (mês)'
              number={ReceitaTotal ? `R$ ${ReceitaTotal}` : "Carregando..."}
              porcentagem='0%'
              color={true}
              description='em relação ao mês passado'
              icon={CurrencyDollar}
            />
            <CardDashboard
              title='Pedidos (mês)'
              number={
                numeroPedidosMes ? numeroPedidosMes.toString() : "Carregando..."
              }
              porcentagem='0%'
              color={true}
              description='em relação ao mês passado'
              icon={ForkKnife}
            />
            <CardDashboard
              title='Pedidos (dia)'
              number={
                numeroPedidosDia ? numeroPedidosDia.toString() : "Carregando..."
              }
              porcentagem='0%'
              color={true}
              description='em relação a ontem'
              icon={ForkKnife}
            />
            <CardDashboard
              title='Cancelamento (mês)'
              number={
                primeiroCliente
                  ? primeiroCliente.numero_cancelamentos
                  : "Carregando..."
              }
              porcentagem='0%'
              color={true}
              description='em relação ao mês passado'
              icon={CurrencyDollar}
            />
          </div>
          <div className='flex space-x-4 mt-4'>
            <GraphicDashboard />
            <GraphicPizzaDashboard />
          </div>
        </>
      )}

      {chosen === "pedidos" && (
        <>
          <div className='text-3xl font-semibold text-white'>Pedidos</div>
          <Filters onFilterChange={handleFilterChange} />
          <Dashboard filters={filters} />
        </>
      )}

      {chosen === "adicionar" && (
        <>
          <div className='text-3xl font-semibold text-white'>Adicionar</div>
          <Adiconar
            data={data}
            isLoading={isLoading}
            handlerUpdateData={handlerUpdateData}
            handlerInsertPedido={handlerInsertPedido}
          />
        </>
      )}
    </div>
  );
}
