# APS Website - Migration Guide: Vite to Next.js 16

This guide outlines the steps to migrate your existing Vite React application (`APS Website`) to your new Next.js 16 application (`aps-next`).

## Phase 1: Preparation & Setup

### 1. Verification
Ensure your new Next.js app is running and dependencies are installed.
```bash
cd path/to/aps-next
npm install
npm run dev
```

### 2. Tailind CSS v4 Setup
Your new app uses Tailwind CSS v4. Check your `src/app/globals.css` in the *new* app. It should look cleaner than v3.
*   **Action**: Copy your custom colors and theme settings.
    *   **Old**: `tailwind.config.ts` in Vite.
    *   **New**: In Tailwind v4, theme variables are often defined directly in CSS or strictly in the config. Since you are migrating, you might want to keep using a `tailwind.config.ts` for compatibility or migrate theme variables to CSS variables in `globals.css`.
    *   *Recommendation*: If you have extensive custom configs in `tailwind.config.ts`, copy that file to the new project. Tailwind v4 supports it (via `@tailwindcss/postcss`).

## Phase 2: Copying Static Assets & Core Code

### 1. Copy Folders
Copy the following directories from your Vite project's `src` folder to `src` in Next.js:
*   `src/components` -> `src/components`
*   `src/lib` (or `utils`) -> `src/lib`
*   `src/hooks` -> `src/hooks`
*   `src/data` -> `src/data` (e.g., your `caseStudies.ts`)
*   `src/types` -> `src/types` (if exists)

**Do NOT copy** `src/pages` directly yet. Next.js uses a different routing structure.

## Phase 3: Setup Global Providers
In Vite, `App.tsx` held your providers (`QueryClientProvider`, `TooltipProvider`, `Toaster`). In Next.js, these must be in a **Client Component** imported into the root layout.

**Create `src/components/providers.tsx` in the Next.js app:**
```tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
```

**Update `src/app/layout.tsx`:**
```tsx
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner"; // or your toaster choice

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
```

## Phase 4: Migrating Pages (Routing)
Next.js 16 uses the **App Router**. Files in `src/pages` (Vite) become folders in `src/app` (Next.js).

| Vite Path (`import`) | Next.js Path (File to create) | Notes |
| :--- | :--- | :--- |
| `src/pages/Index.tsx` | `src/app/page.tsx` | The home page. |
| `src/pages/About.tsx` | `src/app/about/page.tsx` | |
| `src/pages/Blog.tsx` | `src/app/blog/page.tsx` | |
| `src/pages/BlogPost.tsx` | `src/app/blog/[slug]/page.tsx` | Dynamic route `slug`. |
| `src/pages/Solutions.tsx` | `src/app/solutions/page.tsx` | |
| `src/pages/Results.tsx` | `src/app/results/page.tsx` | |
| `src/pages/CaseStudyDetail.tsx`| `src/app/case-studies/[slug]/page.tsx` | Dynamic route `slug`. |
| `src/pages/NotFound.tsx` | `src/app/not-found.tsx` | Special Next.js file for 404s. |

### How to Migration a Page Component:
1.  **Copy content**: Copy the code from Vite `src/pages/X.tsx` to Next.js `src/app/x/page.tsx`.
2.  **Add "use client"**: If the page uses hooks (`useState`, `useEffect`) or `framer-motion`, add `"use client";` at the very top.
3.  **Update Links**: Replace `react-router-dom` links.
    *   *Remove*: `import { Link } from "react-router-dom";`
    *   *Add*: `import Link from "next/link";`
    *   *Usage*: `<Link to="...">` becomes `<Link href="...">`.

## Phase 5: Migrating `Results.tsx` (Detailed Example)

You asked to safely copy `Results.tsx`. Here is how you modify it for Next.js.

**Original Issue**: It uses `framer-motion` (interactive) and `react-router-dom`.
**Fix**: Mark as client component and swap router.

**Step-by-step for `src/components/Results.tsx`:**

1.  **Copy the file** to the same path in Next.js: `src/components/Results.tsx`.
2.  **Add "use client"** at line 1.
3.  **Change Link imports**.

**Refactored Code for Next.js:**
```tsx
"use client"; // <--- IMPORTANT: Required for framer-motion

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // <--- CHANGED: from react-router-dom
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

interface ResultsProps {
  showAll?: boolean;
}

export const Results = ({ showAll = false }: ResultsProps) => {
  const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, 3);

  return (
    <section className={`bg-background ${showAll ? 'py-12' : 'py-16 md:py-24'}`}>
      <div className="container mx-auto px-6">
        {/* ... (rest of the code is identical) ... */}

                {/* Example of Link usage update: */}
                <div className="flex items-end justify-between border-t border-gray-50 pt-6">
                  <div>
                    <p className="text-base font-bold text-black">{study.company}</p>
                    <p className="text-xs text-gray-400 font-medium">Client</p>
                  </div>
                  <Button className="..." asChild>
                    {/* Link 'to' becomes 'href' */}
                    <Link href={`/case-studies/${study.slug}`}>
                      Read Case Study
                    </Link>
                  </Button>
                </div>
            </Card>
           </motion.div>
          ))}
        </div>

        {!showAll && (
          // ...
            <Button asChild ...>
              <Link href="/results"> 
                Explore All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          // ...
        )}
      </div>
    </section>
  );
};
```

## Phase 6: Handling Dynamic Routes (Case Studies)

For `src/pages/CaseStudyDetail.tsx` (which becomes `src/app/case-studies/[slug]/page.tsx`):

1.  **Params**: In Next.js, params are passed as props to the page, they are **Promises** in Next 15/16.
2.  **Refactoring**:

```tsx
// src/app/case-studies/[slug]/page.tsx
import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";

// This is a Server Component by default (good for SEO)
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Return your JSX here
  // If you need clientside interactivity, you might split the content into a 
  // separate component like <CaseStudyContent study={study} /> that has "use client"
  return (
    <div>
        <h1>{study.title}</h1>
        {/* ... */}
    </div>
  );
}
```

## Summary Checklist
- [ ] Install dependencies in Next.js (`framer-motion`, `lucide-react`, etc.).
- [ ] Copy `components`, `lib`, `hooks` folders.
- [ ] Create `providers.tsx` and wrap root layout.
- [ ] Re-create page structure in `src/app`.
- [ ] Convert `src/pages` content to `src/app` pages.
    - [ ] Add `"use client"` where needed.
    - [ ] Change `<Link to>` to `<Link href>`.
    - [ ] Change `useParams` usage to `page.tsx` props for dynamic routes.
- [ ] Test `npm run dev`.
