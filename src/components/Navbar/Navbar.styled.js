"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";

// Gradient animation
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
export const StyledAppBar = styled(Box)`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1201;
  background: linear-gradient(90deg, #2a1e23, #4b2f3a, #6b3f50);
  background-size: 200% 200%;
  animation: ${gradientFlow} 10s ease infinite;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  color: #f5f5f5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const BrandTitle = styled(Typography)`
  && {
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #f5f5f5;
    font-family: "Playfair Display", serif;
    cursor: pointer;

    span {
      color: #d4a373;
    }
  }
`;

export const NavLinks = styled(Box)`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavButton = styled(Button)`
  color: #f5f5f5 !important;
  text-transform: none !important;
  font-weight: 500 !important;
  font-family: "Poppins", sans-serif !important;
  letter-spacing: 0.5px !important;
  background-color: transparent !important;

  &:hover {
    color: #d4a373 !important;
    background-color: transparent !important;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const DrawerContainer = styled(Box)`
  text-align: right;
  padding: 16px;
`;

export const DrawerList = styled(Box)`
  background-color: #1a1a1a;
  color: #f5f5f5;

  .MuiListItemButton-root:hover {
    background-color: rgba(212, 163, 115, 0.1);
  }

  .MuiListItemText-primary {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #f5f5f5;
  }

  .MuiListItemText-primary:hover {
    color: #d4a373;
  }
`;
