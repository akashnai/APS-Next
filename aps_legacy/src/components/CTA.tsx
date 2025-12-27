import { motion } from "framer-motion";
import { ThreeDButton } from "@/components/ui/ThreeDButton";
import { ArrowRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Radial gradient background - darker in center, fades to edges */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_hsl(var(--primary-glow))_25%,_transparent_70%)] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Take your business to the next level with our tools
          </h2>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Our tools is not to make you fool
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ThreeDButton 
              size="lg" 
              className="group"
              onClick={() => navigate("/tools")}
            >
              Try for free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ThreeDButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
