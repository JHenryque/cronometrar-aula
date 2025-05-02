import { UserContext } from "../../service/useCronometro";
import Botao from "../Botao";
import styles from "./Cronometro.module.css";
import Relogio from "./Relogio";

export default function Cronomentro() {
  const { state } = UserContext();

  return (
    <div className={styles.cronometro}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={styles.cronometrowrape}>
        <Relogio />
      </div>
      <Botao>{state.button}</Botao>
    </div>
  );
}
