"use server";

import { sql } from "@vercel/postgres";

export async function PedidosUpdateStatusBD(id: string, status: string) {
  try {
    console.log("Atualizando status no banco de dados...");
    await sql`
      UPDATE pizza_shop_pedidos
      SET status = ${status}
      WHERE identificador = ${id}
    `;
    console.log(id);
    console.log(status);
    console.log("Status atualizado com sucesso!");
  } catch (error) {
    console.log("Erro ao atualizar status:", error);
  }
}
