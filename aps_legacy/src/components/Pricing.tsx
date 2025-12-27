import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Custom Solutions
            </span>
          </div>
          
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Tailored for your unique needs
          </h2>
          
          <p className="mb-12 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every business is different, and so are your automation requirements. 
            We don't believe in one-size-fits-all pricing. Let's build a solution that fits your specific goals and budget.
          </p>

          <div className="bg-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto relative overflow-hidden group hover:border-primary/20 transition-colors duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-xl font-semibold text-foreground">What you get</h3>
                <ul className="space-y-4">
                  {[
                    "Customized automation workflows",
                    "Scalable infrastructure",
                    "Dedicated support channel",
                    "Personalized onboarding"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center p-6 bg-background/40 rounded-2xl border border-white/5 shadow-inner">
                 <h3 className="text-lg font-semibold text-foreground mb-3">Ready to start?</h3>
                 <p className="text-sm text-muted-foreground mb-8">
                   Get a free consultation and a custom quote for your project.
                 </p>
                  <Button className="rounded-full bg-black w-32"  onClick={() => navigate('/contact')}>
                   Contact Us
                 </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
