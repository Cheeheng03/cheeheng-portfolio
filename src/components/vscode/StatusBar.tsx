"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { GitBranch } from "lucide-react";

export function StatusBar() {
  const { state } = useVSCode();
  const activeFile = state.activeTab;

  const ext = activeFile?.split(".").pop() ?? "";
  const langMap: Record<string, string> = { md: "Markdown", ts: "TypeScript", tsx: "TypeScript React" };
  const language = langMap[ext] || "Plain Text";

  return (
    <div className="h-[22px] bg-[var(--vscode-statusbar-bg)] border-t border-[var(--vscode-border)] flex items-center px-3 text-[var(--vscode-statusbar-fg)] text-[11px] select-none shrink-0 justify-between">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch size={12} /> main
        </span>
      </div>
      <div className="flex items-center gap-3">
        {activeFile && <span>{language}</span>}
        <span>UTF-8</span>
      </div>
    </div>
  );
}
