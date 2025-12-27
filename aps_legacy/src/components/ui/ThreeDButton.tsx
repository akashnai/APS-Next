import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumCTAButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  wrapperClassName?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export const ThreeDButton = React.forwardRef<HTMLButtonElement, PremiumCTAButtonProps>(
  ({ className, wrapperClassName, children, onClick, size = "default", ...props }, ref) => {
    
    const sizeClasses = {
      default: "h-12 px-8 text-base",
      sm: "h-10 px-6 text-sm",
      lg: "h-16 px-10 text-lg",
      icon: "h-12 w-12",
    };

    return (
      <div className={cn("group relative inline-block", wrapperClassName)}>
        {/* Animated Glow Gradient behind */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 opacity-50 blur-lg transition duration-500 group-hover:opacity-80 group-hover:duration-200" />
        
        <motion.button
          ref={ref}
          whileHover={{ y: -2 }}
          whileTap={{ y: 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className={cn(
            "relative flex items-center justify-center rounded-full",
            // Premium Purple Gradient
            "bg-gradient-to-b from-violet-500 to-indigo-600",
            // 3D Depth (Shadow)
            "shadow-[0_6px_0_rgb(55,48,163),0_12px_12px_-4px_rgba(0,0,0,0.3)]", 
            // Pressed state (removes shadow depth to simulate pressing)
            "active:shadow-[0_0px_0_rgb(55,48,163)]",
            // Top Highlight for glass/plastic feel
            "border-t border-white/20",
            "text-white font-bold tracking-wide",
            sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.default,
            className
          )}
          onClick={onClick}
          {...props}
        >
          {/* Inner Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />
          
          {/* Text Content with Drop Shadow */}
          <span className="relative flex items-center gap-2 drop-shadow-md">
            {children}
          </span>
        </motion.button>
      </div>
    );
  }
);

ThreeDButton.displayName = "ThreeDButton";