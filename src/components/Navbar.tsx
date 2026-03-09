"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? "bg-black/60 md:bg-white/5 backdrop-blur-2xl md:backdrop-blur-xl border border-white/10 md:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] support-[backdrop-filter]:bg-black/60 md:support-[backdrop-filter]:bg-white/5" 
          : "bg-black/40 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border border-white/5 md:border-transparent"
      }`}
    >
      <div className="px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Cheeheng03"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center h-10 w-[40px] hover:w-[100px] rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-center shrink-0 w-10 h-10">
              <Github size={18} className="text-foreground" />
            </div>
            <span className="text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/chee-heng-tang-51b080312/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center h-10 w-[40px] hover:w-[110px] rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-center shrink-0 w-10 h-10">
              <Linkedin size={18} className="text-foreground" />
            </div>
            <span className="text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav 
          className="hidden md:flex items-center gap-2"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative px-3 py-1.5" onMouseEnter={() => setHoveredItem(item.name)}>
              <Link
                href={item.href}
                className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                  hoveredItem === item.name ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
              {hoveredItem === item.name && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30, 
                    mass: 2,
                    duration: 0.3
                  }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="md:hidden bg-[#050505] border border-white/20 rounded-2xl overflow-hidden absolute top-full left-0 w-full shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-50"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
