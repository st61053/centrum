import React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { getTerapeuts } from "../selectors";
import { ITerapeut } from "../types";
import { IMAGES_TERAPEUTS } from "../constants";

const Terapeuts = () => {

  const TERAPEUTS = useSelector(getTerapeuts());
  // const TERAPEUTS: ITerapeut[] = [];

  return (
    <>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        backgroundColor: "#1E9D50"
      }}>
        <Typography
          variant="h2"
          color={"#fff"}
        >
          {"Terapeuti"}
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
          //backgroundColor: "#e6e6e6"
        }}
      >
        <Grid container spacing={4}>
          {TERAPEUTS &&
            TERAPEUTS.map((terapeut, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Card sx={{ minHeight: "45vh" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      p: 0,
                    }}
                  >
                    <Box
                      sx={{
                        height: "420px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        p: 0,
                      }}
                    >
                      <img
                        draggable="false"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        alt={IMAGES_TERAPEUTS[terapeut.id]}
                        src={IMAGES_TERAPEUTS[terapeut.id]}
                      />
                    </Box>
                    <Box sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column"
                    }}>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                        variant="h6"
                      >
                        {terapeut.name}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          textAlign: "left",
                          pb: 1
                        }}
                        variant="subtitle1"
                      >
                        {terapeut.title}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "left"
                        }}
                        variant="body2"
                      >
                        {terapeut.desc}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Terapeuts;
