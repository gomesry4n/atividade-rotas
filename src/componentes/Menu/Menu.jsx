import styles from "./Menu.module.css";

import MenuLink from "../MenuLink/MenuLink";

const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>RG IMPORTS</div>

      <nav className={styles.navegacao}>
        <MenuLink to="/">Home</MenuLink>

        <MenuLink to="/sala-rotacao">Produtos</MenuLink>

        <MenuLink to="/contatos">Contatos</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
