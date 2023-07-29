"use client";
import React from "react";
import { motion } from "framer-motion";

// FadeSlideProps = { direction: "up", speed: 1, disableFade: false }

/**
 *
 * @param {object} props
 * @param {"up"|"down"|"left"| "right"} props.direction
 * @param {"sm"|"base"|"l"| "xl"|number} props.distance
 * @param {number} props.duration
 * @param {number} props.delay
 * @param {boolean} props.disableFade
 * @param {string} props.className
 * @param {*} props.children
 *
 * @returns
 */
function FadeSlide({
  direction = "up",
  distance = "base",
  duration = 1,
  delay = 0,
  disableFade = false,
  className,
  children,
  ...others
}) {
  const dis =
    typeof distance === "number"
      ? distance
      : distance === "base"
      ? 200
      : distance === "sm"
      ? 100
      : distance === "l"
      ? 300
      : distance === "l"
      ? 400
      : 0;

  const variantsX = {
    hidden: {
      opacity: disableFade ? 1 : 0,
      translateX: direction === "right" ? Number(dis) : -Number(dis),
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
  const variantsY = {
    hidden: {
      opacity: disableFade ? 1 : 0,
      translateY: direction === "up" ? Number(dis) : -Number(dis),
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={
        direction === "up" || direction === "down" ? variantsY : variantsX
      }
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      {...others}
    >
      {children}
    </motion.div>
  );
}

export default FadeSlide;
