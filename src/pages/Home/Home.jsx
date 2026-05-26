import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <h2>Sobre a RG Imports</h2>

        <p>
          Trabalhamos com os melhores tênis importados do mercado, trazendo
          estilo e autenticidade para nossos clientes.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
        alt="Tênis"
      />
    </section>
  );
};

export default Home;
