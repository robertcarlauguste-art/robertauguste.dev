"use client";

import { motion, useReducedMotion } from "framer-motion";

interface WorkflowConnectorProps {
  direction?: "vertical" | "horizontal";
  delay?: number;
}

export default function WorkflowConnector({
  direction = "vertical",
  delay = 0,
}: WorkflowConnectorProps) {
  const isVertical = direction === "vertical";
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, scaleY: isVertical ? 0 : 1, scaleX: isVertical ? 1 : 0 }
      }
      whileInView={{ opacity: 1, scaleY: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className="flex items-center justify-center"
    >
      {isVertical ? (
        <div className="h-12 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent" />
      ) : (
        <div className="h-px w-16 bg-gradient-to-r from-cyan-400/60 via-cyan-400/30 to-transparent" />
      )}
    </motion.div>
  );
}