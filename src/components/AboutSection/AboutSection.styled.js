"use client";

import { Box, Typography } from "@mui/material";
import styled, { keyframes as styledKeyframes } from "styled-components";
import aboutImg from "@/assets/about-bg.jpeg";

/* ✨ Fade-up animation */
const fadeUp = styledKeyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutContainer = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(
      rgba(20, 10, 15, 0.65),
      rgba(20, 10, 15, 0.65)
    ),
    url(${aboutImg.src});
  background-size: cover;
  background-position: center 0;
  background-attachment: fixed; /* Parallax for desktop */
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 100px 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    background-attachment: scroll; /* Disable parallax for mobile */
    background-position: center top;
    padding: 60px 24px;
  }
`;

export const AboutContent = styled(Box)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  animation: ${fadeUp} 1s ease forwards;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const Highlight = styled("span")`
  color: #d4a373;
  font-style: italic;
`;

export const AboutTitle = styled(Typography)`
  font-family: var(--font-playfair);
  font-weight: 700;
  font-size: clamp(2.2rem, 5vw, 3.2rem); /* Increased size */
  letter-spacing: 0.8px;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.25;
  text-transform: capitalize;

  span {
    color: #d4a373;
    font-style: italic;
    font-family: var(--font-playfair);
    font-weight: 700;
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 5vw, 2.4rem);
  }

  @media (max-width: 600px) {
    font-size: 1.9rem;
    margin-bottom: 0.8rem;
  }
`;

export const AboutSubtitle = styled(Typography)`
  font-family: var(--font-poppins);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #e5e5e5;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 0.5rem auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0 10px;
  }
`;

export const AboutText = styled(Typography)`
  font-family: var(--font-poppins);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.8;
  color: #f5f5f5;
  opacity: 0.95;
  max-width: 680px;
  margin: 8px auto 0;
  letter-spacing: 0.3px;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.9;
  }
`;
