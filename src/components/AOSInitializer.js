"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Animate only once per element
      offset: 100, // Trigger offset before entering viewport
      easing: "ease-in-out",
    });
  }, []);

  return null;
}
