import styles from "./Botao.module.css";

function Botao({
  children,
  type,
}: {
  children: React.ReactElement | string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button type={type} className={styles.botao}>
      {children}
    </button>
  );
}

export default Botao;
