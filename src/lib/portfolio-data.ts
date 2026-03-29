export type ProjectLink = {
  label: string;
  url: string;
  type: "github" | "website" | "docs" | "app";
};

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  expandedImages?: string[];
  description: string;
  whatIBuilt: string[];
  tags: string[];
  integratedProtocols?: string[];
  infrastructure?: string[];
  metrics: string[];
  links: ProjectLink[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Achievement = {
  title: string;
  image: string;
  tag: string;
  prize: string;
  description: string;
};

export type ResumeVersion = {
  name: string;
  url: string;
};

export const aboutData = {
  name: "Chee Heng Tang",
  title: "Founder Engineer & Smart Contract Developer",
  profileImage: "/me.png",
  bio: "Blockchain engineer and DeFi protocol builder, co-founder of Polystream — an ERC-4626 multi-chain yield aggregation protocol integrating 35+ DeFi strategies. My work focuses on smart contract architecture, yield strategy design, and on-chain protocol analysis, building secure DeFi infrastructure and full-stack Web3 applications. I graduated First-Class in Computer Science with Artificial Intelligence from the University of Nottingham Malaysia.",
  education: "First-Class Honours in Computer Science with Artificial Intelligence, University of Nottingham Malaysia",
};

export const projects: Project[] = [
  {
    id: "polystream",
    title: "Polystream",
    category: "DEFI PROTOCOL",
    image: "/polystream.png",
    expandedImages: ["/polystream.png", "/polystream1.png", "/polystream2.png", "/polystream3.png"],
    description:
      "Co-founded Polystream, a multi-chain DeFi yield aggregation protocol originating from the Scroll Open Hackathon (2nd place). Selected into the Scroll Campus accelerator and later secured $95k in Scroll Foundation investments and grants. Designed and built the core ERC-4626 vault architecture enabling automated yield strategies across multiple DeFi protocols.",
    whatIBuilt: [
      "Architected ERC-4626 multi-chain vault systems supporting multiple assets across 3 blockchain networks",
      "Integrated 35+ DeFi protocols and yield strategies across lending, liquidity, yield-tokenized and cross-chain systems",
      "Engineered capital allocation mechanisms targeting 8–12% APY across diverse yield strategies",
      "Implemented curator-controlled strategy execution with safeguarded and whitelisted smart contract interactions",
      "Developed Foundry testing infrastructure with unit, integration, invariant and fuzz testing",
      "Built backend infrastructure including event listeners, oracle integrations, monitoring services and vault trackers",
      "Developed full-stack products including a web dApp, mobile DeFi app and curator dashboard",
      "Led Cantina smart contract audit collaboration and implemented mitigation fixes",
    ],
    tags: ["Solidity", "Foundry", "ERC-4626", "Intent-Based Deposits", "Oracle Infrastructure", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "React Native"],
    integratedProtocols: [
      "Aave V3", "Across", "Balancer", "CCTP", "Compound V3", "Convex", "Curve", "Ethena",
      "Euler", "Fluid", "Merkl", "Morpho", "PancakeSwap", "Pendle", "Scroll Bridge",
      "Spectra", "Stargate", "Auto Finance", "Uniswap V3",
    ],
    infrastructure: ["Chainlink", "Pyth", "RedStone", "DefiLlama API", "LI.FI"],
    metrics: [
      "35+ protocol strategy integrations",
      "3 blockchain networks",
      "$95k Scroll Foundation Investments + Grants",
      "2nd place at Scroll Open Global Hackathon",
    ],
    links: [
      { label: "Landing Page", url: "https://www.polystream.xyz/", type: "website" },
      { label: "Docs", url: "https://docs-eta-one-24.vercel.app/", type: "docs" },
      { label: "Source Code", url: "https://github.com/polystream-core", type: "github" },
    ],
  },
  {
    id: "deesg",
    title: "DeESG",
    category: "AI, ORACLES & IOT",
    image: "/deesg.png",
    expandedImages: ["/deesg5.png", "/deesg4.png", "/deesg1.png", "/deesg2.png", "/deesg3.png"],
    description:
      "Built a decentralized ESG evaluation system combining AI, IoT data, privacy-preserving feedback and blockchain infrastructure. DeESG leverages Chainlink oracles to aggregate AI model outputs, IoT environmental data and encrypted employee feedback to generate transparent ESG scores and reward sustainable behavior.",
    whatIBuilt: [
      "Developed Solidity smart contracts for ESG scoring, token incentives and on-chain data verification",
      "Built and operated a Chainlink node with automation jobs to bridge IoT sensor data to smart contracts for AI aggregation",
      "Implemented tokenomics system (GTK) rewarding verified ESG improvements through automated smart contract distribution",
      "Engineered IoT pipeline using Raspberry Pi sensors capturing environmental metrics such as CO2, temperature and humidity to be stored on chain",
      "Integrated AI clustering models to classify company ESG risk levels using environmental and governance datasets",
      "Developed full-stack Web3 frontend for ESG dashboards, feedback participation and token claiming",
    ],
    tags: ["Solidity", "Chainlink", "IoT", "AI Clustering", "FHE", "Next.js", "Smart Contracts"],
    infrastructure: ["Chainlink Node", "Chainlink External Adapters", "Chainlink Automation", "Raspberry Pi IoT Sensors", "The Graph", "Inco Protocol (FHE)"],
    metrics: [
      "ETHGlobal Bangkok Hackathon Project",
      "$2,000 Chainlink Prize Winner",
      "$500 Scroll Prize Winner",
      "IoT environmental data pipeline with on-chain oracle aggregation",
    ],
    links: [
      { label: "Showcase", url: "https://ethglobal.com/showcase/deesg-2me7g", type: "website" },
      { label: "Website", url: "https://de-esg.vercel.app/", type: "website" },
      { label: "Source Code", url: "#", type: "github" },
    ],
  },
  {
    id: "ai-guardian",
    title: "AI Guardian",
    category: "AI & CONTENT INTEGRITY",
    image: "/aiguardian.png",
    expandedImages: ["/vid1.mp4", "/vid2.mp4", "/posting.mp4"],
    description:
      "Built an on-chain content verification system for detecting AI-generated deepfakes and protecting original media. AI Guardian combines blockchain verification, deepfake detection models, and decentralized storage to flag manipulated content and prove originality across multiple EVM chains.",
    whatIBuilt: [
      "Developed Solidity smart contracts for deepfake verification, originality tracking and social media post registry",
      "Implemented image hash storage and deepfake scoring mechanisms with immutable on-chain records",
      "Built originality verification contracts to detect reposted or stolen images using cryptographic hashes",
      "Integrated IPFS storage for decentralized image hosting and metadata tracking",
      "Developed full-stack Web3 frontend enabling users to upload media, verify originality and detect deepfakes",
      "Integrated multi-chain deployment across Scroll Sepolia and Manta Sepolia networks",
      "Connected on-chain verification results with AI deepfake detection models deployed on ICP",
    ],
    tags: ["Solidity", "Next.js", "TailwindCSS", "IPFS", "AI Deepfake Detection", "Web3", "Ethers.js", "Thirdweb"],
    infrastructure: ["Scroll Sepolia", "Manta Sepolia", "Internet Computer Protocol (ICP)", "IPFS", "World ID"],
    metrics: [
      "Best Community Application on Scroll — $1,000 Prize",
      "ICP–Ethereum Chain Fusion Challenge — $1,000 Prize",
      "On-chain deepfake detection with AI inference",
      "Multi-chain deployment across Scroll & Manta networks",
    ],
    links: [
      { label: "Devfolio", url: "https://devfolio.co/projects/ai-guardian-safeguarding-onchain-9b6e", type: "website" },
      { label: "Slides", url: "https://www.canva.com/design/DAGSw7NJYsE/TEKCEUPHBA3NQV-gJSAe7Q/edit", type: "website" },
      { label: "Source Code", url: "https://github.com/kens1ang/AIGuardian", type: "github" },
    ],
  },
  {
    id: "wallet-credit",
    title: "Web3 Wallet Credit Scoring System",
    category: "AI & BLOCKCHAIN",
    image: "/wallet.png",
    expandedImages: ["/wallet4.png", "/wallet2.png", "/wallet3.png", "/wallet5.png", "/fyp.mov"],
    description:
      "Final year project building a decentralized credit scoring system for Web3 wallets. The system analyzes on-chain wallet behavior using machine learning models and stores generated credit scores on-chain via Chainlink oracle infrastructure.",
    whatIBuilt: [
      "Designed an end-to-end pipeline for collecting and processing on-chain wallet transaction data",
      "Engineered behavioral wallet features including transaction frequency, token swaps, and DeFi interactions",
      "Trained CatBoost, Random Forest, and Gradient Boosting models for credit score prediction",
      "Built feature extraction and model inference APIs for real-time scoring",
      "Developed Chainlink external adapters connecting smart contracts with off-chain ML model services",
      "Implemented Solidity smart contracts to store wallet credit scores on-chain",
      "Built a Web3 frontend enabling users to connect MetaMask and retrieve their credit score",
    ],
    tags: ["Python", "Machine Learning", "CatBoost", "Random Forest", "Gradient Boosting", "Chainlink", "Solidity", "Hardhat", "Node.js", "React"],
    infrastructure: ["Chainlink External Adapters", "Chainlink Node", "Moralis API", "Etherscan API"],
    metrics: [
      "3 machine learning models (CatBoost, RF, GBM)",
      "18 on-chain behavioral wallet features",
      "End-to-end pipeline from data collection to on-chain scoring",
      "Chainlink oracle integration for off-chain ML inference",
    ],
    links: [{ label: "Source Code", url: "https://github.com/Cheeheng03/COMP3025-20407274", type: "github" }],
  },
  {
    id: "clawmono",
    title: "Clawmono",
    category: "AI & PAYMENT INFRA",
    image: "/clawmono.png",
    expandedImages: ["/clawmono1.png", "/clawmono2.png", "/clawmono3.png"],
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
      "Deployed and tested the full architecture on Monad Testnet",
    ],
    tags: ["Solidity", "ERC-8004", "ERC-4337", "ERC-4626", "OpenClaw", "Smart Accounts", "Next.js", "Node.js", "Foundry", "Web3 Payments"],
    infrastructure: ["Monad Testnet", "EntryPoint (ERC-4337)", "x402 Payment Proxy", "EIP-712 Signatures"],
    metrics: [
      "ERC-8004 on-chain agent identity system",
      "ERC-4337 smart wallet architecture",
      "x402-compatible payment gateway for AI services",
      "Full-stack AI agent marketplace infrastructure",
    ],
    links: [
      { label: "Website", url: "https://www.clawmono.app/", type: "website" },
      { label: "Demo Video", url: "https://x.com/jalldoes/status/2023261248809562602?s=46&t=CkoPdWy-KiXFwfXhEBBgdg", type: "website" },
      { label: "Source Code", url: "https://github.com/PragmaMoney/clawmono-monorepo", type: "github" },
    ],
  },
  {
    id: "x402canvas",
    title: "x402Canvas",
    category: "ONCHAIN SOCIAL & PAYMENT",
    image: "/x402.png",
    expandedImages: ["/x4021.png", "/x402.png", "/x4022.png", "/x4023.png"],
    description:
      "Built an on-chain collaborative pixel canvas on Base powered by x402 payments. Users pay to paint pixels, earn token rewards for participation, trigger snapshot NFTs as the canvas evolves, and unlock a Uniswap trading pool once the full canvas supply is minted.",
    whatIBuilt: [
      "Developed Solidity smart contracts for pixel minting, reward distribution and milestone-based progression",
      "Designed tokenomics rewarding users with 5,000 CANVAS tokens for every pixel painted",
      "Implemented snapshot NFT logic minting a new collectible milestone NFT every 10,000 painted pixels",
      "Engineered canvas supply progression culminating in Uniswap pool deployment after 140,000 total pixels are minted",
      "Integrated x402-based payment flow for minting and canvas interaction on Base",
      "Supported frontend development for the collaborative canvas, rewards flow and NFT milestone experience",
    ],
    tags: ["Solidity", "x402", "Base", "Tokenomics", "NFTs", "Uniswap", "Next.js"],
    infrastructure: ["Base", "x402 Payment Flow", "OpenSea", "Uniswap"],
    metrics: [
      "5,000 CANVAS tokens rewarded per painted pixel",
      "Snapshot NFT minted every 10,000 painted pixels",
      "140,000 total pixel supply unlocks Uniswap pool launch",
      "x402-powered on-chain minting and participation flow",
    ],
    links: [
      { label: "Live Website", url: "#", type: "website" },
      { label: "Source Code", url: "#", type: "github" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Co-founder, Protocol Engineer",
    company: "Polystream",
    period: "Feb 2025 - Present",
    description:
      "Co-founded a DeFi yield aggregation protocol. Secured $95k in Scroll Foundation investments. Designed ERC-4626 vault architecture, integrated 35+ DeFi protocols, and led smart contract security audits.",
    technologies: ["Solidity", "Foundry", "ERC-4626", "DeFi", "Security Audits", "Full-Stack"],
  },
  {
    role: "Hackathon Grinding",
    company: "ETHKL, ETH Global Bangkok, Scroll Open",
    period: "2024 - 2025",
    description:
      "Participated and won multiple Web3 hackathons. Selected into the Scroll Campus Accelerator program, later leading to incorporation and investment by the Scroll Foundation.",
    technologies: ["Web3", "Smart Contracts", "DeFi", "Hackathons"],
  },
  {
    role: "Fullstack AI Intern",
    company: "Vilor Berhad",
    period: "June 2024 - Sep 2024",
    description:
      "Developed an internal intranet platform for centralized document management and HR workflows. Processed 13 million WhatsApp messages to build a training dataset and fine-tuned an AI chatbot prototype.",
    technologies: ["Python", "AI / ML", "Full-Stack", "Data Processing"],
  },
  {
    role: "Software Engineering Group Project",
    company: "University of Nottingham Malaysia",
    period: "2023 - 2024",
    description:
      "Built a decentralized voting DAO as part of a university software engineering group project, marking the start of my Web3 journey. Developed Solidity smart contracts for proposal creation, voting, and token rewards, and built a React-based frontend integrated with MetaMask and IPFS for decentralized interaction and storage.",
    technologies: ["Solidity", "React", "MetaMask", "IPFS", "JavaScript", "Web3"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Blockchain & Smart Contracts",
    skills: ["Solidity", "Foundry", "Hardhat", "Ethers.js", "Wagmi", "Chainlink", "Pyth", "RedStone", "Account Abstraction"],
  },
  {
    title: "DeFi & On-chain Research Tools",
    skills: ["DeFiLlama", "Dune Analytics", "DeBank", "Etherscan", "Tenderly", "The Graph", "Moralis", "Infura", "Alchemy"],
  },
  {
    title: "AI / Machine Learning",
    skills: ["Python", "Scikit-learn", "CatBoost", "XGBoost", "K-Means", "FAISS", "LangChain", "HuggingFace", "OpenAI"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Vue.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "FastAPI", "Docker"],
  },
  {
    title: "Databases & Dev Tools",
    skills: ["PostgreSQL", "TimescaleDB", "MongoDB", "Firebase", "SQL", "Git", "PM2", "VSCode", "K6"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "University of Nottingham",
    image: "/university.png",
    tag: "ACADEMICS",
    prize: "First Class Honours",
    description: "Dean's List Scholarship Award Top 2% (2022, 2024). QS World Ranking: Top 100. BSc Computer Science with Artificial Intelligence.",
  },
  {
    title: "Scroll Open Hackathon",
    image: "/scroll.png",
    tag: "HACKATHON",
    prize: "2nd Place ($15,000 USD)",
    description:
      "Co-founded Polystream, a DeFi yield aggregation protocol. Selected for the Scroll Campus accelerator program, and later securing $95k USD in Scroll Foundation investments and grants.",
  },
  {
    title: "ETH Global Bangkok",
    image: "/ethbangkok.png",
    tag: "HACKATHON",
    prize: "Winner ($2,500 USD Total)",
    description: "Built DeESG, a decentralized ESG Scoring Platform. Won Chainlink 'Connect the World' ($2K) and Innovation on Scroll 5th Place ($500).",
  },
  {
    title: "ETH KL",
    image: "/ethkl.png",
    tag: "HACKATHON",
    prize: "Winner ($2,000 USD Total)",
    description:
      "Built AI Guardian, an AI-powered deepfake detection platform. Won Best Community Application on Scroll ($1K) and ICP–Ethereum Chain Fusion Challenge ($1K).",
  },
];

export const contactData = {
  email: "cheehengtang03@gmail.com",
  github: "https://github.com/Cheeheng03",
  linkedin: "https://www.linkedin.com/in/chee-heng-tang-51b080312/",
  tagline: "Seeking opportunities in smart contract development, smart contract audits, on-chain research, protocol analysis, and product manager roles.",
  resumes: [
    { name: "DeFi Specialist", url: "/Tang Chee Heng_Resume_Defi.pdf" },
    { name: "Smart Contract", url: "/Tang Chee Heng_Resume_Smart_Contract.pdf" },
  ] as ResumeVersion[],
};
