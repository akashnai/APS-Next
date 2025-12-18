
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { reader } from "@/app/reader";
import Image from "next/image";

interface ResultsProps {
  showAll?: boolean;
}

export default async function Results ({ showAll = false }: ResultsProps) {
  const studies = await reader.collections.caseStudies.all();
  const displayedStudies = showAll ? studies : studies.slice(0, 3);

  return (
    <section
      className={`bg-background ${showAll ? "py-12" : "py-16 md:py-24"}`}
    >
      <div className="container mx-auto px-6">
        {!showAll && (
          <div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.6 }}
            className="animate-fade-up animate-once animate-duration-600 mb-12 md:mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
              Results (Because You Asked Nicely)
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-center">
              We know you didn&apos;t ask, but showing off results is kind of
              our duty.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {displayedStudies.map(({ entry: study, slug }, index) => (
            <div
              key={study.company}
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              // transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`animate-fade-up animate-once animate-duration-600 animate-delay-[${index * 0.2}s]`}
            >
              <Card className="group flex flex-col h-full bg-white rounded-4xl border border-gray-100 p-8 shadow-sm hover:shadow-glow hover:border-primary/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center justify-center">
                    {study.icon?.src ?? <Image
                      src={study.icon.src}
                      alt={study.icon.alt}
                      height={study.icon.height as number}
                      width={study.icon.width as number}
                      className="w-8 h-8 text-primary stroke-[1.5]"
                    />}
                  </div>
                </div>

                <div className="grow mb-8">
                  <p className="text-sm font-bold text-black mb-2">
                    {study.title || study.category}
                  </p>

                  <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                    {study.metric.label} {study.metric.outcome}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {study.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      Senior Level
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between border-t border-gray-50 pt-6">
                  <div>
                    <p className="text-base font-bold text-black">
                      {study.company}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">Client</p>
                  </div>
                  <Button
                    className="rounded-full bg-black text-white hover:bg-primary font-medium px-5 h-10 text-sm"
                    asChild
                  >
                    <Link href={`/case-studies/${slug}`}>Read Case Study</Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {!showAll && (
          <div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.6, delay: 0.4 }}
            className="animate-fade-up animate-once animate-duration-600 animate-delay-400 mt-12 md:mt-16 text-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-black text-white hover:bg-primary"
            >
              <Link href="/results">
                Explore All Case Studies 
                {/* <ArrowRight className="ml-2 w-5 h-5" /> */}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};


export async function generateStaticParams() {
  const slugs = await reader.collections.caseStudies.list();

  return slugs.map((slug: string) => ({
    slug,
  }));
}
