"use client";
import React from "react";
import { motion } from "framer-motion";

// FadeProps = { direction: "up", speed: 1, disableFade: false }

/**
 *
 * @param {object} props
 * @param {number} props.duration
 * @param {number} props.delay
 * @param {string} props.className
 * @param {*} props.children
 *
 * @returns
 */
function Fade({ duration = 1, delay = 0, className, children, ...others }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      {...others}
    >
      {children}
    </motion.div>
  );
}

export default Fade;
