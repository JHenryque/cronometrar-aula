import { UserContext } from "../../../service/useCronometro";
import styles from "./Relogio.module.css";

export default function Relogio() {
  const { state } = UserContext();

  return (
    <>
      {state.tarefas.find((item) => item.selecionado) ? (
        state.tarefas.map((item) =>
          item.selecionado ? (
            <>
              <span className={styles.relogio_dig}>{item.tempo[0]}</span>
              <span className={styles.relogio_dig}>{item.tempo[1]}</span>
              <span className={styles.dois_ponto}>:</span>
              <span className={styles.relogio_dig}>{item.tempo[3]}</span>
              <span className={styles.relogio_dig}>{item.tempo[4]}</span>
              <span className={styles.dois_ponto}>:</span>
              <span className={styles.relogio_dig}>{item.tempo[6]}</span>
              <span className={styles.relogio_dig}>{item.tempo[7]}</span>
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
