"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flags from "../../assets/flags";
import styles from "./Country.module.css";
import { CountryProps } from "@/constants/types";
import { useRouter } from "next/navigation";

export const Country: React.FC<CountryProps> = ({ c, isFullWidth }) => {
  const FlagComponent = Flags[c.iso];
  const router = useRouter();

  const handleRedirect = () => {
    router.push(c.url);
  };

  return (
    <div
      key={c.id}
      className={`${styles.country} ${
        isFullWidth ? styles.countryWithFullWidth : styles.countryWithHalfWidth
      }`}
      onClick={handleRedirect}
    >
      <div className={styles.coutryInfo}>
        <div
          className={`${styles.countryFlag} ${
            isFullWidth
              ? styles.countryFlagWithFullWidth
              : styles.countryFlagWithHalfWidth
          }`}
        >
          <FlagComponent className={styles.countrySvg} />
        </div>
        <div className={styles.countryTitle}>
          <p>{c.country}</p>
          <p className={styles.countrySubtitle}>
            от {c.price.symbol}
            {c.cost_per_day}/GB
          </p>
        </div>
      </div>
      <div className={styles.coutryIcon}>
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
  );
};
