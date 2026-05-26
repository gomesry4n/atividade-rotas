import styles from "./CardProduto.module.css";

const CardProduto = ({ imagem, titulo, descricao }) => {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} />

      <h2>{titulo}</h2>

      <p>{descricao}</p>
    </div>
  );
};

export default CardProduto;
