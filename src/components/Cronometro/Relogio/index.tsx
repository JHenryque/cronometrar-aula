/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { UserContext } from "../../../service/useCronometro";
import styles from "./Relogio.module.css";
import somAlarm from "../../../assets/sound-alerte.mp3"; // form "asd"

export default function Relogio({
  isRunning,
  setIsRunning,
  setIsStoped,
  audioRef,
}: {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStoped: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const { state } = UserContext();
  const tempo = state.tarefas.find((t) => t.selecionado);

  const [segundosRestantes, setSegundosRestantes] = useState(0);

  useEffect(() => {
    if (tempo) {
      const [horas, minutos, segundos] = tempo.tempo.split(":").map(Number);
      setSegundosRestantes(horas * 3600 + minutos * 60 + segundos);
    }
  }, [tempo]);

  useEffect(() => {
    let intervalo = 0;

    if (segundosRestantes <= 0) {
      audioRef.current?.play();

      setIsRunning(false);

      if (audioRef.current?.play()) {
        setIsStoped(true);
      }

      return () => clearInterval(intervalo);
    }

    if (isRunning) {
      intervalo = setInterval(() => {
        setSegundosRestantes((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [segundosRestantes, isRunning]);

  const formatarTempo = (totalSegundos: number) => {
    const h = String(Math.floor(totalSegundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, "0");
    const s = String(totalSegundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const tempoFormatado = formatarTempo(segundosRestantes);

  return (
    <>
      {state.tarefas.find((item) => item.selecionado) ? (
        state.tarefas.map((itens) =>
          itens.selecionado ? (
            <div key={itens.id}>
              <span className={styles.relogio_dig}>{tempoFormatado[0]}</span>
              <span className={styles.relogio_dig}>{tempoFormatado[1]}</span>
              <span className={styles.dois_ponto}>:</span>
              <span className={styles.relogio_dig}>{tempoFormatado[3]}</span>
              <span className={styles.relogio_dig}>{tempoFormatado[4]}</span>
              <span className={styles.dois_ponto}>:</span>
              <span className={styles.relogio_dig}>{tempoFormatado[6]}</span>
              <span className={styles.relogio_dig}>{tempoFormatado[7]}</span>
              <audio ref={audioRef} src={somAlarm} preload="auto" />
            </div>
          ) : (
            ""
          )
        )
      ) : (
        <>
          <span className={styles.relogio_dig}>0</span>
          <span className={styles.relogio_dig}>0</span>
          <span className={styles.dois_ponto}>:</span>
          <span className={styles.relogio_dig}>0</span>
          <span className={styles.relogio_dig}>0</span>
          <span className={styles.dois_ponto}>:</span>
          <span className={styles.relogio_dig}>0</span>
          <span className={styles.relogio_dig}>0</span>
        </>
      )}
    </>
  );
}
