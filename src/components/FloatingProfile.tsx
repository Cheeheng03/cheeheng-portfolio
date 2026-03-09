"use client";

import { motion } from "framer-motion";
import { LineChart, Cpu, Rocket } from "lucide-react";

export function FloatingProfile() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto aspect-square flex items-center justify-center pointer-events-none mt-10 md:mt-0">
      {/* Rotating gradient rings for space-like effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/20 border-t-primary/50"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 sm:inset-8 rounded-full border border-blue-500/20 border-b-blue-500/50"
      />
      
      {/* Central avatar/image container */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-md border border-white/10 p-2 shadow-2xl flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />
        
        {/* Placeholder for actual image */}
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/10 relative bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]">
          <span className="text-xl font-bold text-foreground tracking-tight px-4 text-center">
            Hi I&apos;m Chee Heng ✌️
          </span>
          {/* EDIT: Add your actual `<img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover" />` here */}
        </div>
      </motion.div>

      {/* Floating glassmorphism message cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{ 
          opacity: { duration: 0.5, delay: 0.8 },
          x: { duration: 0.5, delay: 0.8 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
        className="absolute -right-12 sm:-right-24 md:-right-32 top-0 sm:top-10 md:top-16 bg-background/80 backdrop-blur-xl border border-white/20 p-3 sm:p-4 rounded-2xl shadow-xl max-w-[150px] sm:max-w-[200px] z-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
          <div className="p-1.5 sm:p-2 bg-primary/20 text-primary rounded-lg shrink-0">
            <Rocket size={14} className="sm:w-4 sm:h-4" />
          </div>
          <span className="font-semibold text-xs sm:text-sm">Founding Engineer</span>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Building DeFi infrastructure.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1.2 },
          x: { duration: 0.5, delay: 1.2 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        className="absolute -left-12 sm:-left-24 md:-left-32 bottom-0 sm:bottom-16 md:bottom-24 bg-background/80 backdrop-blur-xl border border-white/20 p-3 sm:p-4 rounded-2xl shadow-xl max-w-[150px] sm:max-w-[200px] z-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
          <div className="p-1.5 sm:p-2 bg-blue-500/20 text-blue-400 rounded-lg shrink-0">
            <LineChart size={14} className="sm:w-4 sm:h-4" />
          </div>
          <span className="font-semibold text-xs sm:text-sm">DeFi Research</span>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Yield strategies & DeFi architectures.</p>
      </motion.div>
    </div>
  );
}
