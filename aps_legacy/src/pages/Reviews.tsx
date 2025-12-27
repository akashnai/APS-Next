import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// Extended detailed reviews
const reviews = [
  {
    rating: 5,
    quote: "The UI is stunning and the rotation animation adds such a nice touch. It makes the testimonial section fun to interact with.",
    author: "Varteq Founder",
    role: "CEO Neo Aid",
    img: "https://i.pravatar.cc/150?img=11",
    date: "2 days ago"
  },
  {
    rating: 5,
    quote: "Outstanding service and support. The team understood our needs perfectly and delivered a solution that exceeded our expectations. Their lead scraping and outreach system filled our CRM and calendar with new leads every day.",
    author: "Fiachra MacFadden",
    role: "Sales Head, Knowledge Products Pvt Ltd",
    img: "https://i.pravatar.cc/150?img=5",
    date: "1 week ago"
  },
  {
    rating: 5,
    quote: "The custom AI chatbot they developed has revolutionized our customer service. Response times are down 85% and customer satisfaction is at an all-time high.",
    author: "Sunil Vedwal",
    role: "COO, SRH Solar Pvt Ltd",
    img: "https://i.pravatar.cc/150?img=3",
    date: "2 weeks ago"
  },
  {
    rating: 5,
    quote: "Professional, knowledgeable, and results-driven. AutoPilot Studio is the partner you want for AI automation projects.",
    author: "Vikas Rawat",
    role: "Interior Contractor, ShreeVaidhahi Style",
    img: "https://i.pravatar.cc/150?img=9",
    date: "3 weeks ago"
  },
  {
    rating: 5,
    quote: "They implemented AI in my emailing system now we can respond to parents under 3 min along with student information. Really appreciate what they are doing with AI in Autopilot Studio",
    author: "Robert STEW",
    role: "Marketing Consultant",
    img: "https://i.pravatar.cc/150?img=32",
    date: "1 month ago"
  },
  {
    rating: 5,
    quote: "The automation workflows they set up for us have saved us countless hours of manual data entry. Highly recommended!",
    author: "Sarah Jenkins",
    role: "Operations Manager, TechFlow",
    img: "https://i.pravatar.cc/150?img=41",
    date: "1 month ago"
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="container mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders and professionals have to say about working with AutoPilot Studio.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group h-full flex flex-col"
              >
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground mb-8 leading-relaxed flex-grow">
                  "{review.quote}"
                </blockquote>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                  <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                    <AvatarImage src={review.img} alt={review.author} />
                    <AvatarFallback>{review.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {review.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6 mt-32">
          <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our satisfied clients and experience the power of AI automation today.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
              Get Started Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
