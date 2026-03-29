"use client";

import { useEffect } from "react";
import { VSCodeProvider, useVSCode } from "@/hooks/use-vscode-store";
import { TitleBar } from "./TitleBar";
import { ActivityBar } from "./ActivityBar";
import { Sidebar } from "./Sidebar";
import { TabBar } from "./TabBar";
import { EditorArea } from "./EditorArea";
import { Terminal } from "./Terminal";
import { StatusBar } from "./StatusBar";

function VSCodeInner() {
  const { dispatch } = useVSCode();

  // Close sidebar on mobile by default
  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch({ type: "SET_SIDEBAR_OPEN", open: false });
    }
  }, [dispatch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+` or Cmd+` → toggle terminal
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        dispatch({ type: "TOGGLE_TERMINAL" });
      }
      // Ctrl+B or Cmd+B → toggle sidebar
      if ((e.ctrlKey || e.metaKey) && e.key === "b") {
        e.preventDefault();
        dispatch({ type: "TOGGLE_SIDEBAR" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

  return (
    <div className="w-screen flex flex-col overflow-hidden bg-[var(--vscode-editor-bg)] text-[var(--vscode-editor-fg)] pb-12 md:pb-0" style={{ height: "100dvh" }}>
      <TitleBar />
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <TabBar />
          <EditorArea />
          <Terminal />
        </div>
      </div>
      {/* Desktop status bar */}
      <div className="hidden md:block">
        <StatusBar />
      </div>
    </div>
  );
}

export function VSCodeLayout() {
  return (
    <VSCodeProvider>
      <VSCodeInner />
    </VSCodeProvider>
  );
}
