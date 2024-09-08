"use server";

import { sql } from "@vercel/postgres";
import { SearchClientes } from "@/types/SearchClientes";

// Função para buscar todos os registros da tabela ClientesC
export async function ClienteSearch(): Promise<SearchClientes[]> {
  try {
    const result = await sql`SELECT * FROM pizza_shop_cliente`;
    const metricasCliente: SearchClientes[] = result.rows.map((row) => ({
      id: row.id,
      nome_estabelecimento: row.nome_estabelecimento,
      receita_total: row.receita_total,
      numero_pedidos: row.numero_pedidos,
      numero_cancelamentos: row.numero_cancelamentos,
    }));
    return metricasCliente;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao buscar dados do banco de dados");
  }
}
