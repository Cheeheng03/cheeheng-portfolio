"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Blockchain & Smart Contracts",
      skills: [
        { name: "Solidity", color: "bg-slate-400" },
        { name: "Foundry", color: "bg-orange-500" },
        { name: "Hardhat", color: "bg-yellow-400" },
        { name: "Ethers.js", color: "bg-blue-500" },
        { name: "Wagmi", color: "bg-emerald-500" },
        { name: "Chainlink", color: "bg-blue-600" },
        { name: "Pyth", color: "bg-purple-500" },
        { name: "RedStone", color: "bg-red-500" },
        { name: "Account Abstraction", color: "bg-pink-500" },
      ],
    },
    {
      title: "DeFi & On-chain Research Tools",
      skills: [
        { name: "DeFiLlama", color: "bg-blue-400" },
        { name: "Dune Analytics", color: "bg-orange-500" },
        { name: "DeBank", color: "bg-rose-500" },
        { name: "Etherscan", color: "bg-blue-700" },
        { name: "Tenderly", color: "bg-purple-500" },
        { name: "The Graph", color: "bg-indigo-500" },
        { name: "Moralis", color: "bg-emerald-500" },
        { name: "Infura", color: "bg-yellow-500" },
        { name: "Alchemy", color: "bg-blue-500" },
      ],
    },
    {
      title: "AI / Machine Learning",
      skills: [
        { name: "Python", color: "bg-blue-500" },
        { name: "Scikit-learn", color: "bg-orange-500" },
        { name: "CatBoost", color: "bg-yellow-500" },
        { name: "XGBoost", color: "bg-red-500" },
        { name: "K-Means", color: "bg-cyan-500" },
        { name: "FAISS", color: "bg-sky-500" },
        { name: "LangChain", color: "bg-emerald-500" },
        { name: "HuggingFace", color: "bg-yellow-400" },
        { name: "OpenAI", color: "bg-emerald-600" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", color: "bg-cyan-400" },
        { name: "Next.js", color: "bg-white" },
        { name: "Vue.js", color: "bg-emerald-500" },
        { name: "React Native", color: "bg-cyan-500" },
        { name: "TypeScript", color: "bg-blue-500" },
        { name: "JavaScript", color: "bg-yellow-400" },
        { name: "Tailwind CSS", color: "bg-sky-400" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", color: "bg-emerald-500" },
        { name: "Express", color: "bg-gray-400" },
        { name: "FastAPI", color: "bg-teal-500" },
        { name: "Docker", color: "bg-blue-500" },
      ],
    },
    {
      title: "Databases & Dev Tools",
      skills: [
        { name: "PostgreSQL", color: "bg-blue-500" },
        { name: "TimescaleDB", color: "bg-yellow-500" },
        { name: "MongoDB", color: "bg-emerald-500" },
        { name: "Firebase", color: "bg-yellow-400" },
        { name: "SQL", color: "bg-blue-400" },
        { name: "Git", color: "bg-orange-600" },
        { name: "PM2", color: "bg-slate-400" },
        { name: "VSCode", color: "bg-blue-500" },
        { name: "K6", color: "bg-purple-500" },
      ],
    }
  ];

  return (
    <AnimatedSection id="skills" className="py-24 container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
      <div className="w-12 h-1 bg-primary rounded-full mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i} 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground/90">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-2 flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/80 hover:bg-white/10 transition-all cursor-default"
                >
                  <span className={`w-2 h-2 rounded-full ${skill.color} shadow-[0_0_8px_var(--tw-shadow-color)] shadow-${skill.color.replace('bg-', '')}`} />
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
