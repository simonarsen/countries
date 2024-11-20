"use client";
import { useState } from "react";
import styles from "./Countries.module.css";
import { CountriesProps } from "@/constants/types";
import { Country } from "../Country/Country";

export const Countries: React.FC<CountriesProps> = ({
  countries,
  defaultCountries,
}) => {
  const [showAllCountries, setShowAllCountries] = useState(false);

  const handleChangeCountriesList = () => {
    setShowAllCountries((prev) => !prev);
  };
  return (
    <div className={styles.countriesBlock}>
      <div className={styles.countries}>
        <h2 className={styles.countriesTitle}>Популярные страны</h2>
        {(showAllCountries ? countries : defaultCountries).map((c) => (
          <Country c={c} />
        ))}
        <button
          onClick={handleChangeCountriesList}
          className={styles.countryBtn}
        >
          {showAllCountries ? "Скрыть полный список" : "Показать все страны"}
        </button>
      </div>
    </div>
  );
};
