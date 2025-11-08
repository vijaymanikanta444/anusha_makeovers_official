"use client";

import { Box, Typography } from "@mui/material";
import styled, { keyframes as styledKeyframes } from "styled-components";

const floatUp = styledKeyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ServicesContainer = styled(Box)`
  width: 100%;
  min-height: 100vh;
  padding: 120px 60px;
  background: linear-gradient(180deg, #1a1a1a, #2a1e23);
  color: #fff;
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 80px 24px;
  }
`;

export const SectionHeading = styled(Typography)`
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: clamp(2rem, 5vw, 2.8rem);
  margin-bottom: 80px;
  text-align: center;
  letter-spacing: 1px;
  animation: ${floatUp} 1s ease forwards;
`;

export const SectionHighlight = styled("span")`
  color: #d4a373;
`;

export const ServicesGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
  width: 100%;
  max-width: 1200px;
`;

export const ServiceCard = styled(Box)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 40px 28px;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 30px rgba(212, 163, 115, 0.25);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ServiceIcon = styled(Box)`
  color: #d4a373;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: radial-gradient(rgba(212, 163, 115, 0.15), transparent 70%);
    z-index: -1;
  }
`;

export const ServiceTitle = styled(Typography)`
  font-family: var(--font-poppins);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

export const ServiceDesc = styled(Typography)`
  font-family: var(--font-poppins);
  font-size: 1.05rem;
  color: #e5e5e5;
  opacity: 0.95;
  line-height: 1.8;
`;
