import styles from "../Lista.module.css";

export default function Item({
  tarefa,
  tempo,
  selecionado,
}: {
  tarefa: string;
  tempo: string;
  selecionado: boolean;
}) {
  console.log(selecionado);

  return (
    <li
      className={
        styles.listas + " " + (selecionado === true ? "" : styles.active)
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
