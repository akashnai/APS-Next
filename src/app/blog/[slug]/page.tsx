import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { reader } from "@/app/reader";
import Link from "next/link";
import Markdoc from "@markdoc/markdoc";
import { markdocConfig } from "@/../keystatic.config";
import React from "react";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return notFound();

  const { node } = await post.content();

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  const relatedPosts = (await reader.collections.posts.all()).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="grow pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              {post.date}
            </div>

            <h1 className="text-5xl font-black mb-6">{post.title}</h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full p-8 rounded-[2.5rem] bg-linear-to-br ${post.gradient} mb-20`}
          >
            <div className="aspect-video w-full bg-white/50 rounded-3xl flex items-center justify-center">
              {/* <post.icon className="w-24 h-24 text-foreground/20" /> 
            </div>
          </motion.div> */}
          <div
            className={`animate-fade-up w-full p-8 rounded-[2.5rem] bg-linear-to-br ${post.gradient} mb-8`}
          >
            <div className="aspect-video w-full bg-white/50 rounded-3xl flex items-center justify-center">
              <div className="w-full h-full p-12 flex items-center justify-center text-foreground/20">
                {post.icon && (
                  <img
                    src={
                  post.icon.discriminant === 'upload' 
                    ? (post.icon.value ?? "") 
                    : post.icon.value.url
                }
                referrerPolicy="no-referrer"
                    alt={post.title}
                    className="max-w-full max-h-full object-contain"
                    style={
                      post.icon.discriminant === 'external' ? {
                        width: post.icon.value.width ? `${post.icon.value.width}px` : '100%',
                        height: post.icon.value.height ? `${post.icon.value.height}px` : '100%',
                      } : {}
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-12">
            <div className="hidden lg:flex col-span-2 flex-col items-center gap-4 sticky top-32">
              {[Twitter, Facebook, Linkedin, Share2].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon">
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-8 prose dark:prose-invert max-w-none">
              {Markdoc.renderers.react(renderable, React)}
            </div>
          </div>
        </article>

        {/* More Blog */}
        <section className="py-20 bg-muted/30 mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">More Blog</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <Card className="p-6 cursor-pointer">
                    <div
                      className={`h-48 rounded-xl bg-linear-to-br ${p.entry.gradient} mb-4`}
                    />
                    <h3 className="text-lg font-bold">{p.entry.title}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map((slug: string) => ({
    slug,
  }));
}
