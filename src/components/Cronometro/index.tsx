import styles from "./Cronometro.module.css";
import Relogio from "./Relogio";
import Botao from "../Botao";
import { useRef, useState } from "react";
import { UserContext } from "../../service/useCronometro";

export default function Cronomentro({
  isRunning,
  setIsRunning,
}: {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { state, dispatch } = UserContext();
  const [isStoped, setIsStoped] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function stopMusica() {
    audioRef.current?.pause();
    setIsStoped(false);
    dispatch({
      type: "setSelected",
      payload: false,
    });
  }

  return (
    <div className={styles.cronometro}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={styles.cronometrowrape}>
        <Relogio
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setIsStoped={setIsStoped}
          audioRef={audioRef}
        />
      </div>

      <div className={styles.botoes}>
        <Botao type="button" handlerSubmit={() => setIsRunning(!isRunning)}>
          {isRunning ? "Parar" : "Começar!"}
        </Botao>

        {isStoped === true ? (
          <Botao type="button" handlerSubmit={stopMusica}>
            Stop
          </Botao>
        ) : (
          ""
        )}
      </div>
      <p>
        {!state.tarefas.some((item) => item.selecionado)
          ? "Clicke no Card para iniciar"
          : ""}
      </p>
    </div>
  );
}
