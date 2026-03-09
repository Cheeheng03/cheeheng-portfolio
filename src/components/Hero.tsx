"use client";

import { motion } from "framer-motion";
import { FloatingProfile } from "./FloatingProfile";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center w-full"
        >
          <FloatingProfile />
        </motion.div>
      </div>
    </section>
  );
}
