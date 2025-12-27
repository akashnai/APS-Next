
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    );
  }

  // If detailed data is missing (for the placeholder studies), show a simpler view or coming soon
  if (!study.title) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-6">{study.company}</h1>
          <p className="text-xl text-muted-foreground mb-8">{study.description}</p>
          <div className="p-8 border rounded-lg bg-secondary/10 inline-block">
            <p className="font-semibold">Detailed Case Study Coming Soon</p>
            <Button onClick={() => navigate("/")} className="mt-4" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 py-24 md:py-32 max-w-7xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mb-8 hover:bg-transparent pl-0 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 border-b pb-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary mb-2 uppercase">Autopilot Studio</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {study.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                {study.subtitle}
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-80 bg-secondary/5 rounded-xl border p-6"
          >
            <div className="space-y-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Client Profile</p>
              <h3 className="text-xl font-bold">{study.company}</h3>
              <p className="text-muted-foreground">{study.category}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Left Column - Problem & Architecture */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Problem Statement */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-lg font-bold">!</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Problem Statement</h3>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8 text-muted-foreground border-l-4 border-red-200 pl-6 py-2">
                <p>{study.problemStatement?.main}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {study.problemStatement?.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-red-500 mb-2 text-sm uppercase">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

             {/* Solution Architecture */}
             <section>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Solution Architecture</h3>
              <div className="bg-secondary/5 border rounded-2xl p-8 overflow-x-auto">
                 <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[600px]">
                    <div className="flex flex-col items-center gap-3 text-center w-32">
                        <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 border shadow-sm flex items-center justify-center text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <span className="font-bold text-sm">Google Sheets</span>
                    </div>
                    
                    <div className="h-0.5 flex-1 bg-border w-full md:w-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-center w-32">
                        <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 border shadow-sm flex items-center justify-center text-orange-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <span className="font-bold text-sm">Auto Trigger</span>
                    </div>

                    <div className="h-0.5 flex-1 bg-border w-full md:w-auto"></div>

                    <div className="flex flex-col items-center gap-3 text-center w-32">
                        <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 border shadow-sm flex items-center justify-center text-purple-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                        </div>
                        <span className="font-bold text-sm">AI Conversation</span>
                    </div>

                    <div className="h-0.5 flex-1 bg-border w-full md:w-auto"></div>

                    <div className="flex flex-col items-center gap-3 text-center w-32">
                        <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 border shadow-sm flex items-center justify-center text-blue-500">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <span className="font-bold text-sm">Smart Handoff</span>
                    </div>
                 </div>
              </div>
            </section>
          </div>

          {/* Right Column - Tech Stack & Timeline */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0F1E] text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="font-bold mb-6 text-blue-100 uppercase tracking-widest text-sm border-b border-white/10 pb-4">Technology Stack</h3>
              <ul className="space-y-4">
                {study.techStack?.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="font-medium text-sm md:text-base">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="bg-card border rounded-2xl p-8">
              <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Project Timeline</h3>
              <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:h-full before:w-[2px] before:bg-border">
                {study.timeline?.map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                    <span className="text-xs font-bold text-primary uppercase mb-1 block">{item.week}</span>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline & Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Pipeline Vertical Flow */}
            <section>
              <div className="mb-10">
                 <h2 className="text-3xl font-bold mb-2">Automation Pipeline</h2>
                 <p className="text-primary font-bold tracking-widest text-sm uppercase">Intelligent Call Flow Logic</p>
              </div>

              <div className="space-y-6">
                 {study.pipeline?.map((step, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6"
                   >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0">
                          {step.step}
                        </div>
                        {idx !== (study.pipeline?.length || 0) - 1 && (
                          <div className="w-0.5 flex-1 bg-border my-2"></div>
                        )}
                      </div>
                      <div className="pb-8">
                        <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                   </motion.div>
                 ))}
                 
                 <div className="flex gap-4 pl-16 pt-2">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg text-sm font-bold text-center border border-green-200 dark:border-green-800">
                      Success<br/><span className="text-xs font-normal opacity-80">Update CRM / SMS</span>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-bold text-center border border-blue-200 dark:border-blue-800">
                      Escalation<br/><span className="text-xs font-normal opacity-80">Smart Handoff</span>
                    </div>
                 </div>
              </div>
            </section>

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold mb-10 border-b pb-4">Key Benefits & Outcomes</h2>
              
              <div className="grid gap-0 border rounded-xl overflow-hidden divide-y">
                {study.outcomes?.map((outcome, idx) => (
                  <div key={idx} className="grid sm:grid-cols-2 p-6 hover:bg-secondary/20 transition-colors">
                     <div className="font-bold text-foreground/80">{outcome.metric}</div>
                     <div className="text-muted-foreground mt-2 sm:mt-0">{outcome.outcome}</div>
                  </div>
                ))}
              </div>
            </section>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center bg-secondary/10 rounded-3xl p-12 md:p-20">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your workflow?</h2>
           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free consultation to see how we can implement similar results for your business.</p>
           <Button size="lg" className="rounded-full px-8 h-12 text-base" onClick={() => navigate("/contact")}>
             Get Your Automation Plan
           </Button>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
