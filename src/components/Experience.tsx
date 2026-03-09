"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Co-founder, Protocol Engineer",
      company: "Polystream",
      period: "Feb 2025 - Present",
      description: "Co-founded a DeFi yield aggregation protocol. Secured $95k in Scroll Foundation investments. Designed ERC-4626 vault architecture, integrated 35+ DeFi protocols, and led smart contract security audits.",
      technologies: ["Solidity", "Foundry", "ERC-4626", "DeFi", "Security Audits", "Full-Stack"],
    },
    {
      role: "Hackathon Grinding",
      company: "ETHKL, ETH Global Bangkok, Scroll Open",
      period: "2024 - 2025",
      description: "Participated and won multiple Web3 hackathons. Selected into the Scroll Campus Accelerator program, later leading to incorporation and investment by the Scroll Foundation.",
      technologies: ["Web3", "Smart Contracts", "DeFi", "Hackathons"],
    },
    {
      role: "Fullstack AI Intern",
      company: "Vilor Berhad",
      period: "June 2024 - Sep 2024",
      description: "Developed an internal intranet platform for centralized document management and HR workflows. Processed 13 million WhatsApp messages to build a training dataset and fine-tuned an AI chatbot prototype.",
      technologies: ["Python", "AI / ML", "Full-Stack", "Data Processing"],
    },
    {
      role: "Software Engineering Group Project",
      company: "University of Nottingham Malaysia",
      period: "2023 - 2024",
      description:
        "Built a decentralized voting DAO as part of a university software engineering group project, marking the start of my Web3 journey. Developed Solidity smart contracts for proposal creation, voting, and token rewards, and built a React-based frontend integrated with MetaMask and IPFS for decentralized interaction and storage.",
      technologies: ["Solidity", "React", "MetaMask", "IPFS", "JavaScript", "Web3"],
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-12"></div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:space-y-12 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1 h-[10px] w-[10px] rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>

              <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                {/* Title & Company */}
                <div className={`mb-2 md:mb-0 flex flex-col ${i % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2 md:text-left"}`}>
                  <div className="text-primary font-mono text-sm mb-1">{exp.period}</div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-muted-foreground text-sm font-medium">{exp.company}</div>
                </div>

                {/* Description & Tech */}
                <div className={`bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors ${i % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1 md:text-right"}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-white/10 text-xs text-foreground/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
