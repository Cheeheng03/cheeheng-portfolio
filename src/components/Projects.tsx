"use client";

import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, MousePointer2, BookOpen, AppWindow } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectLink = {
  label: string;
  url: string;
  type: "github" | "website" | "docs" | "app";
};

type Metric = {
  text: string;
  color: string;
  bg: string;
  border: string;
};

type BadgeStyle = {
  color: string;
  bg: string;
  border: string;
};

type Project = {
  title: string;
  category: string;
  image: string;
  expandedImages?: string[];
  bgColor: string;
  span: string;
  description: string;
  whatIBuilt?: string[];
  tags: string[];
  integratedProtocols?: string[];
  infrastructure?: string[];
  infrastructureStyle?: BadgeStyle;
  metrics?: Metric[];
  links: ProjectLink[];
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject || fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, fullscreenImage]);

  const projects: Project[] = [
    {
      title: "Polystream",
      category: "DEFI PROTOCOL",
      image: "/polystream.png",
      expandedImages: [
        "/polystream.png",
        "/polystream1.png",
        "/polystream2.png",
        "/polystream3.png",
      ],
      bgColor: "bg-[#0A0A0A]",
      span: "md:col-span-1 md:row-span-1",
      description: "Co-founded Polystream, a multi-chain DeFi yield aggregation protocol originating from the Scroll Open Hackathon (2nd place). Selected into the Scroll Campus accelerator and later secured $95k in Scroll Foundation investments and grants. Designed and built the core ERC-4626 vault architecture enabling automated yield strategies across multiple DeFi protocols.",
      whatIBuilt: [
        "Architected ERC-4626 multi-chain vault systems supporting multiple assets across 3 blockchain networks",
        "Integrated 35+ DeFi protocols and yield strategies across lending, liquidity, yield-tokenized and cross-chain systems",
        "Engineered capital allocation mechanisms targeting 8–12% APY across diverse yield strategies",
        "Implemented curator-controlled strategy execution with safeguarded and whitelisted smart contract interactions",
        "Developed Foundry testing infrastructure with unit, integration, invariant and fuzz testing",
        "Built backend infrastructure including event listeners, oracle integrations, monitoring services and vault trackers",
        "Developed full-stack products including a web dApp, mobile DeFi app and curator dashboard",
        "Led Cantina smart contract audit collaboration and implemented mitigation fixes"
      ],
      tags: [
        "Solidity", "Foundry", "ERC-4626", "Intent-Based Deposits",
        "Oracle Infrastructure", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "React Native"
      ],
      integratedProtocols: [
        "Aave V3", "Across", "Balancer", "CCTP", "Compound V3", "Convex", "Curve", "Ethena",
        "Euler", "Fluid", "Merkl", "Morpho", "PancakeSwap", "Pendle", "Scroll Bridge",
        "Spectra", "Stargate", "Auto Finance", "Uniswap V3",
      ],
      infrastructure: [
        "Chainlink", "Pyth", "RedStone", "DefiLlama API", "LI.FI"
      ],
      metrics: [
        { text: "35+ protocol strategy integrations", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" },
        { text: "3 blockchain networks", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" },
        { text: "$95k Scroll Foundation Investments + Grants", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" },
        { text: "2nd place at Scroll Open Global Hackathon", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" }
      ],
      links: [
        { label: "Landing Page", url: "https://www.polystream.xyz/", type: "website" },
        { label: "Docs", url: "https://docs-eta-one-24.vercel.app/", type: "docs" },
        { label: "Source Code", url: "https://github.com/polystream-core", type: "github" }
      ]
    },
    {
      title: "DeESG",
      category: "AI, ORACLES & IOT",
      image: "/deesg.png",
      expandedImages: [
        "/deesg5.png",
        "/deesg4.png",
        "/deesg1.png",
        "/deesg2.png",
        "/deesg3.png"
      ],
      bgColor: "bg-[#0A0A0A]",
      span: "md:col-span-1 md:row-span-1",
    
      description:
        "Built a decentralized ESG evaluation system combining AI, IoT data, privacy-preserving feedback and blockchain infrastructure. DeESG leverages Chainlink oracles to aggregate AI model outputs, IoT environmental data and encrypted employee feedback to generate transparent ESG scores and reward sustainable behavior.",
    
      whatIBuilt: [
        "Developed Solidity smart contracts for ESG scoring, token incentives and on-chain data verification",
        "Built and operated a Chainlink node with automation jobs to bridge IoT sensor data to smart contracts for AI aggregation",
        "Implemented tokenomics system (GTK) rewarding verified ESG improvements through automated smart contract distribution",
        "Engineered IoT pipeline using Raspberry Pi sensors capturing environmental metrics such as CO2, temperature and humidity to be stored on chain",
        "Integrated AI clustering models to classify company ESG risk levels using environmental and governance datasets",
        "Developed full-stack Web3 frontend for ESG dashboards, feedback participation and token claiming"
      ],
    
      tags: [
        "Solidity",
        "Chainlink",
        "IoT",
        "AI Clustering",
        "FHE",
        "Next.js",
        "Smart Contracts",
      ],
    
      infrastructure: [
        "Chainlink Node",
        "Chainlink External Adapters",
        "Chainlink Automation",
        "Raspberry Pi IoT Sensors",
        "The Graph",
        "Inco Protocol (FHE)"
      ],
    
      metrics: [
        { text: "ETHGlobal Bangkok Hackathon Project", color: "text-[#ff8a3d]", bg: "bg-[#ff8a3d]/10", border: "border-[#ff8a3d]/20" },
        { text: "$2,000 Chainlink Prize Winner", color: "text-[#ff8a3d]", bg: "bg-[#ff8a3d]/10", border: "border-[#ff8a3d]/20" },
        { text: "$500 Scroll Prize Winner", color: "text-[#ff8a3d]", bg: "bg-[#ff8a3d]/10", border: "border-[#ff8a3d]/20" },
        { text: "IoT environmental data pipeline with on-chain oracle aggregation", color: "text-[#ff8a3d]", bg: "bg-[#ff8a3d]/10", border: "border-[#ff8a3d]/20" }
      ],
    
      links: [
        { label: "Showcase", url: "https://ethglobal.com/showcase/deesg-2me7g", type: "website" },
        { label: "Website", url: "https://de-esg.vercel.app/", type: "website" },
        { label: "Source Code", url: "#", type: "github" }
      ]
    },
    {
      title: "AI Guardian",
      category: "AI & CONTENT INTEGRITY",
      image: "/aiguardian.png",
      expandedImages: [
        "/vid1.mp4",
        "/vid2.mp4",
        "/posting.mp4"
      ],
      bgColor: "bg-[#0A0A0A]",
      span: "md:col-span-1 md:row-span-1",
    
      description:
        "Built an on-chain content verification system for detecting AI-generated deepfakes and protecting original media. AI Guardian combines blockchain verification, deepfake detection models, and decentralized storage to flag manipulated content and prove originality across multiple EVM chains.",
    
      whatIBuilt: [
        "Developed Solidity smart contracts for deepfake verification, originality tracking and social media post registry",
        "Implemented image hash storage and deepfake scoring mechanisms with immutable on-chain records",
        "Built originality verification contracts to detect reposted or stolen images using cryptographic hashes",
        "Integrated IPFS storage for decentralized image hosting and metadata tracking",
        "Developed full-stack Web3 frontend enabling users to upload media, verify originality and detect deepfakes",
        "Integrated multi-chain deployment across Scroll Sepolia and Manta Sepolia networks",
        "Connected on-chain verification results with AI deepfake detection models deployed on ICP"
      ],
    
      tags: [
        "Solidity",
        "Next.js",
        "TailwindCSS",
        "IPFS",
        "AI Deepfake Detection",
        "Web3",
        "Ethers.js",
        "Thirdweb"
      ],
    
      infrastructure: [
        "Scroll Sepolia",
        "Manta Sepolia",
        "Internet Computer Protocol (ICP)",
        "IPFS",
        "World ID"
      ],
    
      metrics: [
        { text: "Best Community Application on Scroll — $1,000 Prize", color: "text-[#22d3ee]", bg: "bg-[#22d3ee]/10", border: "border-[#22d3ee]/20" },
        { text: "ICP–Ethereum Chain Fusion Challenge — $1,000 Prize", color: "text-[#22d3ee]", bg: "bg-[#22d3ee]/10", border: "border-[#22d3ee]/20" },
        { text: "On-chain deepfake detection with AI inference", color: "text-[#22d3ee]", bg: "bg-[#22d3ee]/10", border: "border-[#22d3ee]/20" },
        { text: "Multi-chain deployment across Scroll & Manta networks", color: "text-[#22d3ee]", bg: "bg-[#22d3ee]/10", border: "border-[#22d3ee]/20" }
      ],
    
      links: [
        { label: "Devfolio", url: "https://devfolio.co/projects/ai-guardian-safeguarding-onchain-9b6e", type: "website" },
        { label: "Slides", url: "https://www.canva.com/design/DAGSw7NJYsE/TEKCEUPHBA3NQV-gJSAe7Q/edit", type: "website" },
        { label: "Source Code", url: "https://github.com/kens1ang/AIGuardian", type: "github" }
      ]
    },
    {
      title: "Web3 Wallet Credit Scoring System",
      category: "AI & BLOCKCHAIN",
      image: "/wallet.png",
      expandedImages: [
        "/wallet4.png",
        "/wallet2.png",
        "/wallet3.png",
        "/wallet5.png",
        "/fyp.mov",
      ],
      bgColor: "bg-[#0A0A0A]",
      span: "md:col-span-1 md:row-span-1",
    
      description:
        "Final year project building a decentralized credit scoring system for Web3 wallets. The system analyzes on-chain wallet behavior using machine learning models and stores generated credit scores on-chain via Chainlink oracle infrastructure.",
    
      whatIBuilt: [
        "Designed an end-to-end pipeline for collecting and processing on-chain wallet transaction data",
        "Engineered behavioral wallet features including transaction frequency, token swaps, and DeFi interactions",
        "Trained CatBoost, Random Forest, and Gradient Boosting models for credit score prediction",
        "Built feature extraction and model inference APIs for real-time scoring",
        "Developed Chainlink external adapters connecting smart contracts with off-chain ML model services",
        "Implemented Solidity smart contracts to store wallet credit scores on-chain",
        "Built a Web3 frontend enabling users to connect MetaMask and retrieve their credit score"
      ],
    
      tags: [
        "Python",
        "Machine Learning",
        "CatBoost",
        "Random Forest",
        "Gradient Boosting",
        "Chainlink",
        "Solidity",
        "Hardhat",
        "Node.js",
        "React"
      ],
    
      infrastructure: [
        "Chainlink External Adapters",
        "Chainlink Node",
        "Moralis API",
        "Etherscan API"
      ],
    
      metrics: [
        { text: "3 machine learning models (CatBoost, RF, GBM)", color: "text-[#ff5fa2]", bg: "bg-[#ff5fa2]/10", border: "border-[#ff5fa2]/20" },
        { text: "18 on-chain behavioral wallet features", color: "text-[#ff5fa2]", bg: "bg-[#ff5fa2]/10", border: "border-[#ff5fa2]/20" },
        { text: "End-to-end pipeline from data collection to on-chain scoring", color: "text-[#ff5fa2]", bg: "bg-[#ff5fa2]/10", border: "border-[#ff5fa2]/20" },
        { text: "Chainlink oracle integration for off-chain ML inference", color: "text-[#ff5fa2]", bg: "bg-[#ff5fa2]/10", border: "border-[#ff5fa2]/20" }
      ],
    
      links: [
        { label: "Source Code", url: "https://github.com/Cheeheng03/COMP3025-20407274", type: "github" }
      ]
    },
    {
      title: "Clawmono",
      category: "AI & PAYMENT INFRA",
      image: "/clawmono.png",
      expandedImages: [
        "/clawmono1.png",
        "/clawmono2.png",
        "/clawmono3.png"
      ],
      bgColor: "bg-[#0A0A0A]",
      span: "md:col-span-1 md:row-span-1",
    
      description:
        "Built a payment infrastructure for AI agents on Monad Testnet. Agents register on-chain identities (ERC-8004), receive constrained smart wallets with spending policies, and pay for services through an x402-compatible payment proxy with programmable revenue splitting.",
    
      whatIBuilt: [
        "Implemented ERC-8004 on-chain identity system for agent registration and reputation tracking",
        "Developed ERC-4337 smart accounts with spending limits, allowed targets and operator permissions",
        "Built ERC-4626 agent pools enabling revenue sharing between agents and liquidity providers",
        "Implemented x402-compatible payment gateway proxy for service monetization",
        "Developed service registry and payment routing system for agent-accessible APIs",
        "Built reputation reporting and score oracle contracts for agent performance tracking",
        "Developed full-stack platform including Next.js frontend, payment proxy server and agent tooling",
        "Deployed and tested the full architecture on Monad Testnet"
      ],
    
      tags: [
        "Solidity",
        "ERC-8004",
        "ERC-4337",
        "ERC-4626",
        "OpenClaw",
        "Smart Accounts",
        "Next.js",
        "Node.js",
        "Foundry",
        "Web3 Payments"
      ],
    
      infrastructure: [
        "Monad Testnet",
        "EntryPoint (ERC-4337)",
        "x402 Payment Proxy",
        "EIP-712 Signatures"
      ],
      infrastructureStyle: {
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
      },
    
      metrics: [
        { text: "ERC-8004 on-chain agent identity system", color: "text-[#ff4d6d]", bg: "bg-[#ff4d6d]/10", border: "border-[#ff4d6d]/20" },
        { text: "ERC-4337 smart wallet architecture", color: "text-[#ff4d6d]", bg: "bg-[#ff4d6d]/10", border: "border-[#ff4d6d]/20" },
        { text: "x402-compatible payment gateway for AI services", color: "text-[#ff4d6d]", bg: "bg-[#ff4d6d]/10", border: "border-[#ff4d6d]/20" },
        { text: "Full-stack AI agent marketplace infrastructure", color: "text-[#ff4d6d]", bg: "bg-[#ff4d6d]/10", border: "border-[#ff4d6d]/20" }
      ],
    
      links: [
        { label: "Website", url: "https://www.clawmono.app/", type: "website" },
        { label: "Demo Video", url: "https://x.com/jalldoes/status/2023261248809562602?s=46&t=CkoPdWy-KiXFwfXhEBBgdg", type: "website" },
        { label: "Source Code", url: "https://github.com/PragmaMoney/clawmono-monorepo", type: "github" }
      ]
    },
    {
      title: "x402Canvas",
      category: "ONCHAIN SOCIAL & PAYMENT",
      image: "/x402.png",
      expandedImages: [
        "/x4021.png",
        "/x402.png",
        "/x4022.png",
        "/x4023.png"
      ],
      bgColor: "bg-[#0A0A0A]",
      span: "md:col-span-1 md:row-span-1",
    
      description:
        "Built an on-chain collaborative pixel canvas on Base powered by x402 payments. Users pay to paint pixels, earn token rewards for participation, trigger snapshot NFTs as the canvas evolves, and unlock a Uniswap trading pool once the full canvas supply is minted.",
    
      whatIBuilt: [
        "Developed Solidity smart contracts for pixel minting, reward distribution and milestone-based progression",
        "Designed tokenomics rewarding users with 5,000 CANVAS tokens for every pixel painted",
        "Implemented snapshot NFT logic minting a new collectible milestone NFT every 10,000 painted pixels",
        "Engineered canvas supply progression culminating in Uniswap pool deployment after 140,000 total pixels are minted",
        "Integrated x402-based payment flow for minting and canvas interaction on Base",
        "Supported frontend development for the collaborative canvas, rewards flow and NFT milestone experience"
      ],
    
      tags: [
        "Solidity",
        "x402",
        "Base",
        "Tokenomics",
        "NFTs",
        "Uniswap",
        "Next.js",
      ],
    
      infrastructure: [
        "Base",
        "x402 Payment Flow",
        "OpenSea",
        "Uniswap"
      ],
    
      metrics: [
        { text: "5,000 CANVAS tokens rewarded per painted pixel", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" },
        { text: "Snapshot NFT minted every 10,000 painted pixels", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" },
        { text: "140,000 total pixel supply unlocks Uniswap pool launch", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" },
        { text: "x402-powered on-chain minting and participation flow", color: "text-[#c4e777]", bg: "bg-[#c4e777]/10", border: "border-[#c4e777]/20" }
      ],
    
      links: [
        { label: "Live Website", url: "#", type: "website" },
        { label: "Source Code", url: "#", type: "github" }
      ]
    }
  ];

  return (
    <AnimatedSection id="projects" className="py-24 container mx-auto px-6 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projects</h2>
        <div className="w-12 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {projects.map((project, i) => (
          <motion.div 
            key={i} 
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            {/* Image Container */}
            <motion.div 
              className={`w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 relative ${project.bgColor}`}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
                {/* Click to view text */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span>Click for details</span>
                  <MousePointer2 size={16} />
                </div>
              </div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0 z-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback Initial Letters */}
              <div className="absolute inset-0 hidden items-center justify-center text-white/10 font-bold text-6xl tracking-tighter group-hover:scale-105 transition-transform duration-700 ease-out z-0 bg-white/5">
                {project.title.substring(0, 2).toUpperCase()}
              </div>
            </motion.div>
            
            {/* Text details beneath image */}
            <div className="flex flex-col px-1">
              <h3 className="font-semibold text-base text-foreground/90 group-hover:text-foreground transition-colors">{project.title}</h3>
              <p className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase mt-1">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                className="w-full max-w-5xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Images (Bottom on mobile, Left on desktop) */}
                <div 
                  className="w-full md:w-1/2 h-[40vh] md:h-auto md:min-h-0 relative bg-[#050505] border-t md:border-t-0 md:border-r border-white/5 flex-shrink-0 flex flex-col gap-6 p-6 overflow-y-auto custom-scrollbar order-2 md:order-1"
                >
                  {(selectedProject.expandedImages?.length ? selectedProject.expandedImages : [selectedProject.image]).map((mediaSrc, idx) => {
                    const isVideo = mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.mov');
                    
                    return (
                      <div key={idx} className="relative w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0 min-h-[200px] cursor-zoom-in group/img" onClick={() => setFullscreenImage(mediaSrc)}>
                        {isVideo ? (
                          <video 
                            src={mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-contain max-h-[70vh] z-10 group-hover/img:scale-[1.02] transition-transform duration-500"
                          />
                        ) : (
                          <img 
                            src={mediaSrc} 
                            alt={`${selectedProject.title} ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-[70vh] z-10 group-hover/img:scale-[1.02] transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        )}
                        {!isVideo && (
                          <div className="absolute inset-0 hidden items-center justify-center text-white/10 font-bold text-8xl tracking-tighter z-0 bg-white/5">
                            {selectedProject.title.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right Side: Content (Top on mobile, Right on desktop) */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar order-1 md:order-2">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-primary uppercase mb-2">
                      {selectedProject.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    {/* Metrics Grid */}
                    {selectedProject.metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {selectedProject.metrics.map((metric, idx) => (
                          <div key={idx} className={cn("border rounded-xl p-3 flex items-center justify-center text-center", metric.bg, metric.border)}>
                            <span className={cn("text-sm font-medium", metric.color)}>{metric.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">About the Project</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.whatIBuilt && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">What I Built</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 ml-1">
                          {selectedProject.whatIBuilt.map((item, idx) => (
                            <li key={idx} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProject.integratedProtocols && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Integrated Protocols</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.integratedProtocols.map((protocol) => (
                            <span key={protocol} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-medium">
                              {protocol}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.infrastructure && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Infrastructure</h4>
                        <div className="flex flex-wrap gap-2">
                          {(() => {
                            const style = selectedProject.infrastructureStyle ?? {
                              color: "text-red-400",
                              bg: "bg-red-500/10",
                              border: "border-red-500/20"
                            };
                            return selectedProject.infrastructure.map((infra) => (
                              <span
                                key={infra}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg text-xs font-medium",
                                  style.bg,
                                  style.border,
                                  style.color
                                )}
                              >
                                {infra}
                              </span>
                            ));
                          })()}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-auto flex flex-wrap gap-3">
                    {selectedProject.links?.map((link, idx) => (
                      <Link 
                        key={idx}
                        href={link.url} 
                        target="_blank" 
                        className={cn(
                          buttonVariants({ 
                            variant: link.type === "website" || link.type === "app" ? "default" : "outline", 
                            size: "sm" 
                          }), 
                          "gap-2 rounded-xl flex-1 min-w-[140px]",
                          link.type !== "website" && link.type !== "app" && "bg-transparent border-white/10 hover:bg-white/5"
                        )}
                      >
                        {link.type === "github" && <Github size={16} />}
                        {link.type === "docs" && <BookOpen size={16} />}
                        {link.type === "app" && <AppWindow size={16} />}
                        {link.type === "website" && <ExternalLink size={16} />}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setFullscreenImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
            />
            
            <button 
              onClick={() => setFullscreenImage(null)}
              className="absolute top-6 right-6 z-[120] p-3 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              className="relative z-[111] max-w-full max-h-full flex items-center justify-center pointer-events-none"
            >
              {fullscreenImage.endsWith('.mp4') || fullscreenImage.endsWith('.mov') ? (
                <video 
                  src={fullscreenImage} 
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10 pointer-events-auto cursor-zoom-out"
                  onClick={() => setFullscreenImage(null)}
                />
              ) : (
                <img 
                  src={fullscreenImage} 
                  alt="Fullscreen view"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10 pointer-events-auto cursor-zoom-out"
                  onClick={() => setFullscreenImage(null)}
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
