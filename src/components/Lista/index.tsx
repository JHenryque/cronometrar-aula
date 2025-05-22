import { UserContext } from "../../service/useCronometro";
import styles from "./Lista.module.css";
import Item from "./item";

function Lista() {
  const { state, dispatch } = UserContext();

  function hendlerSelectTask(id: string) {
    const indf = state.tarefas.findIndex((item) => item.id === id);
    const idl = state.tarefas.map((item) => item.id)[indf];

    const newBoolean = {
      id: idl,
      selecionado: true,
    };

    dispatch({
      type: "setSelected",
      payload: newBoolean,
    });
  }

  if (state.status === "fecthing") return <h2>Carregando...</h2>;

  return (
    <aside className={styles.container}>
      <h2> Estudos do dia </h2>
      {state.tarefas.length > 0 ? (
        <ul className={styles.estudo}>
          {state.tarefas.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              tarefa={item.tarefa}
              tempo={item.tempo}
              selecionado={item.selecionado}
              hendlerSelectTask={() => hendlerSelectTask(item.id)}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa cadastrada</p>
      )}
    </aside>
  );
}

export default Lista;
