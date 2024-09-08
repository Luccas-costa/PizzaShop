"use server";

import { sql } from "@vercel/postgres";

// Função para apagar um registro da tabela bdimages com base no id
export async function PedidosDelete(identificador: string): Promise<void> {
  try {
    await sql`DELETE FROM pizza_shop_pedidos WHERE identificador = ${identificador}`;
    console.log("Senha apagada com sucesso!");
  } catch (error) {
    console.log("Erro ao apagar Senha do banco de dados:", error);
    throw new Error("Erro ao apagar Senha do banco de dados");
  }
}
