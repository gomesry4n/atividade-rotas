import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <p>RG IMPORTS</p>
      <p>Desenvolvido por Ryan Gomes</p>
      <a href="https://github.com/gomesry4n" target="_blank">
        GitHub
      </a>
    </footer>
  );
};

export default Rodape;
