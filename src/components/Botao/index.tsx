import { UserContext } from "../../service/useCronometro";
import styles from "./Botao.module.css";

function Botao({ type }: { type?: "button" | "submit" | "reset" | undefined }) {
  const { state } = UserContext();

  return (
    <button type={type} className={styles.botao}>
      {state.button}
    </button>
  );
}

export default Botao;
