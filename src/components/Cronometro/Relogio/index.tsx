import { UserContext } from "../../../service/useCronometro";
import styles from "./Relogio.module.css";

export default function Relogio() {
  const { state } = UserContext();

  const result = state.tarefas.find((item) => item.selecionado);

  console.log(result);

  return (
    <>
      {state.tarefas.find((item) => item.selecionado) ? (
        <span className={styles.relogio_dig}>
          {state.tarefas.find((item) => item.selecionado)?.tempo}
        </span>
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
