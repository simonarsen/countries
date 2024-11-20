export type CountriesProps = {
  countries: ICountryData[];
  defaultCountries: ICountryData[];
};

export type CountryProps = {
  c: ICountryData;
  isFullWidth?: boolean;
};

export type OperatorItemProps = {
  operatorName: string;
};

export type OperatorsListProps = {
  operators: IOperator[];
};

export interface ITitle {
  title: string;
}

export interface ICountryData {
  iso: string;
  country: string;
  id: string;
  cost_per_day: string;
  url: string;
  price: {
    symbol: string;
  };
  operators: IOperator[];
}

export interface ISearchCountries {
  countries: ICountryData[];
}

export interface IDropdown {
  search: ICountryData[];
  Component: React.ComponentType<CountryProps>;
}

export interface IOperator {
  phone_view: string;
}
