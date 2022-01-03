import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import styled from "styled-components";

const FlexSidebarItems = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 10%;
  visibility: hidden;
  @media (min-width: 850px) {
    visibility: visible;
  }
`;

const ItemSidebar = styled.span`
  cursor: pointer;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function SidebarFilter(props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      {/* Menu browser */}
      {windowDimensions.width > 850 ? (
        <Container>
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary sx={{ padding: 0 }}>
              <Typography
                sx={{
                  flexShrink: 0,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                Eletrônicos
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography
                  onClick={() => props.getItems("electronics")}
                  sx={{ fontSize: "0.7rem" }}
                >
                  <ItemSidebar>ELETRÔNICOS</ItemSidebar>
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
          {/* Accessories */}
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary sx={{ padding: 0 }}>
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
                  <ItemSidebar>JOALHERIA</ItemSidebar>
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
          {/* Mens */}
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary sx={{ padding: 0 }}>
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
                  <ItemSidebar>ROUPAS HOMENS</ItemSidebar>
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
          {/* Others */}
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary sx={{ padding: 0 }}>
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
                  <ItemSidebar>ROUPAS MULHERES</ItemSidebar>
                </Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
        </Container>
      ) : null}
    </React.Fragment>
  );
}

export default SidebarFilter;
