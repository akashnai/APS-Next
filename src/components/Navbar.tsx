"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { ThreeDButton } from "./ui/ThreeDButton";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Tools", path: "/tools" },
    { name: "Blog", path: "/blog" },
    { name: "Solutions", path: "/solutions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-foreground">APS</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className="text-base font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Login Button */}
            <Button 
              className="hidden md:inline-flex rounded-full bg-black w-20" 
              variant="default" 
              size="default"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </Button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-foreground p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="w-full rounded-full bg-black mt-2" 
                size="lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Sheet */}
      <Sheet open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <SheetContent side="right" className="w-full sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Welcome back</SheetTitle>
            <SheetDescription>
              Sign in to your account to continue
            </SheetDescription>
          </SheetHeader>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <ThreeDButton className="w-full" size="sm">
              Sign In
            </ThreeDButton>
            <p className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </motion.div>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};
