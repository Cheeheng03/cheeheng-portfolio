"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { getFileLabel } from "@/lib/file-system";
import { X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function TabBar() {
  const { state, dispatch } = useVSCode();

  if (state.openTabs.length === 0) return null;

  return (
    <div className="h-[35px] bg-[var(--vscode-editor-bg)] flex items-end overflow-x-auto shrink-0 border-b border-[var(--vscode-border)] custom-scrollbar">
      {state.openTabs.map((path) => {
        const isActive = state.activeTab === path;
        return (
          <div
            key={path}
            onClick={() => dispatch({ type: "SET_ACTIVE_TAB", path })}
            className={cn(
              "h-[35px] flex items-center gap-2 px-3 text-[13px] cursor-pointer select-none border-r border-[var(--vscode-border)] shrink-0 max-w-[180px] group",
              isActive
                ? "bg-[var(--vscode-editor-bg)] text-[var(--vscode-tab-active-fg)] border-t-2 border-t-[var(--vscode-focus)]"
                : "bg-[var(--vscode-tab-inactive-bg)] text-[var(--vscode-tab-inactive-fg)] border-t-2 border-t-transparent hover:bg-[var(--vscode-tab-hover-bg)]"
            )}
          >
            <FileText size={14} className="shrink-0 text-[var(--vscode-icon-fg)]" />
            <span className="truncate">{getFileLabel(path)}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "CLOSE_TAB", path });
              }}
              className="ml-auto shrink-0 p-0.5 rounded hover:bg-white/10 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
