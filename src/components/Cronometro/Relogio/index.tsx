import { UserContext } from "../../../service/useCronometro";
import styles from "./Relogio.module.css";

export default function Relogio() {
  const { state } = UserContext();

  return (
    <>
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
    </>
  );
}
