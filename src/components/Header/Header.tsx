"use client";
import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Nav-bar/Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisible = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
        <Navbar />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerButtons}>
          <button onClick={handleChangeVisible} className={styles.langBtn}>
            ENG <MdKeyboardArrowDown size={12} />
          </button>
          <button className={styles.authBtn}>Войти</button>
        </div>
        {isVisible && (
          <div className={styles.langs}>
            <div className={styles.langItem}>ENG</div>
            <div className={styles.langItem}>РУС</div>
          </div>
        )}
      </div>
    </header>
  );
};
