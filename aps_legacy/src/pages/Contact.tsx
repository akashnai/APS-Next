import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What is APS?",
    answer: "APS is a comprehensive platform designed to streamline your design and development workflow, offering powerful automation and collaboration tools."
  },
  {
    question: "Do I need to install anything to use APS?",
    answer: "No, APS is entirely web-based. You can access all features directly through your modern web browser without any downloads."
  },
  {
    question: "Can I collaborate with others in real time?",
    answer: "Absolutely! We support real-time collaboration so you and your team can edit, comment, and build together instantly."
  },
  {
    question: "What kind of export options does APS support?",
    answer: "We support a wide range of export formats including PDF, PNG, SVG, and direct code exports to React, HTML/CSS, and more."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F3F0FF]/50 flex flex-col font-sans selection:bg-purple-100">
      <Navbar />
      
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(120,119,198,0.1),transparent_50%)]" />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
              Get in touch with us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, need help, or want to get started? We're here to support you every step of the way.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto bg-white rounded-3xl shadow-sm border border-border/5 p-8 md:p-10 mb-16"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">Name*</label>
                <Input 
                  id="name" 
                  placeholder="Full name" 
                  className="bg-gray-50/50 border-gray-100 focus:bg-white transition-all duration-200 h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">Email*</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-gray-50/50 border-gray-100 focus:bg-white transition-all duration-200 h-12 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium ml-1">Name*</label>
                  <Input 
                    id="company" 
                    placeholder="Company here" 
                    className="bg-gray-50/50 border-gray-100 focus:bg-white transition-all duration-200 h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium ml-1">Phone*</label>
                  <Input 
                    id="phone" 
                    placeholder="Phone number" 
                    className="bg-gray-50/50 border-gray-100 focus:bg-white transition-all duration-200 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Enter message" 
                  className="min-h-[150px] bg-gray-50/50 border-gray-100 focus:bg-white transition-all duration-200 rounded-xl resize-none p-4"
                />
              </div>

              <Button 
                className="w-full h-12 text-md font-semibold rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E6] hover:to-[#7C4DFF] shadow-lg shadow-indigo-100 transition-all duration-200 hover:scale-[1.02]"
              >
                Send message
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Questions, feedback, or support? Our team's just a message away.
              </p>
            </form>
          </motion.div>

          {/* Support Links */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 md:pl-8">
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Support</h3>
              <a href="mailto:support@aps.com" className="text-sm font-medium underline decoration-1 underline-offset-4 hover:text-primary transition-colors block mb-2">
                support@autopilot-studio.com
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Need help? Our team's here 24/7 to assist you.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Sales</h3>
              <a href="mailto:sales@aps.com" className="text-sm font-medium underline decoration-1 underline-offset-4 hover:text-primary transition-colors block mb-2">
                contact@autopilot-studio.com
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in APS for your team? Let's talk pricing and solutions.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-muted-foreground">Find quick answers to common questions about APS.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-none rounded-2xl bg-[#F3F5F8]/50 px-6 py-2"
                >
                  <AccordionTrigger className="hover:no-underline text-base font-medium text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
