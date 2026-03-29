"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { Files, Search, GitBranch, Blocks, TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: Files, label: "Explorer", action: "sidebar" as const },
  { icon: Search, label: "Search", action: "none" as const },
  { icon: GitBranch, label: "Source Control", action: "none" as const },
  { icon: Blocks, label: "Extensions", action: "none" as const },
];

export function ActivityBar() {
  const { state, dispatch } = useVSCode();

  return (
    <>
      {/* Desktop: vertical left bar */}
      <div className="hidden md:flex flex-col w-12 bg-[var(--vscode-activitybar-bg)] border-r border-[var(--vscode-border)] shrink-0 items-center pt-2 gap-1">
        {items.map((item) => (
          <button
            key={item.label}
            title={item.label}
            onClick={() => {
              if (item.action === "sidebar") dispatch({ type: "TOGGLE_SIDEBAR" });
            }}
            className={cn(
              "w-12 h-12 flex items-center justify-center text-[var(--vscode-activitybar-fg)] hover:text-white transition-colors relative",
              item.action === "sidebar" && state.sidebarOpen && "text-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-6 before:bg-white"
            )}
          >
            <item.icon size={22} strokeWidth={1.5} />
          </button>
        ))}
        <div className="mt-auto mb-2">
          <button
            title="Toggle Terminal"
            onClick={() => dispatch({ type: "TOGGLE_TERMINAL" })}
            className={cn(
              "w-12 h-12 flex items-center justify-center text-[var(--vscode-activitybar-fg)] hover:text-white transition-colors",
              state.terminalOpen && "text-white"
            )}
          >
            <TerminalSquare size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile: bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-12 bg-[var(--vscode-activitybar-bg)] border-t border-[var(--vscode-border)] flex items-center justify-around">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              if (item.action === "sidebar") dispatch({ type: "TOGGLE_SIDEBAR" });
            }}
            className={cn(
              "h-12 flex-1 flex items-center justify-center text-[var(--vscode-activitybar-fg)]",
              item.action === "sidebar" && state.sidebarOpen && "text-white"
            )}
          >
            <item.icon size={20} strokeWidth={1.5} />
          </button>
        ))}
        <button
          onClick={() => dispatch({ type: "TOGGLE_TERMINAL" })}
          className={cn(
            "h-12 flex-1 flex items-center justify-center text-[var(--vscode-activitybar-fg)]",
            state.terminalOpen && "text-white"
          )}
        >
          <TerminalSquare size={20} strokeWidth={1.5} />
        </button>
      </div>
    </>
  );
}
