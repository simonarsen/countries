import styles from "./Main.module.css";
import axios from "axios";
import { COUNTRIES_CONTENT_TITLE, COUNTRIES_URL } from "@/constants";
import { HelpBlock } from "@/components/Help-block/HelpBlock";
import { SearchCountries } from "@/components/Search-countries/SearchCountries";
import { Title } from "@/components/Title/Title";
import { Countries } from "@/components/Countries/Countries";
import { ICountryData } from "@/constants/types";

export const Main = async () => {
  const { data }: { data: [countries: ICountryData[]] } = await axios.get(
    COUNTRIES_URL
  );

  const [countries] = data;

  return (
    <div className={styles.wrapper}>
      <Title title={COUNTRIES_CONTENT_TITLE} />
      <SearchCountries countries={countries} />
      <Countries
        countries={countries}
        defaultCountries={countries.slice(0, 12)}
      />
      <HelpBlock />
    </div>
  );
};
