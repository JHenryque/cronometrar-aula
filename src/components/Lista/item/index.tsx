import { UserContext } from "../../../service/useCronometro";
import styles from "../Lista.module.css";

interface Props {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  hendlerSelectTask: () => void;
}

export default function Item({
  id,
  tarefa,
  tempo,
  selecionado,
  hendlerSelectTask,
}: Props) {
  const { state, dispatch } = UserContext();

  function clickremove(id: string) {
    if (window.confirm("Deseja remover?")) {
      dispatch({
        type: "setRemoveCard",
        payload: id,
      });
    }
  }

  return (
    <li
      className={styles.listas + " " + (!selecionado ? "" : styles.active)}
      onClick={hendlerSelectTask}
    >
      {state.tarefas.some((item) =>
        item.selecionado ? (item.id === id ? true : false) : false
      ) ? (
        <div onClick={() => clickremove(id)}>
          <p className={styles.close}>X</p>
        </div>
      ) : (
        ""
      )}
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
