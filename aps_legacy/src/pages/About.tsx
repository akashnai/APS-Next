import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Linkedin, Dribbble, Instagram, Youtube } from "lucide-react";
import { ThreeDButton } from "@/components/ui/ThreeDButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navbar />
            
            <main className="pt-24 pb-0">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-24 lg:mb-32">
                    <div className="text-center max-w-5xl mx-auto mb-16 space-y-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
                        >
                            Meet the humans behind the workflows
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            We build smart automations, but it’s our human
 
                            <span className="block mt-1 text-sm text-muted-foreground/80 font-medium tracking-wide uppercase">
                                creativity that makes the Ai brilliant
                            </span>
                        </motion.p>
                    </div>

                    {/* <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img 
                            src="/about-hero.png" 
                            alt="APS Team" 
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div> */}
                </section>

                {/* From Idea to Impact */}
                {/* <section className="container mx-auto px-6 mb-32 max-w-4xl text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-2xl font-bold mb-8">From Idea to Impact</h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                At APS, we're rethinking the way we produce digital products — from brief to deliverables, and finally to impact.
                                We believe that great work happens when teams are free from the mundane constraints of traditional workflows.
                            </p>
                            <p>
                                Design is no longer just about aesthetics — it's about speed, clarity, and collaboration. APS is here to redefine
                                how data shapes creative decisions. We're creating an ecosystem where ideas can flow
                                without getting lost in complexity.
                            </p>
                            <p>
                                Each interaction with our products gets you a step closer to your vision, removing barriers and bridging the 
                                gap between creativity and execution. That's the space where only we can exist.
                            </p>
                        </div>
                    </motion.div>
                </section> */}

                 {/* Team Section */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Meet the team</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            At APS we're a small but passionate team of designers and product
                            thinkers who believe that great tools create great outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { 
                                name: "Madhav Agarwal", 
                                role: "Founder", 
                                img: "/team-1.png",
                                socials: {
                                    linkedin: "https://www.linkedin.com/in/madhav-agarwal-ai/",
                                    instagram: "https://www.instagram.com/automatewithmadhav/",
                                    youtube: "https://www.youtube.com/@MadhavTheAiGuy"
                                }
                            },
                            { name: "Vaibhav Khandelwal", role: "Co-Founder", img: "/team-2.png",
                                socials: {
                                    linkedin: "https://www.linkedin.com/in/vaibhav-khandelwal-123732217/",
                                }
                             },
                            { name: "Akshit Kumawat", role: "Social media/marketing head", img: "/team-3.png",
                                socials: {
                                    linkedin: "https://www.linkedin.com/in/akshit-kumawat-8ab5b922a/",
                                }
                            },
                            { name: "Manas", role: "Head developer", img: "/team-4.png" }
                        ].map((member, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary mb-4">
                                    <img 
                                        src={member.img} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                                <div className="flex gap-3 text-muted-foreground">
                                    {member.socials ? (
                                        <>
                                            {member.socials.linkedin && (
                                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                                                </a>
                                            )}
                                            {member.socials.instagram && (
                                                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                                    <Instagram className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                                                </a>
                                            )}
                                            {member.socials.youtube && (
                                                <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer">
                                                    <Youtube className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                

                {/* Stats Section */}
                <section className="bg-foreground text-background py-24 mb-32 rounded-3xl container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 md:px-16">
                        {[
                            { label: "Customer satisfaction score", value: "98%" },
                            { label: "Faster output in brand dev", value: "12x" },
                            { label: "Projects delivered via APS", value: "60+" },
                            { label: "Talented individuals in APS we care", value: "85%" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base opacity-70 leading-tight">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Why We Exist */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-secondary/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                     <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                     </div>
                                </div>
                                <img src="/about-ui.png" alt="UI Visualization" className="w-full h-auto rounded-lg shadow-sm" />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Why we exist</h2>
                            <ul className="space-y-6">
                                {[
                                    "Because people deserve more time, less repetitive tasks",
                                    "Delivering impact by transforming ideas into real‑world results",
                                    "Syncing data from thoughts to workflows shouldn't be confusing or costly.",
                                    "Making technology simple, human‑friendly, and powerful",
                                    "Creativity thrives on constraints, but not when constraints stifle scaling.",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 min-w-5">
                                            <ArrowRight className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Logos */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                         {["Susico", "KOBE", "On_Lot", "Thrones", "oslo", "infinity", "Berlin", "U-Turn"].map((logo, i) => (
                             <span key={i} className="text-xl font-bold font-serif">{logo}</span>
                         ))}
                    </div>
                </section>

               
                
                {/* Join CTA */}
                 <section className="container mx-auto px-6 mb-32">
                    <div className="bg-secondary/20 rounded-3xl p-12 text-center">
                        <h2 className="text-2xl font-bold mb-6 max-w-2xl mx-auto">
                            Join us in building tools that make teamwork faster, clearer, and more connected.
                        </h2>
                         <Button className="rounded-full px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90">
                            Open roles
                        </Button>
                    </div>
                </section>
                
                 {/* Pre-Footer Hero */}
                <section className="relative py-24 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                     <div className="container mx-auto px-6 text-center relative z-10">
                         <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Take your creative workflow <br />
                            to the next level
                         </h2>
                         <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                            <ThreeDButton size="lg" onClick={() => navigate("/tools")} className="group">
                                Try for free
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </ThreeDButton>
                           
                         </div>
                     </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
