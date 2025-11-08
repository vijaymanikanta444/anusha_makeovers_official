"use client";

import { motion } from "framer-motion";
import {
  ServicesContainer,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDesc,
  SectionHeading,
  SectionHighlight,
} from "./ServicesSection.styled";

import { Brush, User, Scissors, Camera, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Brush size={40} />,
    title: "Bridal Makeover",
    desc: "Look flawless on your day with elegant, confidence-boosting bridal makeovers.",
  },
  {
    icon: <User size={40} />,
    title: "Party Glam",
    desc: "Look radiant at every event with stunning, confidence-boosting makeovers.",
  },
  {
    icon: <Scissors size={40} />,
    title: "Hair Styling",
    desc: "From sleek buns to voluminous curls — every strand styled with care.",
  },
  {
    icon: <Camera size={40} />,
    title: "Photoshoot Look",
    desc: "Camera-ready transformations that highlight your best features beautifully.",
  },
  {
    icon: <Heart size={40} />,
    title: "Groom Makeover",
    desc: "Refined and modern looks crafted exclusively for the stylish groom.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "HD & Airbrush Makeup",
    desc: "Flawless finishes that look natural and glowing under any light.",
  },
];

export default function ServicesSection() {
  return (
    <ServicesContainer id="services">
      <SectionHeading>
        Our <SectionHighlight>Services</SectionHighlight>
      </SectionHeading>

      <ServicesGrid>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ServiceCard>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDesc>{service.desc}</ServiceDesc>
            </ServiceCard>
          </motion.div>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}
