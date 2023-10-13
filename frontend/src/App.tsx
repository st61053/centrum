import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Box, Card, Typography, useTheme } from '@mui/material';
import Menu from './layout/components/Menu';
import { Element } from "react-scroll";
import Slider from './info/components/Slider';
import Terapeuts from './terapeuts/components/Terapeuts';
import { Parallax } from "react-parallax";
import Services from './services/components/Services';
import './App.css';
import { initInfos, initServices, initTerapeuts } from './database/actions';
import { getTerapeuts } from './terapeuts/api/getTerapeuts';
import { getInfos } from './info/api/getInfos';
import parallax from "./images/parallax.jpg";
import Contact from './contact/components/Constact';
import Footer from './layout/components/Footer';
import { getServices } from './services/api/getServices';

const App = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const threshold = 0;
  const [scrollDir, setScrollDir] = React.useState(true);
  const theme = useTheme();

  const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

  useEffect(() => {

    getTerapeuts().then((terapeuts) => dispatch(initTerapeuts(terapeuts)));
    getInfos().then((infos) => dispatch(initInfos(infos)));
    getServices().then((services) => dispatch(initServices(services)));

    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? false
          : true;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box sx={{
      backgroundColor: "#F1F1F1"
    }}>
      <Menu scrollDir={scrollDir} />
      <Element name="Intro" className="element">
        <Slider />
      </Element>
      <Element name="Terapeuti" className="element">
        <Terapeuts />
      </Element>
      <Element name="Služby" className="element">
        <Parallax bgImage={parallax} strength={500}>
          <Box style={{ height: 500 }}>
            <Box sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}>
              <Typography
                variant="h1"
                sx={{ color: "white" }}>
                Naše služby
              </Typography>
            </Box>
          </Box>
        </Parallax>
        <Services />
      </Element>
      <Element name="Kontakt" className="element">
        <Contact />
      </Element>
          <Footer />
    </Box>
  );
}

export default App;
