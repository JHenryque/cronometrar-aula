import { UserContext } from "../../service/useCronometro";
import styles from "./Lista.module.css";
import Item from "./item";

function Lista() {
  const { state } = UserContext();
  return (
    <aside className={styles.container}>
      <h2> Estudos do dia </h2>
      <ul className={styles.estudo}>
        {state.tarefas.map((item) => (
          <Item key={item.id} tarefa={item.tarefa} tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
