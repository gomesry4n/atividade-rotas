import styles from "./SalaRotacao.module.css";

import CardProduto from "../../componentes/CardProduto/CardProduto";

const SalaRotacao = () => {
  return (
    <section className={styles.container}>
      <CardProduto
        imagem="https://images.unsplash.com/photo-1543508282-6319a3e2621f"
        titulo="Nike Air Force"
        descricao="Estilo urbano premium."
      />

      <CardProduto
        imagem="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        titulo="Jordan Retro"
        descricao="Modelo exclusivo importado."
      />

      <CardProduto
        imagem="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
        titulo="Adidas Campus"
        descricao="Conforto e autenticidade."
      />
    </section>
  );
};

export default SalaRotacao;
