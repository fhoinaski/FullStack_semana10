import { useState } from "react";

export function useForm() {
  const [passoAtual, setPassoAtual] = useState(0);

  function mudarPasso(passo, evento) {
    evento.preventDefault();
    setPassoAtual(passo);
  }

  return {
    passoAtual,
    mudarPasso,
  };
}
