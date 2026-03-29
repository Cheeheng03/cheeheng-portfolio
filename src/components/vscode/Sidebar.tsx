"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { fileTree } from "@/lib/file-system";
import { FileTreeItem } from "./FileTreeItem";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef } from "react";

export function Sidebar() {
  const { state, dispatch } = useVSCode();
  const resizeRef = useRef<{ startX: number; startWidth: number } | null>(null);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      resizeRef.current = { startX: e.clientX, startWidth: state.sidebarWidth };
      const onMouseMove = (e: MouseEvent) => {
        if (!resizeRef.current) return;
        const delta = e.clientX - resizeRef.current.startX;
        dispatch({ type: "SET_SIDEBAR_WIDTH", width: resizeRef.current.startWidth + delta });
      };
      const onMouseUp = () => {
        resizeRef.current = null;
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [state.sidebarWidth, dispatch]
  );

  return (
    <>
      {/* Desktop sidebar */}
      <AnimatePresence initial={false}>
        {state.sidebarOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: state.sidebarWidth, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="hidden md:flex flex-col bg-[var(--vscode-sidebar-bg)] border-r border-[var(--vscode-border)] overflow-hidden shrink-0 relative"
          >
            <div className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--vscode-sidebar-section-fg)] select-none">
              Explorer
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {fileTree.children?.map((node) => (
                <FileTreeItem key={node.path} node={node} depth={0} />
              ))}
            </div>
            {/* Resize handle */}
            <div
              onMouseDown={onMouseDown}
              className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[var(--vscode-focus)] z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {state.sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch({ type: "SET_SIDEBAR_OPEN", open: false })}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed left-0 top-0 bottom-12 w-[280px] bg-[var(--vscode-sidebar-bg)] border-r border-[var(--vscode-border)] z-50 flex flex-col"
            >
              <div className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--vscode-sidebar-section-fg)] select-none">
                Explorer
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {fileTree.children?.map((node) => (
                  <FileTreeItem key={node.path} node={node} depth={0} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
