import styles from "./Botao.module.css";

function Botao({
  children,
  type,
  handlerSubmit,
}: {
  children: React.ReactElement | string;
  type?: "button" | "submit" | "reset" | undefined;
  handlerSubmit?: () => void;
}) {
  return (
    <button onClick={handlerSubmit} type={type} className={styles.botao}>
      {children}
    </button>
  );
}

export default Botao;
