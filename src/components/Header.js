import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";
import { withStyles } from "@mui/styles";
import { Avatar } from "@mui/material";
import photo from "../assets/image.jpg";

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

function Header() {
  return (
    <div>
      <HeaderContainer>
        <h3>Logo</h3>
        {/* Navigation */}
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
        {/* Avatar section */}
        <AvatarSection>
          <WelcomeAvatarSection>
            <WelcomeMessage>WELCOME, BRUNA</WelcomeMessage>
            <Avatar src={photo} sx={{ marginRight: "1em" }} />
          </WelcomeAvatarSection>
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
