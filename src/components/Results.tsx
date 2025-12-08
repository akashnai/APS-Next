"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";



export const Results = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
            Results (Because You Asked Nicely)
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-center">
            We know you didn’t ask, but showing off results is kind of our duty.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="flex flex-col h-full overflow-hidden rounded-[2rem] border-0 bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-7 grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50">
                      <study.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                    {study.title || study.category}
                  </h3>

                  <div className="mb-4">
                    <p className="text-xl font-bold text-foreground mb-1">
                      {study.metric}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {study.metricLabel}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center rounded-lg bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground">
                      {study.category}
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground">
                      Senior Level
                    </span>
                  </div>
                </div>

                <div className="mt-auto p-7 pt-0">
                   <div className="h-px w-full bg-border/50 mb-6"></div>
                   <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-foreground">{study.company}</p>
                      <p className="text-xs text-muted-foreground">Client</p>
                    </div>
                    <Button className="rounded-lg bg-foreground text-background hover:bg-foreground/90 font-semibold px-6" asChild>
                      <Link href={`/case-studies/${study.slug}`}>
                        Read Case Study
                      </Link>
                    </Button>
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
