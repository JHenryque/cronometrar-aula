import styles from "./Cronometro.module.css";
import Relogio from "./Relogio";
import Botao from "../Botao";

export default function Cronomentro({
  isRunning,
  setIsRunning,
}: {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.cronometro}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={styles.cronometrowrape}>
        <Relogio isRunning={isRunning} setIsRunning={setIsRunning} />
      </div>
      <Botao type="button" handlerSubmit={() => setIsRunning(!isRunning)}>
        {isRunning ? "Parar" : "Comecar"}
      </Botao>
    </div>
  );
}
