import styles from './Menu.module.css';
import {Link} from "react-router-dom";
import MenuLink from "../MenuLink";

const Menu = () => {


  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/">
          Início
        </MenuLink>
        <MenuLink to="/about">
          Sobre
        </MenuLink>
      </nav>
    </header>
  );
};

export default Menu;