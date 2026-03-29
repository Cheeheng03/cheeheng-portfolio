export type FileNode = {
  name: string;
  path: string;
  type: "file" | "folder";
  children?: FileNode[];
  icon?: string;
};

export const fileTree: FileNode = {
  name: "cheeheng-portfolio",
  path: "/",
  type: "folder",
  children: [
    { name: "README.md", path: "/README.md", type: "file", icon: "markdown" },
    { name: "about.md", path: "/about.md", type: "file", icon: "markdown" },
    {
      name: "projects",
      path: "/projects",
      type: "folder",
      children: [
        { name: "polystream.md", path: "/projects/polystream.md", type: "file", icon: "markdown" },
        { name: "deesg.md", path: "/projects/deesg.md", type: "file", icon: "markdown" },
        { name: "ai-guardian.md", path: "/projects/ai-guardian.md", type: "file", icon: "markdown" },
        { name: "wallet-credit.md", path: "/projects/wallet-credit.md", type: "file", icon: "markdown" },
        { name: "clawmono.md", path: "/projects/clawmono.md", type: "file", icon: "markdown" },
        { name: "x402canvas.md", path: "/projects/x402canvas.md", type: "file", icon: "markdown" },
      ],
    },
    { name: "experience.md", path: "/experience.md", type: "file", icon: "markdown" },
    { name: "skills.md", path: "/skills.md", type: "file", icon: "markdown" },
    { name: "achievements.md", path: "/achievements.md", type: "file", icon: "markdown" },
    { name: "contact.md", path: "/contact.md", type: "file", icon: "markdown" },
  ],
};

export function getFileByPath(path: string): FileNode | null {
  function search(node: FileNode): FileNode | null {
    if (node.path === path) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = search(child);
        if (found) return found;
      }
    }
    return null;
  }
  return search(fileTree);
}

export function getAllFiles(): FileNode[] {
  const files: FileNode[] = [];
  function collect(node: FileNode) {
    if (node.type === "file") files.push(node);
    if (node.children) node.children.forEach(collect);
  }
  collect(fileTree);
  return files;
}

export function getProjectIdFromPath(path: string): string | null {
  const match = path.match(/^\/projects\/(.+)\.md$/);
  return match ? match[1] : null;
}

export function getFileLabel(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1];
}
