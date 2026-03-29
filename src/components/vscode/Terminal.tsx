"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { useTerminal } from "@/hooks/use-terminal";
import { useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Terminal() {
  const { state, dispatch } = useVSCode();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resizeRef = useRef<{ startY: number; startHeight: number } | null>(null);

  const onOpenFile = useCallback(
    (path: string) => {
      dispatch({ type: "OPEN_FILE", path });
    },
    [dispatch]
  );

  const terminal = useTerminal(onOpenFile);

  // Run boot sequence on first open
  useEffect(() => {
    if (state.terminalOpen && !terminal.booted) {
      terminal.runBootSequence();
    }
  }, [state.terminalOpen, terminal]);

  // Auto-scroll on new lines or resize
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminal.lines, state.terminalHeight]);

  // Focus input when terminal opens
  useEffect(() => {
    if (state.terminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [state.terminalOpen]);

  const onResizeMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      resizeRef.current = { startY: e.clientY, startHeight: state.terminalHeight };
      const onMouseMove = (e: MouseEvent) => {
        if (!resizeRef.current) return;
        const delta = resizeRef.current.startY - e.clientY;
        dispatch({ type: "SET_TERMINAL_HEIGHT", height: resizeRef.current.startHeight + delta });
      };
      const onMouseUp = () => {
        resizeRef.current = null;
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [state.terminalHeight, dispatch]
  );

  // Desktop terminal
  const desktopTerminal = state.terminalOpen && (
    <div
      className="hidden md:flex flex-col bg-[var(--vscode-terminal-bg)] border-t border-[var(--vscode-border)] shrink-0 relative"
      style={{ height: state.terminalHeight }}
    >
      {/* Resize handle */}
      <div
        onMouseDown={onResizeMouseDown}
        className="absolute top-0 left-0 right-0 h-[4px] cursor-row-resize hover:bg-[var(--vscode-focus)] z-10 group"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-[1px] w-8 h-[2px] rounded-full bg-[var(--vscode-border)] group-hover:bg-[var(--vscode-focus)] transition-colors" />
      </div>

      {/* Terminal header */}
      <div className="flex items-center justify-between px-3 h-[30px] shrink-0 border-b border-[var(--vscode-border)]">
        <span className="text-[11px] font-medium text-[var(--vscode-terminal-fg)] uppercase tracking-wider">Terminal</span>
        <div className="flex items-center gap-1">
          <button onClick={() => dispatch({ type: "TOGGLE_TERMINAL" })} className="p-1 hover:bg-white/10 rounded">
            <Minus size={14} className="text-[var(--vscode-terminal-fg)]" />
          </button>
          <button onClick={() => dispatch({ type: "SET_TERMINAL_OPEN", open: false })} className="p-1 hover:bg-white/10 rounded">
            <X size={14} className="text-[var(--vscode-terminal-fg)]" />
          </button>
        </div>
      </div>

      {/* Terminal content */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 overflow-y-auto px-4 py-2 font-mono text-sm custom-scrollbar cursor-text"
      >
        {terminal.lines.map((line) => (
          <div key={line.id} className="leading-5">
            {line.type === "input" ? (
              <div>
                <span className="text-[var(--syntax-function)]">cheeheng@portfolio</span>
                <span className="text-[var(--vscode-terminal-fg)]"> ~ </span>
                <span className="text-[var(--syntax-keyword)]">$ </span>
                <span className="text-[var(--vscode-terminal-fg)]">{line.content}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap text-[var(--vscode-terminal-fg)]">{line.content}</pre>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="relative">
          <div className="leading-6 flex items-center">
            <span className="text-[var(--syntax-function)]">cheeheng@portfolio</span>
            <span className="text-[var(--vscode-terminal-fg)]"> ~ </span>
            <span className="text-[var(--syntax-keyword)]">$ </span>
            <input
              ref={inputRef}
              value={terminal.input}
              onChange={(e) => terminal.setInput(e.target.value)}
              onKeyDown={terminal.handleKeyDown}
              className="flex-1 bg-transparent outline-none text-[var(--vscode-terminal-fg)] caret-[var(--syntax-keyword)]"
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          {/* Autocomplete suggestions - floating above input */}
          {terminal.suggestions.length > 0 && (
            <div className="absolute bottom-full left-0 mb-1 border border-[var(--vscode-border)] bg-[#252526] rounded shadow-xl overflow-hidden min-w-[220px] z-50">
              {terminal.suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    terminal.setInput(s);
                    terminal.setSuggestions([]);
                    inputRef.current?.focus();
                  }}
                  className="block w-full text-left px-3 py-1.5 text-[13px] font-mono text-[var(--vscode-terminal-fg)] hover:bg-[var(--vscode-list-hover)] transition-colors"
                >
                  <span className="text-[var(--syntax-keyword)]">{s.slice(0, terminal.input.length)}</span>
                  <span>{s.slice(terminal.input.length)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Mobile terminal overlay
  const mobileTerminal = (
    <AnimatePresence>
      {state.terminalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: "SET_TERMINAL_OPEN", open: false })}
            className="md:hidden fixed inset-0 bg-black/50 z-30"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="md:hidden fixed bottom-12 left-0 right-0 z-40 bg-[var(--vscode-terminal-bg)] border-t border-[var(--vscode-border)] flex flex-col"
            style={{ height: "60vh" }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between px-3 h-[30px] shrink-0 border-b border-[var(--vscode-border)]">
              <span className="text-[11px] font-medium text-[var(--vscode-terminal-fg)] uppercase tracking-wider">Terminal</span>
              <button onClick={() => dispatch({ type: "SET_TERMINAL_OPEN", open: false })} className="p-1 hover:bg-white/10 rounded">
                <X size={14} className="text-[var(--vscode-terminal-fg)]" />
              </button>
            </div>

            <div
              onClick={() => inputRef.current?.focus()}
              className="flex-1 overflow-y-auto px-4 py-2 font-mono text-sm custom-scrollbar cursor-text"
            >
              {terminal.lines.map((line) => (
                <div key={line.id} className="leading-5">
                  {line.type === "input" ? (
                    <div>
                      <span className="text-[var(--syntax-function)]">cheeheng@portfolio</span>
                      <span className="text-[var(--vscode-terminal-fg)]"> ~ </span>
                      <span className="text-[var(--syntax-keyword)]">$ </span>
                      <span className="text-[var(--vscode-terminal-fg)]">{line.content}</span>
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap text-[var(--vscode-terminal-fg)]">{line.content}</pre>
                  )}
                </div>
              ))}

              <div className="relative">
                <div className="leading-6 flex items-center">
                  <span className="text-[var(--syntax-function)]">cheeheng@portfolio</span>
                  <span className="text-[var(--vscode-terminal-fg)]"> ~ </span>
                  <span className="text-[var(--syntax-keyword)]">$ </span>
                  <input
                    value={terminal.input}
                    onChange={(e) => terminal.setInput(e.target.value)}
                    onKeyDown={terminal.handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-[var(--vscode-terminal-fg)] caret-[var(--syntax-keyword)]"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                {terminal.suggestions.length > 0 && (
                  <div className="absolute bottom-full left-0 mb-1 border border-[var(--vscode-border)] bg-[#252526] rounded shadow-xl overflow-hidden min-w-[220px] z-50">
                    {terminal.suggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          terminal.setInput(s);
                          terminal.setSuggestions([]);
                        }}
                        className="block w-full text-left px-3 py-1.5 text-[13px] font-mono text-[var(--vscode-terminal-fg)] hover:bg-[var(--vscode-list-hover)] transition-colors"
                      >
                        <span className="text-[var(--syntax-keyword)]">{s.slice(0, terminal.input.length)}</span>
                        <span>{s.slice(terminal.input.length)}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {desktopTerminal}
      {mobileTerminal}
    </>
  );
}
