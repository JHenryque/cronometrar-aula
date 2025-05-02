import Botao from "../Botao";
import styles from "./Formulario.module.css";

function Formulario() {
  return (
    <form className={styles.formulario}>
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          className="tafera"
          type="text"
          name="tarefa"
          id="tafera"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="02:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
