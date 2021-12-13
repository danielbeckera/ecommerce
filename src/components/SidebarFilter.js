import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  Divider,
  Button,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { ArrowRight, MenuOutlined } from "@mui/icons-material";
import styled from "styled-components";

const FlexSidebarItems = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 25%;
  visibility: hidden;
  @media (min-width: 850px) {
    visibility: visible;
  }
`;

const DrawerContainer = styled.div`
  display: flex;
  justify-content: center;
  visibility: visible;
  @media (min-width: 850px) {
    visibility: hidden;
  }
`;

function SidebarFilter() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    // Menu
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
                Electronics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography sx={{ fontSize: "0.7rem" }}>ELECTRONICS</Typography>
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
                JEWELRY
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography sx={{ fontSize: "0.7rem" }}>JEWELRY</Typography>
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
                Mens
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography sx={{ fontSize: "0.7rem" }}>
                  MEN'S CLOTHING
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
                Womens
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FlexSidebarItems>
                <ArrowRight />
                <Typography sx={{ fontSize: "0.7rem" }}>WOMENS</Typography>
              </FlexSidebarItems>
            </AccordionDetails>
          </Accordion>
        </Drawer>
      </DrawerContainer>

      {/* Menu browser */}
      <Container>
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
              Electronics
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FlexSidebarItems>
              <ArrowRight />
              <Typography sx={{ fontSize: "0.7rem" }}>ELECTRONICS</Typography>
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
              Jewelry
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FlexSidebarItems>
              <ArrowRight />
              <Typography sx={{ fontSize: "0.7rem" }}>JEWELRY</Typography>
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
              Mens
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FlexSidebarItems>
              <ArrowRight />
              <Typography sx={{ fontSize: "0.7rem" }}>MEN'S</Typography>
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
              Womens
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FlexSidebarItems>
              <ArrowRight />
              <Typography sx={{ fontSize: "0.7rem" }}>WOMENS</Typography>
            </FlexSidebarItems>
          </AccordionDetails>
        </Accordion>
      </Container>
    </React.Fragment>
  );
}

export default SidebarFilter;
