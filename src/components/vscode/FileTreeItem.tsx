"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { FileNode } from "@/lib/file-system";
import { ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FileTreeItem({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const { state, dispatch } = useVSCode();
  const isFolder = node.type === "folder";
  const isExpanded = state.expandedFolders.has(node.path);
  const isActive = state.activeTab === node.path;

  const handleClick = () => {
    if (isFolder) {
      dispatch({ type: "TOGGLE_FOLDER", path: node.path });
    } else {
      dispatch({ type: "OPEN_FILE", path: node.path });
      // Auto-close sidebar on mobile
      if (window.innerWidth < 768) {
        dispatch({ type: "SET_SIDEBAR_OPEN", open: false });
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          "w-full flex items-center gap-1 py-[3px] pr-2 text-[13px] hover:bg-[var(--vscode-list-hover)] cursor-pointer select-none transition-colors",
          isActive && "bg-[var(--vscode-list-active)] text-white"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {isFolder ? (
          <ChevronRight
            size={16}
            className={cn("shrink-0 transition-transform duration-150", isExpanded && "rotate-90")}
          />
        ) : (
          <span className="w-4 shrink-0" />
        )}
        {isFolder ? (
          isExpanded ? (
            <FolderOpen size={16} className="shrink-0 text-[#dcb67a]" />
          ) : (
            <Folder size={16} className="shrink-0 text-[#dcb67a]" />
          )
        ) : (
          <FileText size={16} className="shrink-0 text-[var(--vscode-icon-fg)]" />
        )}
        <span className="truncate ml-1 text-[var(--vscode-sidebar-fg)]">{node.name}</span>
      </button>
      <AnimatePresence initial={false}>
        {isFolder && isExpanded && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            {node.children.map((child) => (
              <FileTreeItem key={child.path} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
