import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchData = async (country) => {
  let changeurl = url;
  if (country) changeurl = `${url}/countries/${country}`;
  else changeurl = `${url}/all`;
  try {
    const {
      data: { cases, recovered, deaths, active },
    } = await axios.get(changeurl);
    console.log(cases);
    return { cases, recovered, deaths, active };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { cases, recovered, deaths, active },
    } = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );

    // console.log(lastDate);
    return { cases, recovered, deaths, active };
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries/"
    );
    return data;
  } catch (error) {
    return error;
  }
};
