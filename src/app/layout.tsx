import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "APS",
  description: "Automated Process Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <Providers>
            {children}
            <Toaster />
          </Providers>
      </body>
    </html>
  );
}
