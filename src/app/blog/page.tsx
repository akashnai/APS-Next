"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";



export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-purple-100">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-6 text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-purple-100/50 to-transparent -z-10 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-foreground">
              SaaS insights & tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Practical ideas and trends to help your software brand grow and stand out.
            </p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-transparent overflow-hidden rounded-3xl cursor-pointer">
                    <div className={`h-64 w-full bg-gradient-to-br ${post.gradient} flex items-center justify-center p-6`}>
                      <div className="transition-transform duration-500 group-hover:scale-110 flex items-center justify-center w-full h-full">
                        {post.element}
                      </div>
                    </div>

                    <CardContent className="p-6 bg-white dark:bg-card">
                      <div className="text-sm font-medium text-muted-foreground mb-3">
                        {post.date}
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-foreground group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="rounded-full px-8 py-6 text-lg bg-[#6366F1] hover:bg-[#5558E6] text-white shadow-lg">
              Load More
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
