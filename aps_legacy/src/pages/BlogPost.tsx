
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

// Mocking the hero image component for the specific 'Best practices' post
// to match the reference image's software UI look
const HeroImage = () => (
  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white dark:bg-zinc-900 aspect-video w-full relative group">
     {/* Browser Chrome/Header */}
     <div className="h-8 md:h-12 bg-gray-100 dark:bg-zinc-800 flex items-center px-4 space-x-2 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex space-x-1.5">
           <div className="w-3 h-3 rounded-full bg-red-400"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
           <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 text-center text-xs text-gray-400 font-mono">draftr.com/features</div>
     </div>
     
     {/* App UI Mockup */}
     <div className="p-6 md:p-8 grid grid-cols-12 gap-6 h-full bg-white dark:bg-zinc-900">
        {/* Sidebar */}
        <div className="hidden md:block col-span-2 space-y-4">
           <div className="w-10 h-10 rounded-full bg-indigo-600 mb-6"></div>
           <div className="space-y-2">
              <div className="h-2 w-16 bg-gray-100 dark:bg-zinc-800 rounded"></div>
              <div className="h-2 w-20 bg-gray-100 dark:bg-zinc-800 rounded"></div>
              <div className="h-2 w-12 bg-gray-100 dark:bg-zinc-800 rounded"></div>
           </div>
        </div>
        {/* Main Content */}
        <div className="col-span-12 md:col-span-10 bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-6 relative overflow-hidden">
             {/* Abstract organic shape */}
             <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
                <div className="h-8 w-1/3 bg-gray-200 dark:bg-zinc-700 rounded mb-4"></div>
                <div className="h-32 w-full bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-4 mb-4">
                   <div className="w-16 h-16 bg-gradient-to-tr from-amber-200 to-amber-500 rounded-full mx-auto mb-4 blur-[1px]"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div className="h-24 bg-white dark:bg-zinc-900 rounded-xl shadow-sm"></div>
                     <div className="h-24 bg-white dark:bg-zinc-900 rounded-xl shadow-sm"></div>
                </div>
             </div>
        </div>
     </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  // If post not found, redirect to blog home (or could show 404)
  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

  // Filter other posts for "More blog" section
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-purple-100">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Article Header */}
        <article className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {post.date}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground leading-[1.1]">
                    {post.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                    {post.excerpt}
                </p>
                
                {/* Author Info */}
                {/* <div className="flex items-center justify-center mt-8 space-x-3">
                    <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full object-cover border-2 border-background shadow-sm" />
                    <div className="text-left text-sm">
                        <div className="font-bold text-foreground">{post.author}</div>
                        <div className="text-muted-foreground">{post.authorRole}</div>
                    </div>
                </div> */}
            </div>

             {/* Hero Image Container */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className={`w-full p-4 md:p-8 rounded-[2.5rem] bg-gradient-to-br ${post.gradient} mb-20`}
            >
                {/* Use the specific HeroImage for the main post, or a generic placeholder for others */}
                {post.id === "1" ? <HeroImage /> : (
                    <div className="aspect-video w-full bg-white/50 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg">
                        <post.icon className="w-24 h-24 text-foreground/20" />
                    </div>
                )}
            </motion.div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                {/* Social Share - Left Fixed/Sticky */}
                <div className="hidden lg:block col-span-2">
                    <div className="sticky top-32 flex flex-col items-center space-y-4">
                        <div className="text-xs font-bold text-muted-foreground uppercase writing-vertical-rl mb-2 tracking-widest">Share</div>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted text-muted-foreground hover:text-foreground">
                            <Twitter className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted text-muted-foreground hover:text-foreground">
                            <Facebook className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted text-muted-foreground hover:text-foreground">
                            <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted text-muted-foreground hover:text-foreground">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                
                {/* Main Text Content */}
                <div className="col-span-1 lg:col-span-8 lg:col-start-3 prose prose-lg dark:prose-invert prose-headings:font-bold prose-p:text-muted-foreground max-w-none">
                     {post.content}
                </div>

                {/* Right Side - maybe CTA or empty for whitespace balance */}
                <div className="hidden lg:block col-span-2"></div>
            </div>
            
            <div className="border-t border-border mt-20 mb-16 pt-10">
                <div className="flex items-center justify-between">
                     <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Categorized in</h3>
                     <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                        {post.category}
                     </span>
                </div>
            </div>

        </article>

        {/* More Blog Section */}
        <section className="bg-muted/30 py-20 mt-10">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                     <h2 className="text-3xl font-bold tracking-tight">More blog</h2>
                     <Button variant="default" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6">
                        View all blog
                     </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                        <Card 
                            key={relatedPost.id} 
                            className="group border-none shadow-none bg-transparent cursor-pointer"
                            onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                        >
                            <div className={`h-48 rounded-2xl bg-gradient-to-br ${relatedPost.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1`}>
                                 <relatedPost.icon className="w-12 h-12 text-foreground/20" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs font-semibold text-muted-foreground">
                                    {relatedPost.date}
                                </div>
                                <h3 className="text-lg font-bold leading-tight group-hover:text-indigo-600 transition-colors">
                                    {relatedPost.title}
                                </h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
