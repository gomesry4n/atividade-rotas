import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div>
        <h1>RG IMPORTS</h1>

        <p>Os melhores sneakers importados</p>

        <button>Ver Produtos</button>
      </div>
    </section>
  );
};

export default Banner;
