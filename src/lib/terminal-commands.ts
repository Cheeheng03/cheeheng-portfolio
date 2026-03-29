import { projects, contactData } from "./portfolio-data";

export type CommandResult = {
  type: "text" | "open_file";
  content: string;
  filePath?: string;
};

const fileMap: Record<string, string> = {
  about: "/about.md",
  projects: "/projects",
  experience: "/experience.md",
  skills: "/skills.md",
  achievements: "/achievements.md",
  contact: "/contact.md",
  readme: "/README.md",
  home: "/README.md",
};

const projectAliases: Record<string, string> = {};
for (const p of projects) {
  projectAliases[p.id] = `/projects/${p.id}.md`;
  projectAliases[p.title.toLowerCase()] = `/projects/${p.id}.md`;
}

const HELP_TEXT = `Available commands:

  /help              Show this help message
  /about             Open about page
  /projects          Open projects index
  /projects <name>   Open a specific project
  /experience        Open experience timeline
  /skills            Open skills overview
  /achievements      Open achievements & hackathons
  /contact           Open contact info
  /resume            Show resume download options
  clear              Clear terminal

Navigation:
  ↑/↓  Browse command history
  Tab   Autocomplete commands

Projects: ${projects.map((p) => p.id).join(", ")}`;

const RESUME_TEXT = `Resume Downloads:
${contactData.resumes.map((r) => `  ${r.name}: ${r.url}`).join("\n")}

Open these URLs in your browser to download.`;

export const ALL_COMMANDS = [
  "/help",
  "/about",
  "/projects",
  "/experience",
  "/skills",
  "/achievements",
  "/contact",
  "/resume",
  "clear",
  ...projects.map((p) => `/projects ${p.id}`),
];

export function executeCommand(input: string): CommandResult[] {
  const trimmed = input.trim().toLowerCase();

  if (trimmed === "clear") {
    return [{ type: "text", content: "__CLEAR__" }];
  }

  if (trimmed === "/help") {
    return [{ type: "text", content: HELP_TEXT }];
  }

  if (trimmed === "/resume") {
    return [{ type: "text", content: RESUME_TEXT }];
  }

  // /projects <name>
  if (trimmed.startsWith("/projects ")) {
    const name = trimmed.slice("/projects ".length).trim();
    const path = projectAliases[name];
    if (path) {
      return [
        { type: "text", content: `Opening ${name}...` },
        { type: "open_file", content: "", filePath: path },
      ];
    }
    return [
      {
        type: "text",
        content: `Project "${name}" not found. Available: ${projects.map((p) => p.id).join(", ")}`,
      },
    ];
  }

  // Simple file commands
  const cmd = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  const filePath = fileMap[cmd];
  if (filePath) {
    return [
      { type: "text", content: `Opening ${cmd}...` },
      { type: "open_file", content: "", filePath },
    ];
  }

  if (trimmed.length === 0) {
    return [];
  }

  return [
    {
      type: "text",
      content: `Command not found: ${input}\nType /help for available commands.`,
    },
  ];
}

export function getAutocompleteSuggestions(input: string): string[] {
  if (!input) return [];
  const lower = input.toLowerCase();
  return ALL_COMMANDS.filter((cmd) => cmd.startsWith(lower) && cmd !== lower).slice(0, 6);
}
