"use client";

import { Box, Typography } from "@mui/material";
import {
  HeroContainer,
  Overlay,
  Content,
  Title,
  Subtitle,
  CTAButton,
} from "./HeroSection.styled";

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <Overlay />
      <Content>
        <Title variant="h2">
          Discover the <span>Art of Elegance</span>
        </Title>
        <Subtitle>
          <span className="highlight">
            Bridal, Party & Professional Makeovers
          </span>
          <br />
          Crafted with passion and precision for every occasion.
          <br />
          <span className="signature">– Anusha</span>
        </Subtitle>

        <CTAButton href="/contact">Book Your Look</CTAButton>
      </Content>
    </HeroContainer>
  );
}
