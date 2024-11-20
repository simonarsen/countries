import { IDropdown } from "@/constants/types";
import styles from "./Dropdown.module.css";

export const Dropdown: React.FC<IDropdown> = ({ search, Component }) => {
  return (
    <div className={styles.searchDropDownBlock}>
      {search.map((c) => (
        <div className={styles.searchDropDownItem}>
          <Component c={c} isFullWidth={true} />
        </div>
      ))}
    </div>
  );
};
