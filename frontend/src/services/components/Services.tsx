import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { getServices } from "../selectors";

const createData = (name: string, calories: number, fat: number) => {
  return { name, calories, fat };
}

const rows = [
  createData("služba 1", 120, 400),
  createData("služba 2", 60, 300),
  createData("služba 3", 30, 200),
  createData("služba 4", 180, 600),
  createData("služba 5", 210, 1400),
];

const Services = () => {

  const SERVICES = useSelector(getServices());

  return (
    <Box
      sx={{
        padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
      }}
    >
      <Grid container spacing={8}>
        <Grid item md={12} lg={6} xl={6}>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <Typography variant="h6" lineHeight={1.3} gutterBottom sx={{ fontWeight: "bold" }}>
              Kvalifikace
            </Typography>
            <Typography variant="body1" lineHeight={1.3} gutterBottom>
              Fyzioterapeuti poskytují odbornou péči se zaměřením na diagnostiku a léčbu bolestivých stavů nervového a pohybového systému. Mimo zdravotní pojištění je poskytována regenerační a rekondiční činnost využívající fyzikálních prostředků, rekondičního cvičení, řízené autoterapie a dalších specifických metod.
            </Typography>
            <Typography variant="body1" sx={{ pb: 4 }} lineHeight={1.3}>
              Pracoviště poskytuje také lékařskou péči v oboru neurologie, algeziologie a rehabilitační a fyzikální medicíny
            </Typography>
            <Typography variant="h6" lineHeight={1.3} gutterBottom sx={{ fontWeight: "bold" }}>
              Zdravotní pojišťovny
            </Typography>
            <Typography variant="body1" lineHeight={1.3}>
              Máme uzavřeny smlouvy s pojišťovnami: ČPZP, VZP, VoZP, ZPMV, OZP, RBP
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} xl={6} sx={{ width: "100%" }}>
          <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table sx={{ width: "100%" }} aria-label="simple table" size="small">
              <TableHead>
                <TableRow sx={{ height: "80px" }}>
                  <TableCell>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Procedury
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Délka (min)
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      cena (kč)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {SERVICES.map((service) => (
                  <TableRow
                    key={service.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      height: 60,
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {service.procedure}
                    </TableCell>
                    <TableCell align="center">{service.duration}</TableCell>
                    <TableCell align="center">{`${service.price}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Services;
