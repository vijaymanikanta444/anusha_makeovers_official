"use client";

import * as React from "react";
import Link from "next/link";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledAppBar,
  LogoContainer,
  NavContainer,
  BrandTitle,
  NavLinks,
  NavButton,
  DrawerContainer,
  DrawerList,
} from "./Navbar.styled";
import LogoIcon from "@/assets/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <StyledAppBar>
        <NavContainer>
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo Section */}
            <LogoContainer component={Link} href="/">
              <Image
                src={LogoIcon}
                alt="Anusha Makeovers Logo"
                width={32}
                height={32}
              />
              <BrandTitle variant="h6">
                Anusha <span>Makeovers</span>
              </BrandTitle>
            </LogoContainer>

            {/* Desktop Navigation */}
            <NavLinks>
              {navItems.map((item) => (
                <NavButton key={item.href} component={Link} href={item.href}>
                  {item.label}
                </NavButton>
              ))}
            </NavLinks>

            {/* Mobile Hamburger */}
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </NavContainer>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#1a1a1a",
            color: "#f5f5f5",
          },
        }}
      >
        <DrawerContainer>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#f5f5f5" }}>
            <CloseIcon />
          </IconButton>
        </DrawerContainer>

        <DrawerList>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DrawerList>
      </Drawer>
    </>
  );
};

export default Navbar;
