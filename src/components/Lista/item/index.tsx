import styles from "../Lista.module.css";

interface Props {
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  hendlerSelectTask: () => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  hendlerSelectTask,
}: Props) {
  console.log(selecionado);

  return (
    <li
      className={styles.listas + " " + (!selecionado ? "" : styles.active)}
      onClick={hendlerSelectTask}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
