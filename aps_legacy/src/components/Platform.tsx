import { motion } from "framer-motion";
import platformPreview from "@/assets/platform-preview.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Platform = () => {
  const navigate = useNavigate();
  return (
    <section className="overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={platformPreview}
                alt="Platform Preview"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/20 blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              One platform, unlimited automations
            </h2>
            
            <Button className="mb-8 h-12 w-32 rounded-full bg-black px-6 text-base"  onClick={() => navigate('/contact')} >
              Contact Us
            </Button>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              We take the hard work out of building and automating so your team can focus on great ideas and meaningful progress.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <span className="text-lg font-semibold text-foreground">VK</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Vaibhav Khandelwal</p>
                <p className="text-sm text-muted-foreground">Co-founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
