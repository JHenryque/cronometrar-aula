import { UserContext } from "../../service/useCronometro";
import Botao from "../Botao";
import CronometroRegressivo from "../CronometroRegressivo";
import styles from "./Cronometro.module.css";
import Relogio from "./Relogio";

export default function Cronomentro() {
  const { state } = UserContext();

  return (
    <div className={styles.cronometro}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={styles.cronometrowrape}>
        <Relogio />
        <CronometroRegressivo />
      </div>
      <Botao>{state.button}</Botao>
    </div>
  );
}
