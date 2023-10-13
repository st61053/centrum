import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import mapa from "../../images/mapa.jpg";

const Contact = () => {

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 200,
                backgroundColor: "#D13C4A"
            }}>
                <Typography
                    variant="h2"
                    color={"#fff"}
                    sx={{ pl: 0 }}
                    textAlign={"center"}
                >
                    {"Kontaktní informace"}
                </Typography>
            </Box>
                <Grid container spacing={8}>
                    <Grid item md={12} lg={6} xl={6}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: { xs: "0em 0em", sm: "4em 6em 0em 6em", lg: "4em 6em 4em 6em", xl: "4em 8em" },
                        }}>
                            {/* <Card sx={{
                            }}> */}
                            <a
                                href="https://www.google.com/maps/place/t%C5%99.+M%C3%ADru+671%2F117,+771+47+Olomouc+9-Ne%C5%99ed%C3%ADn/@49.5944553,17.210906,17z/data=!3m1!4b1!4m6!3m5!1s0x47124fa9a33e472b:0xb895d37b5e3f3c62!8m2!3d49.5944519!4d17.2134809!16s%2Fg%2F11spdcn_1d?entry=ttu"
                            >
                                <img
                                    loading="lazy"
                                    draggable="false"
                                    style={{
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                    alt={mapa}
                                    src={mapa}
                                />
                            </a>
                            {/* </Card> */}
                        </Box>

                    </Grid>
                    <Grid item md={12} lg={6} xl={6}>
                        <Box
                            sx={{
                                padding: { xs: "0em 3em 4em 3em", sm: "0em 6em 4em 6em", lg: "4em 6em 4em 0em" , xl: "4em 8em 4em 0em" },
                                //backgroundColor: "#e6e6e6"
                            }}
                        >
                            <Typography variant="h5" sx={{ pb: 4 }}>
                                RRR Centrum – Centrum léčby bolestivých stavů a pohybových poruch, spol. s r.o.
                            </Typography>
                            <Divider />
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", pt: 4 }}>
                                Adresa:
                            </Typography >
                            <Typography variant="body1">
                                Tř. Míru 671/117
                            </Typography >
                            <Typography variant="body1" sx={{ pb: 2 }}>
                                779 00 Olomouc
                            </Typography >
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Telefon:
                            </Typography >
                            <Typography variant="body1" sx={{ pb: 2 }}>
                                +420 585 412 286
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Email:
                            </Typography >
                            <Typography variant="body1" sx={{ pb: 2 }}>
                                rrrcentrum@rrrcentrum.cz
                            </Typography>
                            {/* <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            Web:
                        </Typography >
                        <Typography variant="body1" sx={{ pb: 2 }}>
                            www.rrrcentrum.cz
                        </Typography> */}
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Datová schránka:
                            </Typography >
                            <Typography variant="body1">
                                fr5yt7
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

        </>
    );
};

export default Contact;
