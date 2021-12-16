import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import photo from "../assets/product.jpg";
import ResponsiveSidebar from "./ResponsiveSidebar";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const Navbar = styled.ul`
  display: flex;
  list-style: none;
`;

const NavbarItems = styled.li`
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 2em;
  display: flex;
  align-items: center;
`;

const AvatarSection = styled.div`
  display: flex;
`;

const WelcomeAvatarSection = styled.div`
  display: flex;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const WelcomeMessage = styled.p`
  margin-right: 1em;
  font-size: 0.8rem;
  font-weight: 600;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 850px) {
    justify-content: space-between;
    width: 0%;
  }
`;

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Header(props) {
  const classes = useStyles();

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
    <div>
      <HeaderContainer>
        <FlexContainer>
          {windowDimensions.width < 850 ? (
            <ResponsiveSidebar
              getItems={props.getItems}
              loading={props.loading}
              itemsToDisplay={props.itemsToDisplay}
            />
          ) : null}
          <h3 style={{ textAlign: "center" }}>Logo</h3>
        </FlexContainer>
        {/* Navigation */}
        <nav>
          <Navbar>
            <NavbarItems>LOJA</NavbarItems>
            <NavbarItems>FÁBRICA</NavbarItems>
            <NavbarItems>JORNAL</NavbarItems>
            <NavbarItems>SOBRE</NavbarItems>
          </Navbar>
        </nav>
        {/* Avatar section */}
        <AvatarSection>
          <WelcomeAvatarSection>
            <WelcomeMessage>BEM-VINDO, BILL</WelcomeMessage>
            <Avatar src={photo} sx={{ marginRight: "1em" }} />
          </WelcomeAvatarSection>
          <IconsContainer>
            <SearchOutlined sx={{ marginRight: "15px" }} />
            <FavoriteBorderOutlined sx={{ marginRight: "15px" }} />
            <Link to="/cart">
              <Badge
                color="error"
                badgeContent={props.numberItemsCart}
                className={classes.root}
              >
                <ShoppingBasketOutlined sx={{ marginRight: "15px" }} />
              </Badge>
            </Link>
          </IconsContainer>
        </AvatarSection>
      </HeaderContainer>
    </div>
  );
}

export default Header;
