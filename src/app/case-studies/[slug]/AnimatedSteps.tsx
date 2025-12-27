"use client";
import {
  motion,
  type TargetAndTransition,
} from "framer-motion";

type Opts = TargetAndTransition

export default function AnimatedSteps({
  children,
  idx,
  initialOpts,
  inViewOpts,
  className
}: {
  idx: number;
  initialOpts: Opts;
  inViewOpts: Opts;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, ...initialOpts }}
      whileInView={{ opacity: 1, ...inViewOpts }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className={className ?? "flex gap-6"}
    >
      {children}
    </motion.div>
  );
}
