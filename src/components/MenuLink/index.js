import styles from './MenuLink.module.css';
import {Link, useLocation} from "react-router-dom";

const MenuLink = ({children, to}) => {
  const localization = useLocation();

  return (
    <Link className={`
        ${styles.link}
        ${localization.pathname === to ? styles.linkHighlighted : ''}
        `} to={to}>
      {children}
    </Link>
  );
};

export default MenuLink;