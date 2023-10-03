import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

export default function App({ data: { cases, recovered, deaths }, country }) {
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const result = await fetchDailyData();
        if (isMounted) {
          setDailyData(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Cleanup function to handle unmounting
    return () => {
      isMounted = false;
    };
  }, []);

  const c = dailyData?.cases;
  const r = dailyData?.recovered;
  const d = dailyData?.deaths;
  console.log(cases);
  console.log(recovered);
  console.log(deaths);
  let dates, casesData, deathsData, recovereData;
  if (c && typeof c === "object") {
    dates = Object.keys(c);
    casesData = Object.values(c);
    deathsData = Object.values(d);
    recovereData = Object.values(r);
  }

  const data = {
    labels: dates,

    datasets: [
      {
        data: casesData,
        label: "Infected",
        borderColor: "#FFBF00",
        fill: true,
        backgroundColor: "#FFFF8F",
        tension: 0.4,
      },
      {
        data: deathsData,
        label: "Deaths",
        fill: true,
        borderColor: "#EE4B2B",
        backgroundColor: "rgb(210, 4, 45, 0.2)",
        tension: 0.4,
      },
      {
        data: recovereData,
        label: "Recovered",
        fill: true,
        borderColor: "#0FFF50",
        backgroundColor: "#a1ffa1",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugin: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        // max:6
      },
    },
  };

  const bdata = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "People",
        backgroundColor: [
          "rgb(255, 191, 0,0.5)",
          "rgba(0, 255, 0, 0.5)",
          "rgba(255, 0, 0, 0.5)",
        ],
        data: [cases, recovered, deaths],
      },
    ],
  };

  const boptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: `Current state in ${country}`,
    },
  };

  return (
    <div className={styles.container}>
      {country ? (
        <Bar data={bdata} options={boptions} />
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}
