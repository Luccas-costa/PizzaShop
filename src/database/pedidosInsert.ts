"use server";

import { sql } from "@vercel/postgres";

export async function PedidosInsertBD({
  identificador,
  data_pedido,
  status,
  nome_cliente,
  valor,
}: {
  identificador: string;
  data_pedido: string;
  status: string;
  nome_cliente: string;
  valor: number;
}) {
  try {
    console.log("Enviando dados para o banco de dados...");
    await sql`INSERT INTO pizza_shop_pedidos (identificador, nome_cliente, status, data_pedido, valor) VALUES (${identificador}, ${nome_cliente}, ${status}, ${data_pedido}, ${valor})`;
    console.log("Enviado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
