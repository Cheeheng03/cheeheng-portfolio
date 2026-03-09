"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, FileText, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResumeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resumeVersions = [
    // { name: "Product", url: "/resume-product.pdf" },
    { name: "DeFi Specialist", url: "/Tang Chee Heng_Resume_Defi.pdf" },
    { name: "Smart Contract", url: "/Tang Chee Heng_Resume_Smart_Contract.pdf" }
  ];

  return (
    <AnimatedSection id="contact" className="py-32 container mx-auto px-6 relative text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let&apos;s Connect / Hire Me</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
        Seeking opportunities in smart contract development, smart contract audits, on-chain research, protocol analysis, and product manager roles.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Link href="mailto:cheehengtang03@gmail.com" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto")}>
          <Mail size={20} /> Let&apos;s Connect / Hire Me
        </Link>
        
        {/* Resume Dropdown */}
        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
          <button 
            onClick={() => setIsResumeOpen(!isResumeOpen)}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }), 
              "rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto border-white/10 hover:bg-white/5 transition-all duration-300",
              isResumeOpen && "bg-white/5 border-white/20"
            )}
          >
            <Download size={20} /> View My Resume
            <ChevronDown size={16} className={cn("ml-1 transition-transform duration-300", isResumeOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {isResumeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
              >
                <div className="flex flex-col gap-1 text-left">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Select Version
                  </div>
                  {resumeVersions.map((resume, idx) => (
                    <Link 
                      key={idx}
                      href={resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsResumeOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium text-foreground/90 hover:text-white"
                    >
                      <div className="p-2 bg-white/5 rounded-lg">
                        <FileText size={16} className="text-primary" />
                      </div>
                      {resume.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <Link href="https://github.com/Cheeheng03" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/chee-heng-tang-51b080312/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </AnimatedSection>
  );
}
