import Formulario from "../components/Fomulario";
import Lista from "../components/Lista";
import styles from "./App.module.css";
import Cronomentro from "../components/Cronometro";

function AppWeb() {
  return (
    <>
      <main className={styles.container}>
        <Formulario />
        <Lista />
        <Cronomentro />
      </main>
    </>
  );
}

export default AppWeb;
