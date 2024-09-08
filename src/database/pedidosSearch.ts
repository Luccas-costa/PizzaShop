"use server";

import { sql } from "@vercel/postgres";
import { SearchPedidos } from "@/types/SearchPedidos";

// Função para buscar registros na tabela pizza_shop_pedidos
export async function SearchPedidosBD({
  identificador,
  status,
}: {
  identificador?: string;
  status?: string;
}): Promise<SearchPedidos[]> {
  try {
    let query = sql`SELECT * FROM pizza_shop_pedidos`;
    const queryParams: any[] = [];

    if (identificador) {
      query = sql`SELECT * FROM pizza_shop_pedidos WHERE identificador = ${identificador}`;
    } else if (status) {
      query = sql`SELECT * FROM pizza_shop_pedidos WHERE status = ${status}`;
    }

    const result = await query;
    const pedidos: SearchPedidos[] = result.rows.map((row) => ({
      identificador: row.identificador,
      data_pedido: row.data_pedido,
      status: row.status,
      nome_cliente: row.nome_cliente,
      valor: row.valor,
    }));
    return pedidos;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao buscar dados do banco de dados");
  }
}
