import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {

    return (
        <>
            <Box sx={{
                padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
                // height: 200,
                backgroundColor: "#fff"
            }}>
                <Grid container spacing={8}>
                    <Grid item xl={6} lg={6} sm={6} xs={12}>

                    </Grid>
                    <Grid item xl={6} lg={6} sm={6} xs={12}>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", pb: 1 }}>
                            Ordinační hodiny::
                        </Typography >
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: 250
                        }}>
                            <Typography variant="body1">
                                {"Pondělí - Čtvrtek"}
                            </Typography >
                            <Typography variant="body1">
                                {"7.00 - 17.00"}
                            </Typography >
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: 250,
                            pb: 8
                        }}>
                            <Typography variant="body1">
                                {"Pátek"}
                            </Typography >
                            <Typography variant="body1">
                                {"7.00 - 15.00"}
                            </Typography >
                        </Box>
                        <Typography variant="body1">
                                Copyright &#xA9; 2023 Matěj Varga. All Rights Reserved
                            </Typography >
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;
