"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export function Achievements() {
  const achievements = [
    {
      title: "University of Nottingham",
      image: "/university.png",
      tag: "ACADEMICS",
      prize: "First Class Honours",
      description: "Dean's List Scholarship Award Top 2% (2022, 2024). QS World Ranking: Top 100. BSc Computer Science with Artificial Intelligence.",
      glowColor: "rgba(59, 130, 246, 0.5)", // Blue glow
    },
    {
      title: "Scroll Open Hackathon",
      image: "/scroll.png", 
      tag: "HACKATHON",
      prize: "2nd Place ($15,000 USD)",
      description: "Co-founded Polystream, a DeFi yield aggregation protocol. Selected for the Scroll Campus accelerator program, and later securing $95k USD in Scroll Foundation investments and grants.",
      glowColor: "rgba(196, 231, 119, 0.5)", // Polystream green glow
    },
    {
      title: "ETH Global Bangkok",
      image: "/ethbangkok.png", 
      tag: "HACKATHON",
      prize: "Winner ($2,500 USD Total)",
      description: "Built DeESG, a decentralized ESG Scoring Platform. Won Chainlink 'Connect the World' ($2K) and Innovation on Scroll 5th Place ($500).",
      glowColor: "rgba(236, 72, 153, 0.5)", // Pink glow
    },
    {
      title: "ETH KL",
      image: "/ethkl.png", 
      tag: "HACKATHON",
      prize: "Winner ($2,000 USD Total)",
      description: "Built AI Guardian, an AI-powered deepfake detection platform. Won Best Community Application on Scroll ($1K) and ICP–Ethereum Chain Fusion Challenge ($1K).",
      glowColor: "rgba(168, 85, 247, 0.5)", // Purple glow
    }
  ];

  return (
    <AnimatedSection id="achievements" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Achievements & Hackathons</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-16 mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, i) => (
            <div key={i} className="perspective-1000 h-full">
              <motion.div 
                initial={{ 
                  opacity: 0, 
                  y: 150, 
                  x: (1.5 - i) * 100, // Starts bunched in the center
                  rotateY: 180, // Starts face down
                  rotateZ: (i - 1.5) * 15, // Fanned out like a hand of cards
                  scale: 0.8,
                  z: -100
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  x: 0,
                  rotateY: 0, 
                  rotateZ: 0,
                  scale: 1,
                  z: 0
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.2, 
                  delay: i * 0.2, // Deals them out one by one
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: -5,
                  boxShadow: `0 20px 40px -10px ${achievement.glowColor}` 
                }}
                className="group relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card Back (Visible initially when flipped 180) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ 
                    transform: "rotateY(180deg) translateZ(1px)", 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden" 
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:10px_10px] opacity-20" />
                  {/* CHT Logo on the back instead of generic circle */}
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center relative bg-black/50 backdrop-blur-sm">
                    <span className="text-xl font-bold tracking-tighter text-white/50">CHT.</span>
                  </div>
                </div>

                {/* Card Front (Visible after flip) */}
                <div 
                  className="w-full h-full flex flex-col bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden cursor-default transition-all duration-300 relative z-10"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translateZ(1px)" // Fix Safari glitching
                  }}
                >
                  {/* Card Image Header */}
                  <div className="h-40 w-full bg-white/5 relative border-b border-white/10 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-60" />
                    
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 z-0"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    
                    {/* Fallback pattern */}
                    <div className="hidden absolute inset-0 bg-white/5 flex items-center justify-center z-0">
                      <span className="text-white/20 font-bold text-4xl tracking-tighter">
                        {achievement.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white/80 uppercase">
                        {achievement.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
                    {/* Holographic foil glare effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${achievement.glowColor}, transparent 70%)` }}
                    />

                    <h3 className="text-lg font-bold mb-2 text-foreground/90 group-hover:text-white transition-colors relative z-10">
                      {achievement.title}
                    </h3>
                    
                    <div className="mb-4 inline-block relative z-10">
                      <span className="text-sm font-semibold bg-white/10 text-white px-3 py-1 rounded-lg border border-white/5">
                        {achievement.prize}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
