"use server";

import { sql } from "@vercel/postgres";

export async function ClienteUpdateCancelamentoBD() {
  try {
    console.log("Atualizando número de cancelamentos no banco de dados...");
    await sql`
      UPDATE pizza_shop_cliente
      SET numero_cancelamentos = numero_cancelamentos + 1;
    `;
    console.log("Número de cancelamentos atualizado com sucesso!");
  } catch (error) {
    console.log("Erro ao atualizar número de cancelamentos:", error);
  }
}
