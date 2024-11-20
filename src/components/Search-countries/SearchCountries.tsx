"use client";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchCountries.module.css";
import { useEffect, useMemo, useState } from "react";
import { ISearchCountries } from "@/constants/types";
import { Country } from "../Country/Country";
import { Dropdown } from "../Dropdown/Dropdown";
import { handleSearch } from "@/helpers";

export const SearchCountries: React.FC<ISearchCountries> = ({ countries }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const searchCountries = useMemo(() => {
    return countries.filter((c) =>
      handleSearch(debouncedSearchValue, [c.iso, c.country])
    );
  }, [debouncedSearchValue, countries]);

  return (
    <div className={styles.searchCountries}>
      <CiSearch className={styles.searchIcon} />
      <input
        value={searchValue}
        type="text"
        className={styles.searchCountry}
        placeholder="Найти направление"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {debouncedSearchValue && searchCountries.length > 0 && (
        <Dropdown search={searchCountries} Component={Country} />
      )}
    </div>
  );
};
