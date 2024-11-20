import styles from "./Navbar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navListItems}>
        <li className={`${styles.navListItem} ${styles.navListItemActive}`}>
          Ссылка
        </li>
        <li className={styles.navListItem}>Ссылка</li>
        <li className={styles.navListItem}>Ссылка</li>
        <li className={styles.navListItem}>
          Выпадающий список <MdKeyboardArrowDown size={12} />
        </li>
      </ul>
    </nav>
  );
};
