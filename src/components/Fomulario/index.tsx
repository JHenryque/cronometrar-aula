import { useState } from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.css";
import { UserContext } from "../../service/useCronometro";

function Formulario() {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("");
  const [msg, setMsg] = useState("");

  const { state, dispatch } = UserContext();

  console.log(state.tarefas);

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!tarefa || !tempo) {
      setMsg("Preencha os campos!*");
      return;
    } else {
      const newTarefa = {
        id: String(Date.now()),
        tarefa: tarefa,
        tempo: tempo,
        selecionado: false,
        completado: false,
      };
      dispatch({
        type: "setTarefas",
        payload: newTarefa,
      });

      setTarefa("");
      setTempo("");
      setMsg("");
      dispatch({ type: "setStatus", payload: "fecthing" });
    }
    dispatch({ type: "setStatus", payload: "ready" });
  }
  return (
    <form className={styles.formulario} onSubmit={handlerSubmit}>
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          className="tafera"
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          id="tafera"
          placeholder="O que você quer estudar"
        />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="02:30:00"
        />
      </div>
      <div>
        <p className={msg ? styles.msg_error : ""}>{msg}</p>
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
