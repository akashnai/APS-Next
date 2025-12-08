
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, MessageSquare } from "lucide-react";

const tools = [
  {
    title: "AI Content Generator",
    description: "Create premium, SEO-optimized content in seconds with our advanced AI models.",
    icon: <Bot className="w-10 h-10 text-primary" />,
    badge: "Popular"
  },
  {
    title: "Smart Analytics Pro",
    description: "Deep dive into your data with predictive analytics and real-time visualization.",
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    badge: "New"
  },
  {
    title: "Automated Support",
    description: "24/7 intelligent customer support agent that handles complex queries with ease.",
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    badge: "Enterprise"
  }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
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
                <Card className="h-full border-muted/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                      {tool.badge}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/5 w-fit rounded-xl group-hover:bg-primary/10 transition-colors">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{tool.title}</CardTitle>
                    <CardDescription className="text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button className="w-full group/btn" variant="outline">
                      Explore Tool 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
