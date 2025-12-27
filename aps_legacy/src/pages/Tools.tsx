
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, MessageSquare } from "lucide-react";

const tools = [
  {
    title: "Festiv AI",
    description: "Our AI tool helps local businesses create eye-catching festival creatives for WhatsApp, Instagram, flyers, and more. Just select a festival, add your business name, offer, and logo — and your poster is ready to share.",
    icon: <Bot className="w-10 h-10 text-primary" />,
    badge: "Best",
    link: "https://festivai.autopilot-studio.com"
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="container mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white tracking-tight">
              Premium AI Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elevate your workflow with our suite of intelligent tools designed for modern businesses.
            </p>
          </motion.div>
        </section>

        {/* Tools Grid */}
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden group relative">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full border border-primary/20">
                      {tool.badge}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 w-fit rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{tool.title}</CardTitle>
                    <CardDescription className="text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button className="w-full group/btn group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline" asChild>
                      <a href={tool.link} target="_blank" rel="noopener noreferrer">
                        Explore Tool 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
