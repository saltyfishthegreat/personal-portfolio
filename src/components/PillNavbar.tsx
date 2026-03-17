"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Work Samples", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const PillNavbar: React.FC = () => {
  const pathname = usePathname();
const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav className="flex justify-center w-full pt-8 pb-4 absolute top-0 left-0 right-0 z-50">
      <div className="flex space-x-2 p-1 rounded-full border-2 border-black bg-black">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredPath === item.href;
          const showBackground = isActive || isHovered;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 rounded-full transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
              onMouseEnter={() => setHoveredPath(item.href)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {showBackground && (
                <motion.span
                  layoutId="pill-bg"
                  className="absolute inset-0 bg-white rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${showBackground ? 'text-black' : 'text-white'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default PillNavbar;
