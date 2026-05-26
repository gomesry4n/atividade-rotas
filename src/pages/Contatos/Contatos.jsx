import styles from "./Contatos.module.css";

const Contatos = () => {
  return (
    <section className={styles.contato}>
      <h2>Entre em contato</h2>

      <form className={styles.formulario}>
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu email" />
        <input type="text" placeholder="Digite sua Mensagem" />

        <button>Enviar</button>
      </form>
    </section>
  );
};

export default Contatos;
