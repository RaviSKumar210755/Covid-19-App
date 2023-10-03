import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  // console.log(countries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((ct) => (
          <option key={ct.country} value={ct.country}>
            {ct.country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
