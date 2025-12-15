"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

/**
 * Navbar Component
 * Redesigned for Professional Feminine Theme.
 * Glassmorphism, Elegant Serif Logo, Clean Layout.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-background/50 backdrop-blur-lg border-b border-foreground/5 supports-[backdrop-filter]:bg-background/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold font-serif tracking-wide hover:opacity-80 transition-opacity text-foreground"
        >
          Rithiga <span className="text-primary">S</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors group tracking-wide uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
          ))}
          <div className="pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-accent/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg animate-fade-in">
          <div className="flex flex-col p-6 gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors font-serif"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border w-full flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
