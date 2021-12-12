import React from "react";
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
  width: 25%;
`;

function SidebarFilter() {
  return (
    <Container>
      <Accordion sx={{ boxShadow: 0, width: "100%" }}>
        <AccordionSummary>
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Apparels
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>PANTS</Typography>
          </FlexSidebarItems>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>JUMPSUITS</Typography>
          </FlexSidebarItems>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>SHORTS</Typography>
          </FlexSidebarItems>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>TOPS</Typography>
          </FlexSidebarItems>
        </AccordionDetails>
      </Accordion>
      {/* Accessories */}
      <Accordion sx={{ boxShadow: 0, width: "100%", border: 0 }}>
        <AccordionSummary>
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Accessories
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>PANTS</Typography>
          </FlexSidebarItems>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>JUMPSUITS</Typography>
          </FlexSidebarItems>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>SHORTS</Typography>
          </FlexSidebarItems>
          <FlexSidebarItems>
            <ArrowRight />
            <Typography sx={{ fontSize: "0.7rem" }}>TOPS</Typography>
          </FlexSidebarItems>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default SidebarFilter;
