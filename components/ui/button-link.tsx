"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ButtonLinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "none";
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-13 px-6 text-sm sm:px-7 sm:text-base",
};

const variantClasses = {
  primary:
    "button-gradient-primary border border-white/70 text-white shadow-[0_18px_40px_-20px_rgba(9,59,224,0.65)] hover:brightness-110 focus-visible:ring-primary/30",
  secondary:
    "button-gradient-secondary border border-white text-darkPrimary shadow-[0_18px_40px_-24px_rgba(239,186,11,0.75)] hover:brightness-105 focus-visible:ring-secondary/30",
  none:
    "border border-white text-darkPrimary font-semibold shadow-[0_18px_40px_-20px_rgba(9,59,224,0.65)] hover:brightness-110 focus-visible:ring-primary/30",
};

export function ButtonLink({
  children,
  className = "",
  size = "md",
  variant = "none",
  ...props
}: ButtonLinkProps) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "inline-flex items-center justify-center gap-2 shadow-watery rounded-full font-semibold tracking-tight outline-none focus-visible:ring-4",
        sizeClasses[size],
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.a>
  );
}
