import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.css";
import Image from "next/image";
import appStore from "../../assets/app-store.png";
import playMarket from "../../assets/play-market.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLogoBlock}>
          <Logo />
        </div>
        <div className={styles.footerStoreBlock}>
          <div className={styles.footerStore}>
            <Image
              className={styles.footerStoreImg}
              src={appStore}
              alt="appStore"
            />
          </div>
          <div className={styles.footerStore}>
            <Image
              className={styles.footerStoreImg}
              src={playMarket}
              alt="playMarket"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerSubTitleBlock}>
          <p className={styles.footerSubTitle}>Заголовок</p>
          <p className={styles.footerLink}>Ссылка</p>
          <p className={styles.footerLink}>Ссылка</p>
          <p className={styles.footerLink}>Ссылка</p>
        </div>
        <div className={styles.footerSubTitleBlock}>
          <p className={styles.footerSubTitle}>Заголовок</p>
          <p className={styles.footerLink}>Ссылка</p>
          <p className={styles.footerLink}>Ссылка</p>
          <p className={styles.footerLink}>Ссылка</p>
        </div>
        <div className={styles.footerSubTitleBlock}>
          <p className={styles.footerSubTitle}>Заголовок</p>
          <p className={styles.footerLink}>Ссылка</p>
          <p className={styles.footerLink}>Ссылка</p>
          <p className={styles.footerLink}>Ссылка</p>
        </div>
      </div>
    </footer>
  );
};
