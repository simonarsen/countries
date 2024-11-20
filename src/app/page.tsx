import styles from "./page.module.css";
import { Main } from "@/components/Main/Main";

export default async function App() {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
}
