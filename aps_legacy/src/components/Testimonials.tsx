import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


 


const reviews = [
  {
    img: "https://i.pravatar.cc/150?img=11",
    quote:
    "The UI is stunning and the rotation animation adds such a nice touch. It makes the testimonial section fun to interact with.",
    author: "Varteq Founder and CEO Neo Aid",
  },
  {
    img: "https://i.pravatar.cc/150?img=5",
    quote:
      "Outstanding service and support. The team understood our needs perfectly and delivered a solution that exceeded our expectations. Their lead scraping and outreach system filled our CRM and calendar with new leads every day.",
    author: "Fiachra MacFadden Sales Head Knowledge Products Pvt Ltd",
  },
  {
    img: "https://i.pravatar.cc/150?img=3",
    quote:
      "The custom AI chatbot they developed has revolutionized our customer service. Response times are down 85% and customer satisfaction is at an all-time high.",
    author: "Sunil Vedwal COO SRH Solar Pvt Ltd",
  },
  {
    img: "https://i.pravatar.cc/150?img=9",
    quote:
      "Professional, knowledgeable, and results-driven. AutoPilot Studio is the partner you want for AI automation projects.",
    author: "Vikas Rawat Interior Contractor ShreeVaidhahi Style",
  },
  {
    img: "https://i.pravatar.cc/150?img=32",
    quote:
      "They implemented ai in my emailing system now we can respond to parents under 3 min along with student information. Really appriciate what they are doing with Ai in Autopilot Studio",
    author: "Robert STEW Marketing Cunsoltent Freelancer",
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl text-left md:mt-2"
          >
            Loved by designers & teams
          </motion.h2>

          {/* Right Side: Content */}
          <div className="flex flex-col items-start space-y-8">
            {/* Avatar Row */}
            <div className="flex justify-start items-center gap-2 md:gap-4 flex-wrap sm:flex-nowrap">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    "rounded-xl shadow-md border-2 bg-background",
                    active === i
                      ? "scale-110 md:scale-125 -translate-y-1 border-primary shadow-xl z-20 rotate-0"
                      : "opacity-70 grayscale z-10 hover:opacity-100 hover:grayscale-0 hover:scale-110 hover:z-30 hover:rotate-0 hover:border-primary",
                    active !== i &&
                      (i % 2 === 0
                        ? "-rotate-3 md:-rotate-6 translate-y-1"
                        : "rotate-3 md:rotate-6 translate-y-1")
                  )}
                >
                  <Avatar className="w-8 h-8 md:w-12 md:h-12 rounded-xl">
                    <AvatarImage
                      src={review.img}
                      className="object-cover"
                      alt={review.author}
                    />
                    <AvatarFallback className="rounded-xl">
                      {review.author[0]}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="space-y-4 min-h-[200px]">
              <motion.blockquote
                key={active} // triggers fade animation on change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-xl font-medium text-foreground leading-relaxed text-left"
              >
                “{reviews[active].quote}”
              </motion.blockquote>

              {/* Author */}
              <motion.p
                key={active + "-author"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-muted-foreground font-medium text-left"
              >
                {reviews[active].author}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
