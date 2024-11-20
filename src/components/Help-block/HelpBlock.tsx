import { helpBlockItems } from "@/constants";
import styles from "./HelpBlock.module.css";

export const HelpBlock = () => {
  return (
    <div className={styles.helpBlockWrapper}>
      <h2>Как это работает</h2>
      <div className={styles.helpBlock}>
        {helpBlockItems.map((item) => (
          <div key={item.id} className={styles.helpBlockItem}>
            <p className={styles.helpBlockItemTitle}>{item.title}</p>
            <div className={styles.helpBlockItemContent}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
