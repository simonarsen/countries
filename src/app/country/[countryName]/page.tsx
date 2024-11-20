import { HelpBlock } from "@/components/Help-block/HelpBlock";
import styles from "./page.module.css";
import { ICountryData } from "@/constants/types";
import axios from "axios";
import { COUNTRIES_URL } from "@/constants";
import Flags from "../../../assets/flags";
import { OperatorsList } from "@/components/OperatorsList/OperatorsList";

export default async function Country({
  params,
}: {
  params: { countryName: string };
}) {
  const { data }: { data: [countries: ICountryData[]] } = await axios.get(
    COUNTRIES_URL
  );
  const [countries] = data;
  const country = countries.find(
    (c) => c.country.split(" ").join("-").toLowerCase() === params.countryName
  );
  const FlagComponent = Flags[country!.iso];
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.leftBlock}>
            <h2>{country?.country}</h2>
            <p>Туристические SIM-карты с интернетом</p>
          </div>
          <div className={styles.rightBlock}>
            <FlagComponent className={styles.countrySvg} />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.leftSide}>
            <h3>Страны и операторы</h3>
            <div className={styles.svgBlock}>
              <FlagComponent className={styles.countrySvg} />
              <p className={styles.countryTitle}>{country?.country}</p>
            </div>
          </div>
          <OperatorsList operators={country!.operators} />
        </div>
        <HelpBlock />
      </div>
    </div>
  );
}
