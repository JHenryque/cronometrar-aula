import { useEffect, useState } from "react";

export default function CronometroRegressivo() {
  const [tempoRestante, setTempoRestante] = useState(1 * 50 * 60); // 2 horas em segundos
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalo = 0;

    if (isRunning) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
      if (tempoRestante <= 0) return;
    }
    return () => clearInterval(intervalo);
  }, [tempoRestante, isRunning]);

  function comercarCronometro() {
    setIsRunning(true);
  }

  function pararCronometro() {
    setIsRunning(false);
  }

  const formatarTempo = (segundos: number): string => {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const segundosRestantes = String(segundos % 60).padStart(2, "0");
    return `${horas}:${minutos}:${segundosRestantes}`;
  };

  return (
    <div style={{ fontSize: "48px", fontFamily: "Arial, sans-serif" }}>
      {formatarTempo(tempoRestante)}
      <button onClick={isRunning ? pararCronometro : comercarCronometro}>
        {isRunning ? "Parar" : "Iniciar"}
      </button>
    </div>
  );
}
