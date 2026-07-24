"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WorkflowCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function WorkflowCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: WorkflowCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="
        group
        relative
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-white/[0.07]
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
        <Icon size={24} strokeWidth={2} />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}