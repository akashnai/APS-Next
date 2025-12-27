import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ThreeDButton  } from "./ui/ThreeDButton";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center py-24 md:py-32 pt-32">
      {/* Radial gradient background - darker in center, fades to edges */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_hsl(var(--primary-glow))_25%,_transparent_70%)] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* New Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-medium shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              New: Unlock AI-first automation workflow
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl"
          >
            Buying AI tools won't save your business. <br /> Integrating them will
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 text-lg text-muted-foreground md:text-xl"
          >
            Most businesses are drowning in subscriptions but starving for efficiency. Autopilot Studio engineers the actual pipelines—connecting your data, your apps, and your workflows—so your operations run on logic, not luck.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ThreeDButton 
              size="lg" 
              className="group"
              onClick={() => navigate("/solutions")}
            >
              View our systems
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ThreeDButton >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
