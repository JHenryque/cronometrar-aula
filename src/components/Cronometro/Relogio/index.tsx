import { useState } from "react";
import { UserContext } from "../../../service/useCronometro";
import styles from "./Relogio.module.css";

export default function Relogio() {
  const { state } = UserContext();
  const tempo1 = state.tarefas.find((item) => item.selecionado)?.tempo; // parseInt(item.tempo.slice(1, 2)) *

  const converterTempoParaSegundos = (tempo: string | any): number => {
    const [horas, minutos, segundos] = tempo.split(":").map(Number);
    return horas * 3600 + minutos * 60 + segundos;
  };

  const tempo = "02:00:00";
  const totalSegundos = converterTempoParaSegundos(tempo);

  //console.log(tempoStudo);

  return (
    <>
      {state.tarefas.find((item) => item.selecionado) ? (
        state.tarefas.map((itens) =>
          itens.selecionado ? (
            <>
              <span className={styles.relogio_dig}>{itens.tempo[0]}</span>
              <span className={styles.relogio_dig}>{itens.tempo[1]}</span>
              <span className={styles.dois_ponto}>:</span>
              <span className={styles.relogio_dig}>{itens.tempo[3]}</span>
              <span className={styles.relogio_dig}>{itens.tempo[4]}</span>
              <span className={styles.dois_ponto}>:</span>
              <span className={styles.relogio_dig}>{itens.tempo[6]}</span>
              <span className={styles.relogio_dig}>{itens.tempo[7]}</span>
            </>
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
