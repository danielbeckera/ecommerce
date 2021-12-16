import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Drawer,
} from "@mui/material";
import { ArrowRight, MenuOutlined } from "@mui/icons-material";
import styled from "styled-components";

const FlexSidebarItems = styled.div`
  display: flex;
  align-items: center;
`;

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  visibility: visible;
  @media (min-width: 850px) {
    visibility: hidden;
  }
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ResponsiveSidebar(props) {
  const [state, setState] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      {/* Menu Responsivo */}
      <DrawerContainer>
        <MenuOutlined onClick={toggleDrawer(true)} />
        <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
          <Accordion sx={{ boxShadow: 0, width: "35%" }}>
            <AccordionSummary>
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                <span>Eletronicos</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography
                  onClick={() => props.getItems("electronics")}
                  sx={{ fontSize: "0.7rem" }}
                >
                  <span>ELETRONICOS</span>
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
          {/* Accessories */}
          <Accordion sx={{ boxShadow: 0, width: "35%" }}>
            <AccordionSummary>
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                Joalheria
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography
                  onClick={() => props.getItems("jewelery")}
                  sx={{ fontSize: "0.7rem" }}
                >
                  JOALHERIA
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
          {/* Mens */}
          <Accordion sx={{ boxShadow: 0, width: "35%" }}>
            <AccordionSummary>
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                Homens
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography
                  onClick={() => props.getItems("men's%20clothing")}
                  sx={{ fontSize: "0.7rem" }}
                >
                  ROUPAS HOMENS
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
          {/* Others */}
          <Accordion sx={{ boxShadow: 0, width: "35%" }}>
            <AccordionSummary>
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                Mulheres
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography
                  onClick={() => props.getItems("women's%20clothing")}
                  sx={{ fontSize: "0.7rem" }}
                >
                  ROUPAS MULHERES
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
        </Drawer>
      </DrawerContainer>
    </React.Fragment>
  );
}

export default ResponsiveSidebar;
