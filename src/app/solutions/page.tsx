import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Solutions = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-16">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-bold mb-6"
                    >
                        Our Solutions
                    </motion.h1>
                    <p className="text-xl text-muted-foreground">
                        Explore our library of pre-built automation workflows.
                    </p>
                    <div className="mt-12 p-8 border border-dashed border-border rounded-xl">
                        <p className="text-muted-foreground">Coming Soon...</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Solutions;
