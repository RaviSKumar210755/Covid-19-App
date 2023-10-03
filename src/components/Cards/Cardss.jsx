import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";

const CardContainer = ({ data }) => {
  const { cases, recovered, deaths, active } = data;

  return (
    <div className={styles.containerr}>
      <Card
        sx={{
          marginBottom: "40px",
          backgroundColor: "rgb(237, 250, 255)",
          maxWidth: "650px", // Set a max width // Center the card horizontally
          padding: "10px", // Add some padding for better spacing
        }}
      >
        {/* Text above the cards */}
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            COVID-19 Statistics
            <div className={styles.ravi}>
              <Typography
                variant="h5"
                style={{ color: "#0047AB", marginTop: "20px" }}
              >
                <CountUp start={0} end={active} duration={2} separator="," />
              </Typography>
              <div className={styles.line}></div>
              <Typography color="textSecondary" gutterBottom>
                Active Cases
              </Typography>
            </div>
          </Typography>
        </CardContent>

        {/* Grid container for the three cards */}
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                marginBottom: "20px",
                background:
                  "linear-gradient(to bottom, #d3a70f 0%, #f6d04a 100%)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Infected
                </Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={cases} duration={2} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date().toDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                marginBottom: "20px",
                background:
                  "linear-gradient(to bottom, #9be89c 0%, #cdf97d 100%)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Recovered
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date().toDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                marginBottom: "20px",
                background:
                  "linear-gradient(to bottom, #fe8683 0%, #ff9d9b 100%)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Deaths
                </Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={deaths} duration={2} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date().toDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default CardContainer;
