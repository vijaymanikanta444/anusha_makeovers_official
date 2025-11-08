"use client";

import { Box, Typography, Button } from "@mui/material";
import styled, { keyframes } from "styled-components";
import heroImg from "@/assets/hero-bg.jpg";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeInSignature = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeroContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  text-align: center;
`;

export const Overlay = styled(Box)`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(15, 10, 10, 0.6), rgba(20, 10, 15, 0.6)),
    url(${heroImg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  filter: brightness(0.9);
  transition: background-position 0.3s ease;

  @media (max-width: 992px) {
    background-position: top center;
  }

  @media (max-width: 600px) {
    background-position: 77% center;
  }
`;

export const Content = styled(Box)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1.2s ease-out;
  gap: 1.5rem; /* ✅ Consistent vertical spacing */

  @media (max-width: 768px) {
    gap: 1.2rem;
    max-width: 98%;
  }
`;

/* ✨ Title — Luxurious serif with perfect rhythm */
export const Title = styled(Typography)`
  font-family: var(--font-playfair);
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.2;
  letter-spacing: 0.5px;
  text-align: center;
  margin: 0;

  span {
    color: #d4a373;
    font-style: italic;
  }
`;

export const Subtitle = styled(Typography)`
  font-family: var(--font-poppins);
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  text-align: center;
  color: #f5f5f5;
  opacity: 0.9;
  max-width: 700px;
  letter-spacing: 0.3px;
  margin: 0 auto;

  .highlight {
    display: inline-block;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    color: #d4a373;
    font-weight: 600;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  br {
    line-height: 0;
  }

  .signature {
    display: block;
    font-family: "Tangerine", cursive;
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: #d4a373;
    margin-top: 8px;
    text-align: right; /* Aligns to the right */
    width: 100%;
    transform: rotate(-4deg);
    letter-spacing: 1px;
    font-weight: 700;

    animation: ${fadeInSignature} 1.2s ease 0.4s both;
  }
`;

/* 💎 Button — Polished and balanced */
export const CTAButton = styled(Button)`
  background-color: #d4a373 !important;
  color: #1a1a1a !important;
  font-weight: 600 !important;
  font-family: var(--font-poppins) !important;
  padding: 12px 36px !important;
  border-radius: 50px !important;
  font-size: 1rem !important;
  text-transform: none !important;
  transition: all 0.3s ease-in-out !important;
  box-shadow: 0 4px 20px rgba(212, 163, 115, 0.3);
  margin-top: 0.5rem !important; /* ✅ Small extra gap below subtitle */

  &:hover {
    background-color: #b98a5d !important;
    transform: translateY(-3px);
    box-shadow: 0 6px 24px rgba(212, 163, 115, 0.4);
  }
`;
