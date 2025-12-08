"use client";

import { notFound, useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              {post.date}
            </div>

            <h1 className="text-5xl font-black mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full p-8 rounded-[2.5rem] bg-gradient-to-br ${post.gradient} mb-20`}
          >
            <div className="aspect-video w-full bg-white/50 rounded-3xl flex items-center justify-center">
              <post.icon className="w-24 h-24 text-foreground/20" />
            </div>
          </motion.div>

          <div className="grid grid-cols-12 gap-12">
            <div className="hidden lg:flex col-span-2 flex-col items-center gap-4 sticky top-32">
              {[Twitter, Facebook, Linkedin, Share2].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon">
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-8 prose dark:prose-invert max-w-none">
              {post.content}
            </div>
          </div>
        </article>

        {/* More Blog */}
        <section className="py-20 bg-muted/30 mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">More Blog</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Card
                  key={p.id}
                  className="p-6 cursor-pointer"
                  onClick={() => router.push(`/blog/${p.slug}`)}
                >
                  <div className={`h-48 rounded-xl bg-gradient-to-br ${p.gradient} mb-4`} />
                  <h3 className="text-lg font-bold">{p.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
