import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export const formatDate = (date: string | null) => {
  if (!date) return "";
  return dayjs(date).fromNow(true); // Formata a data como relativo a partir de agora
};
