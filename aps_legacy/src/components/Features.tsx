import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import featureAiInfluencer from "@/assets/feature-ai-influencer.png";
import featureVoipCalling from "@/assets/feature-voip-calling.png";
import featureLeadScrapping from "@/assets/feature-lead-scrapping.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const features = [
  {
    title: "AI Social Media Influencer",
    description: "Let AI craft engaging and on-brand social media content that resonates with your audience, saving you time and boosting results.",
    image: featureAiInfluencer,
    bgColor: "bg-purple-50",
    link: "/contact",
    details: {
      version: "Version 2.4.0",
      date: "December 12, 2025",
      sections: [
        {
          title: "New",
          icon: Sparkles,
          color: "text-amber-500",
          items: [
            "Auto-generate captions from image analysis.",
            "Smart hashtag recommendations based on trends.",
            "Multi-platform scheduling (Instagram, LinkedIn, X)."
          ]
        },
        {
          title: "Improvements",
          icon: Zap,
          color: "text-blue-500",
          items: [
            "Faster content generation engine (2x speedup).",
            "Enhanced tone matching for brand consistency.",
            "Improved analytics dashboard with engagement metrics."
          ]
        }
      ]
    }
  },
  {
    title: "VoIP Calling",
    description: "Easily set up VoIP calling systems to make and receive calls online, ideal for remote and global communication.",
    image: featureVoipCalling,
    bgColor: "bg-orange-50",
    link: "/contact",
    details: {
      version: "Version 1.8.2",
      date: "November 28, 2025",
      sections: [
        {
          title: "New Features",
          icon: Sparkles,
          color: "text-amber-500",
          items: [
            "Integration with CRM tools for caller ID retrieval.",
            "Call recording and automated transcription.",
            "Visual voicemail with text preview."
          ]
        },
        {
          title: "Fixes",
          icon: Wrench,
          color: "text-emerald-500",
          items: [
            "Resolved audio latency issues in low-bandwidth regions.",
            "Fixed call drop issues during network switching.",
            "Corrected timestamp errors in call logs."
          ]
        }
      ]
    }
  },
  {
    title: "Lead Scrapping system",
    description: "Automated Lead scrapping and qualifying system providing you leads to cater every morning",
    image: featureLeadScrapping,
    bgColor: "bg-blue-50",
    link: "/contact",
    details: {
      version: "Version 3.1.0",
      date: "December 5, 2025",
      sections: [
        {
          title: "New Capabilities",
          icon: Sparkles,
          color: "text-amber-500",
          items: [
            "Automated low-stock reordering triggers.",
            "Customer loyalty tier management system.",
            "Real-time shelf monitoring integration."
          ]
        },
        {
          title: "Improvements",
          icon: Zap,
          color: "text-blue-500",
          items: [
            "Optimized checkout process integration.",
            "Better mobile support for inventory scanning app.",
            "Enhanced reporting for peak shopping hours."
          ]
        }
      ]
    }
  },
];

interface FeaturesProps {
  showAll?: boolean;
}

export const Features = ({ showAll = false }: FeaturesProps) => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);
  const displayedFeatures = showAll ? features : features.slice(0, 3);

  return (
    <section className={`bg-background ${showAll ? 'py-12' : 'py-24 md:py-32'}`}>
      <div className="container mx-auto px-6">
        {!showAll && (
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
        )}

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="group overflow-hidden rounded-3xl border-0 bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full cursor-pointer hover:ring-2 hover:ring-primary/20"
                onClick={() => setSelectedFeature(feature)}
              >
                <div className={`${feature.bgColor} p-2`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedFeature && (
            <Dialog open={!!selectedFeature} onOpenChange={(open) => !open && setSelectedFeature(null)}>
              <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-3xl border-0 bg-background/95 backdrop-blur-xl shadow-2xl [&>button]:hidden">
                <div className="relative flex flex-col h-full max-h-[90vh]">
                  {/* Content Container */}
                  <div className="p-8 overflow-y-auto">
                    
                    <div className="flex items-start justify-between mb-6">
                      <div>
                          <h2 className="text-3xl font-bold text-foreground leading-tight mb-2">
                          {selectedFeature.title}
                        </h2>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">
                            {selectedFeature.details.version}
                          </span>
                          <span>—</span>
                          <span>{selectedFeature.details.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {selectedFeature.description}
                    </p>

                    <div className="space-y-8">
                      {selectedFeature.details.sections.map((section, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 mb-4">
                            <section.icon className="w-5 h-5 text-foreground" />
                            <h4 className="font-semibold text-foreground text-lg">{section.title}</h4>
                          </div>
                          <ul className="space-y-3 pl-1">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                                <span className="block w-1.5 h-1.5 mt-2.5 rounded-full bg-foreground/20 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-10 pt-4 border-t gap-3">
                       <Button onClick={() => setSelectedFeature(null)} variant="outline" className="text-base font-medium">
                         Close
                       </Button>
                       <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium">
                         <Link to={selectedFeature.link}>
                            Get Started
                         </Link>
                       </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>

        {!showAll && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-primary text-primary-foreground">
              <Link to="/solutions">
                Explore All Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
