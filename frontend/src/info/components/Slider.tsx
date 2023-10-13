import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { getInfos } from "../selectors";
import { IMAGES_INFOS } from "../constants";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
  const INFOS = useSelector(getInfos());

  return (
    <>

      {INFOS.length > 0 && <Slide>
        {INFOS && INFOS.map((info, index) => (
          <Box
            key={index}
            sx={{
              height: "100vh",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              position: "relative"
            }}
          >
            <img
              loading="lazy"
              draggable="false"
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                opacity: 0.7,
                filter: "brightness(50%)"
              }}
              alt={IMAGES_INFOS[info.id]}
              src={IMAGES_INFOS[info.id]}
            />
            <Box
              sx={{
                width: "100%",
                // visibility: { xs: "hidden", sm: "visible" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: {xs: 200, sm: 150, lg: 250},
              }}
            >
              {info.title &&
                <Typography
                  textAlign={"center"}
                  sx={{
                    typography: { sm: 'h2', xs: 'h4' },
                    fontWeight: "bold",
                    color: "#fff",
                    // textShadow: "1px 1px 2px black"
                  }}
                >
                  {info.title}
                </Typography>}


              {info.text &&
                <Typography
                  sx={{
                    typography: { sm: 'h4', xs: 'h6' },
                    marginTop: 8,
                    width: "70%",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    // textShadow: "1px 1px 2px black"
                  }}
                >
                  {info.text}
                </Typography>}

              {info.link && <a
                href={info.link?.to}
              >
                <Button
                  sx={{
                    borderRadius: "30px",
                    padding: "1em 3em",
                    marginTop: 4,
                  }}
                  variant="contained"
                >
                  <Typography>
                    {info.link?.alias}
                  </Typography>

                </Button>
              </a>}
            </Box>
          </Box>
        ))}
      </Slide>}
    </>
  );
};

export default Slider;
