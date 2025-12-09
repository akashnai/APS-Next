import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Results } from "@/components/Results";

const ResultsPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32">
                <div className="container mx-auto px-6 text-center mb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-bold mb-6"
                    >
                        Our Results
                    </motion.h1>
                    <p className="text-xl text-muted-foreground">
                        Real impact delivered for our clients.
                    </p>
                </div>
                <Results showAll={true} />
            </main>
            <Footer />
        </div>
    );
};

export default ResultsPage;
