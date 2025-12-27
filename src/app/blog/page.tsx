
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { reader } from "@/app/reader";
import Image from "next/image";



export default async function BlogPage() {
  const posts = (await reader.collections.posts.all()).filter((post) => !post.entry.draft);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-purple-100">
      <Navbar />

      <main className="grow pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-6 text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-linear-to-b from-purple-100/50 to-transparent -z-10 blur-3xl pointer-events-none" />

          <div
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="animate-fade-up animate-duration-600"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-foreground">
              SaaS insights & tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Practical ideas and trends to help your software brand grow and stand out.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(async (post, index) => (
              <div
                key={post.slug}
                className={`animate-fade-up animate-duration-500 animate-delay-[${index * 0.1}s]`}
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-transparent overflow-hidden rounded-3xl cursor-pointer">
                    <div className={`h-64 w-full bg-linear-to-br ${post.entry.gradient} flex items-center justify-center p-6`}>
                      <div className="transition-transform duration-500 -z-10 group-hover:scale-110 flex items-center justify-center w-full h-full">
                      {post.entry.icon && (
                          <Image
                            className="-z-10 object-contain"
                            src={post.entry.icon}
                            alt={post.entry.title || "Blog post icon"}
                            height={100}
                            width={100}
                          />
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6 bg-white dark:bg-card">
                      <div className="text-sm font-medium text-muted-foreground mb-3">
                        {post.entry.date}
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-foreground group-hover:text-purple-600 transition-colors">
                        {post.entry.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            )
            )}
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
}
