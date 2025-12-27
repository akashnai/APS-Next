import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "Gather your key considerations and clarify what it takes to remove Bottlenecks of your operations.",
  },
  {
    number: "02",
    title: "Design",
    description: "After gathering the key requirements we start designing the wireframes and develop them into a fully working prototype.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Once designs are finalized we transform it into reality by coding after which you'll get the live version.",
  },
  {
    number: "04",
    title: "Test & Deploy",
    description: "Our final step is to test the product we created and deploy it once we verify it is flawless to make it live.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Process
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 text-4xl font-bold text-primary opacity-90">
                    {step.number}
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
