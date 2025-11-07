"use client";

import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  speed = 50,
  repeat = false,
  repeatDelay = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let isCancelled = false;

    const type = () => {
      if (isCancelled) return;

      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        setTimeout(type, speed);
      } else if (repeat && !isCancelled) {
        // Wait before repeating
        setTimeout(() => {
          if (!isCancelled) {
            setDisplayedText("");
            i = 0;
            setTimeout(type, speed); // small restart delay
          }
        }, repeatDelay);
      }
    };

    setDisplayedText(""); // reset before typing
    type();

    return () => {
      isCancelled = true; // stop typing if component unmounts
    };
  }, [text, speed, repeat, repeatDelay]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
