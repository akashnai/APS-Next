"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
const featureSocial = "/placeholder.svg";
const featureCalling = "/placeholder.svg";
const featureShopping = "/placeholder.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "AI Social Media Influencer",
    description: "Let AI craft engaging and on-brand social media content that resonates with your audience, saving you time and boosting results.",
    image: featureSocial,
    bgColor: "bg-purple-50",
  },
  {
    title: "VoIP Calling",
    description: "Easily set up VoIP calling systems to make and receive calls online, ideal for remote and global communication.",
    image: featureCalling,
    bgColor: "bg-orange-50",
  },
  {
    title: "Local Shopping Automation",
    description: "Automate in-store tasks like stock alerts and loyalty perks to help you run a smoother, smarter shop.",
    image: featureShopping,
    bgColor: "bg-blue-50",
  },
];

export const Features = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built to help your business grow every day
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We help you work smarter, stay organized, and make progress every single day through our AI Automations like:
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden rounded-3xl border-0 bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className={`${feature.bgColor} p-6`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-primary text-primary-foreground">
            <Link href="/solutions">
              Explore All Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
