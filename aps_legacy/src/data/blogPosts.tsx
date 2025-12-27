
import { Star, Zap, Circle, Gauge, Users, Activity } from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  gradient: string;
  icon: any;
  element?: React.ReactNode;
  content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-practices-showcasing-features",
    title: "Best practices for showcasing features",
    excerpt: "Show your product's value clearly and confidently with these best practices for presenting SaaS features that engage and convert.",
    date: "Oct 13, 2025",
    author: "Sarah Chen",
    authorRole: "Product Designer",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    category: "Design",
    gradient: "from-[#D3E4FD] to-[#FFD1D1]",
    icon: Star,
    element: (
      <div className="relative w-32 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
         <div className="w-8 h-8 rounded-full bg-blue-500/20 mr-2"></div>
         <div className="space-y-2">
            <div className="w-16 h-2 bg-gray-100 rounded"></div>
            <div className="w-12 h-2 bg-gray-100 rounded"></div>
         </div>
         <div className="absolute -top-2 -right-2 bg-white p-1 rounded-full shadow-sm">
             <Star className="w-3 h-3 text-black fill-black" />
         </div>
      </div>
    ),
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4 mt-8">Introduction</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Your SaaS product may be packed with powerful features—but if users don't understand them, they won't see the value.
          The way you showcase features can make or break conversions. Great feature presentation balances clarity, design, and storytelling to help users instantly grasp what makes your product special.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Why Feature Presentation Matters</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          People don't buy features; they buy solutions. The job of your website and product pages is to show how each feature solves a specific user pain point.
          When features are presented clearly—with visuals, benefits, and context—users connect the dots between what your product does and how it improves their workflow.
        </p>

        <div className="bg-muted/50 p-6 rounded-xl border-l-4 border-primary mb-8 italic text-lg text-foreground/80">
          "Your features should tell a story—how your product turns user challenges into effortless wins."
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Best Practices for Highlighting SaaS Features</h2>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-muted-foreground">
          <li><strong className="text-foreground">Lead with benefits, not specs:</strong> Instead of listing technical terms, explain why the feature matters.</li>
          <li><strong className="text-foreground">Use visuals effectively:</strong> Pair every feature with screenshots, GIFs, or short videos that demonstrate real use cases.</li>
          <li><strong className="text-foreground">Group related features:</strong> Organize them by purpose—like collaboration, automation, or analytics—for easier scanning.</li>
          <li><strong className="text-foreground">Keep descriptions short:</strong> Use concise, action-oriented copy that users can skim quickly.</li>
          <li><strong className="text-foreground">Include customer proof:</strong> Add quotes or testimonials showing how real users benefit from specific features.</li>
          <li><strong className="text-foreground">Make it interactive:</strong> Use hover effects, demos, or mini-previews to let users explore features before signing up.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-8">Structuring a Strong Features Section</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Start with your most impactful features first. These are the ones that solve major user problems or differentiate your product.
          Follow a visual rhythm—alternate between text and imagery, keep consistent spacing, and ensure every section ends with a clear call-to-action like "Learn More" or "Try it Free."
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          The best SaaS feature sections don't just list capabilities—they tell a story of value.
          By focusing on clarity, relevance, and visual storytelling, you turn technical details into meaningful reasons for users to take the next step.
        </p>
      </>
    )
  },
  {
    id: "2",
    slug: "visual-storytelling-complex-products",
    title: "Visual storytelling for complex products",
    excerpt: "How to use graphics and layout to explain difficult concepts without overwhelming your users.",
    date: "Oct 15, 2025",
    author: "Mike Ross",
    authorRole: "UX Director",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    category: "Strategy",
    gradient: "from-[#FDE6BA] to-[#FFE8E8]",
    icon: Zap,
    element: (
        <div className="relative w-20 h-20">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-yellow-300 rounded-full blur-[1px] transform rotate-12 shadow-inner"></div>
             <div className="absolute inset-4 bg-[#FDEDBA] rounded-full blur-[2px]"></div>
        </div>
    ),
    content: (
        <>
        <h2 className="text-2xl font-bold mb-4 mt-8">The Power of Visuals</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
            Complex products often suffer from the "wall of text" problem. Visual storytelling breaks down barriers.
        </p>
        <p className="mb-6 text-muted-foreground leading-relaxed">
            More content coming soon...
        </p>
        </>
    )
  },
  {
    id: "3",
    slug: "microinteractions-boost-ux",
    title: "How microinteractions boost user experience",
    excerpt: "Small details that make a big difference in how your application feels to the user.",
    date: "Oct 18, 2025",
    author: "Alex Kim",
    authorRole: "Frontend Dev",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    category: "Development",
    gradient: "from-[#E0D9FF] to-[#F0F0FF]",
    icon: Circle,
    element: (
        <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border border-purple-300/50 rounded-full"></div>
            <div className="absolute w-16 h-16 border border-purple-400/50 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
                <span className="text-white text-xs">⚡</span>
            </div>
        </div>
    ),
    content: (
        <>
            <h2 className="text-2xl font-bold mb-4 mt-8">Small Details, Big Impact</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
                Microinteractions are the subtle moments where the user and design interact.
            </p>
        </>
    )
  },
  {
    id: "4",
    slug: "optimizing-dashboard-performance",
    title: "Optimizing dashboard performance metrics",
    excerpt: "Techniques for rendering large datasets without compromising on speed or interactivity.",
    date: "Oct 20, 2025",
    author: "David Lee",
    authorRole: "Tech Lead",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    category: "Engineering",
    gradient: "from-[#FFF4D9] to-[#FFD6D6]",
    icon: Gauge,
    element: (
        <div className="relative w-24 h-16 bg-white/50 rounded-t-full border-t-4 border-orange-400 flex items-end justify-center overflow-hidden">
             <div className="w-1 h-8 bg-black origin-bottom transform -rotate-45 mb-0"></div>
             <div className="absolute bottom-0 w-2 h-2 bg-black rounded-full"></div>
        </div>
    ),
    content: (
        <>
             <h2 className="text-2xl font-bold mb-4 mt-8">Performance Matters</h2>
             <p className="mb-6 text-muted-foreground leading-relaxed">
                 Dashboards are central to SaaS apps, but they can be slow. Here is how to fix that.
             </p>
        </>
    )
  },
  {
    id: "5",
    slug: "collaborative-tools-remote-teams",
    title: "Collaborative tools for remote teams",
    excerpt: "Building features that bring distributed teams closer together.",
    date: "Oct 22, 2025",
    author: "Emily Watson",
    authorRole: "Product Manager",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    category: "Product",
    gradient: "from-[#FAD0C4] to-[#FFD1FF]",
    icon: Users,
    element: (
        <div className="bg-white/60 p-3 rounded-xl shadow-sm flex gap-2 items-center">
             <div className="w-6 h-6 rounded-full bg-blue-400"></div>
             <div className="w-6 h-6 rounded-full bg-purple-400 -ml-2 border-2 border-white"></div>
             <div className="w-6 h-6 rounded-full bg-pink-400 -ml-2 border-2 border-white"></div>
             <div className="w-8 h-1 bg-gray-300 rounded-full ml-1"></div>
        </div>
    ),
    content: (
        <>
             <h2 className="text-2xl font-bold mb-4 mt-8">Remote First</h2>
             <p className="mb-6 text-muted-foreground leading-relaxed">
                 Collaboration is key.
             </p>
        </>
    )
  },
  {
    id: "6",
    slug: "future-ai-interfaces",
    title: "The future of AI in user interfaces",
    excerpt: "Predicting the next big shifts in how humans interact with artificial intelligence.",
    date: "Oct 25, 2025",
    author: "James Bond",
    authorRole: "Futurist",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    category: "Design",
    gradient: "from-[#D4FC79] to-[#96E6A1]",
    icon: Activity,
    element: (
        <div className="relative">
             <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-150"></div>
             </div>
             <svg className="w-24 h-12 absolute top-4 left-0 text-blue-500/50" viewBox="0 0 100 50">
                 <path d="M0 25 Q 25 0 50 25 T 100 25" fill="none" stroke="currentColor" strokeWidth="2" />
             </svg>
        </div>
    ),
    content: (
        <>
             <h2 className="text-2xl font-bold mb-4 mt-8">AI is here</h2>
             <p className="mb-6 text-muted-foreground leading-relaxed">
                 And it is changing everything.
             </p>
        </>
    )
  }
];
