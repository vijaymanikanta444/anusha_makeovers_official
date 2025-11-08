"use client";
import {
  AboutContainer,
  AboutContent,
  AboutText,
  Highlight,
  AboutTitle,
} from "./AboutSection.styled";

export default function AboutSection() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>
          About <Highlight>Anusha</Highlight>
        </AboutTitle>
        <AboutText>
          With an eye for elegance and a passion for perfection, Anusha
          transforms every makeover into a moment of artistry. From bridal and
          party looks to professional styling, her work blends creativity with
          precision to enhance every unique personality.
        </AboutText>
        <AboutText>
          Every brushstroke is guided by the belief that beauty should feel as
          natural as it looks — confident, graceful, and timeless.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
}
