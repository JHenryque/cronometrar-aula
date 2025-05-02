import styles from "../Lista.module.css";

export default function Item({
  tarefa,
  tempo,
}: {
  tarefa: string;
  tempo: string;
}) {
  return (
    <li className={styles.listas}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
