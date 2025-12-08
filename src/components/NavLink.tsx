"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className" | "href"> {
  to: string;
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to; 

    const finalClassName = typeof className === "function" 
      ? className({ isActive, isPending: false })
      : cn(className, isActive && activeClassName);

    return (
      <Link
        ref={ref}
        href={to}
        className={finalClassName}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
