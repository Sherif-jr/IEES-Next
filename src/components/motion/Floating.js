"use client";
import React from "react";
import { motion } from "framer-motion";

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
function Floating({ duration = 2, delay = 0, className, children, ...others }) {
  const variants = {
    hidden: {
      translateY: -20,
    },
    visible: {
      translateY: 20,
      transition: {
        duration: duration,
        delay: 0,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      animate="visible"
      {...others}
    >
      {children}
    </motion.div>
  );
}

export default Floating;
