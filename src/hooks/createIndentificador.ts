export default function CreateIndentificador(length: number = 24): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let indentificador = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    indentificador += characters[randomIndex];
  }
  return indentificador;
}
