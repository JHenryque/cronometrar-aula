import Formulario from "../components/Fomulario";
import Lista from "../components/Lista";
import styles from "./App.module.css";
import Cronomentro from "../components/Cronometro";
import { useState } from "react";
import { UserContext } from "../service/useCronometro";

function AppWeb() {
  const { state } = UserContext();
  const [isRunning, setIsRunning] = useState(false);

  if (state.status === "fecthing") return <h2>Carregando...</h2>;

  return (
    <>
      <main className={styles.container}>
        <Formulario />
        <Lista setIsRunning={setIsRunning} />
        <Cronomentro isRunning={isRunning} setIsRunning={setIsRunning} />
      </main>
    </>
  );
}

export default AppWeb;
