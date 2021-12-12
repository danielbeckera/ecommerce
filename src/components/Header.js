import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import photo from "../assets/image.jpg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
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

const WelcomeMessage = styled.p`
  margin-right: 1em;
  font-size: 0.8rem;
  font-weight: 600;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <div>
      <HeaderContainer>
        <h3>Logo</h3>
        <nav>
          <Navbar>
            <NavbarItems>
              SHOP
              <ArrowDropUpOutlined />
            </NavbarItems>
            <NavbarItems>
              FABRIC
              <ArrowDropDownOutlined />
            </NavbarItems>
            <NavbarItems>
              JOURNAL
              <ArrowDropDownOutlined />
            </NavbarItems>
            <NavbarItems>
              ABOUT
              <ArrowDropDownOutlined />
            </NavbarItems>
          </Navbar>
        </nav>
        <AvatarSection>
          <WelcomeMessage>WELCOME, BRUNA</WelcomeMessage>
          <Avatar src={photo} sx={{ marginRight: "1em" }} />
          <IconsContainer>
            <SearchOutlined sx={{ marginRight: "15px" }} />
            <FavoriteBorderOutlined sx={{ marginRight: "15px" }} />
            <ShoppingBasketOutlined sx={{ marginRight: "15px" }} />
          </IconsContainer>
        </AvatarSection>
      </HeaderContainer>
    </div>
  );
}

export default Header;
