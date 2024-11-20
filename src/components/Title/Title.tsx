import { ITitle } from "@/constants/types";
import styles from "./Title.module.css";

export const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <div className={styles.titleBlock}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
