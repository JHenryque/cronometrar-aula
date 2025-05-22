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
  const { dispatch } = UserContext();

  function clickremove(id: string) {
    if (window.confirm("Deseja remover?")) {
      dispatch({
        type: "setRemoveCard",
        payload: id,
      });
    }
    handleReload();
  }

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <li
      className={styles.listas + " " + (!selecionado ? "" : styles.active)}
      onClick={hendlerSelectTask}
    >
      <div onClick={() => clickremove(id)}>
        <p className={styles.close}>X</p>
      </div>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
