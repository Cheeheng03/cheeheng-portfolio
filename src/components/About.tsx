"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MousePointer2 } from "lucide-react";

export function About() {
  const [showImage, setShowImage] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "About Me";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, 150);
      } else if (isDeleting) {
        setTypedText("");
        currentIndex = 0;
        isDeleting = false;
        timeout = setTimeout(type, 500); // Wait before typing again
      } else {
        isDeleting = true;
        timeout = setTimeout(type, 2000); // Wait before clearing
      }
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatedSection id="about" className="py-24 container mx-auto px-6 max-w-5xl">
      <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        
        {/* Left Side: Animation & Title */}
        <div 
          className="w-full md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 relative flex flex-col items-center justify-center min-h-[300px] overflow-hidden bg-black/20 cursor-pointer group"
          onClick={() => setShowImage(!showImage)}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 rounded-full border border-primary/30 border-t-primary/80"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border border-blue-500/30 border-b-blue-500/80"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-16 h-16 rounded-full bg-primary/20 blur-xl"
            />
          </div>
          
          {/* 3D Flip Container */}
          <div 
            className="relative z-10 w-48 h-48"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="w-full h-full relative"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: showImage ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Front Side: "About Me" */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-full bg-[#0A0A0A] border border-white/20 shadow-xl overflow-hidden"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {/* Subtle internal gradient to make it pop */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <h2 className="text-xl md:text-2xl font-medium text-foreground relative z-10 flex items-center justify-center">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="w-[2px] h-6 bg-foreground ml-1 inline-block"
                  />
                </h2>
              </div>

              {/* Back Side: Profile Image */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden border border-white/20 bg-[#0A0A0A] shadow-xl"
                style={{ 
                  backfaceVisibility: "hidden", 
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)" 
                }}
              >
                <img 
                  src="/me.png" 
                  alt="Chee Heng Tang" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Click Hint */}
          <motion.div 
            className="absolute bottom-6 right-6 flex items-center gap-2 text-xs text-muted-foreground/60 group-hover:text-primary transition-colors"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>{showImage ? "Flip back" : "Click me"}</span>
            <MousePointer2 size={14} className="opacity-70" />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-2/3 p-8 md:p-12 flex items-center bg-white/[0.02]">
          <p className="font-mono text-sm md:text-sm text-primary leading-relaxed tracking-tight">
            Blockchain engineer and DeFi protocol builder, co-founder of Polystream — an ERC-4626 multi-chain yield aggregation protocol integrating 35+ DeFi strategies. My work focuses on smart contract architecture, yield strategy design, and on-chain protocol analysis, building secure DeFi infrastructure and full-stack Web3 applications. I graduated First-Class in Computer Science with Artificial Intelligence from the University of Nottingham Malaysia.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
