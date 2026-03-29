"use client";

import React, { createContext, useContext, useReducer, type ReactNode } from "react";

type State = {
  openTabs: string[];
  activeTab: string | null;
  expandedFolders: Set<string>;
  sidebarOpen: boolean;
  terminalOpen: boolean;
  sidebarWidth: number;
  terminalHeight: number;
};

type Action =
  | { type: "OPEN_FILE"; path: string }
  | { type: "CLOSE_TAB"; path: string }
  | { type: "SET_ACTIVE_TAB"; path: string }
  | { type: "TOGGLE_FOLDER"; path: string }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "SET_SIDEBAR_OPEN"; open: boolean }
  | { type: "TOGGLE_TERMINAL" }
  | { type: "SET_TERMINAL_OPEN"; open: boolean }
  | { type: "SET_SIDEBAR_WIDTH"; width: number }
  | { type: "SET_TERMINAL_HEIGHT"; height: number };

const initialState: State = {
  openTabs: ["/README.md"],
  activeTab: "/README.md",
  expandedFolders: new Set<string>(["/", "/projects"]),
  sidebarOpen: true,
  terminalOpen: true,
  sidebarWidth: 240,
  terminalHeight: 250,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN_FILE": {
      const tabs = state.openTabs.includes(action.path)
        ? state.openTabs
        : [...state.openTabs, action.path];
      return { ...state, openTabs: tabs, activeTab: action.path };
    }
    case "CLOSE_TAB": {
      const tabs = state.openTabs.filter((t) => t !== action.path);
      let activeTab = state.activeTab;
      if (state.activeTab === action.path) {
        const idx = state.openTabs.indexOf(action.path);
        activeTab = tabs[Math.min(idx, tabs.length - 1)] ?? null;
      }
      return { ...state, openTabs: tabs, activeTab };
    }
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.path };
    case "TOGGLE_FOLDER": {
      const next = new Set(state.expandedFolders);
      if (next.has(action.path)) next.delete(action.path);
      else next.add(action.path);
      return { ...state, expandedFolders: next };
    }
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case "SET_SIDEBAR_OPEN":
      return { ...state, sidebarOpen: action.open };
    case "TOGGLE_TERMINAL":
      return { ...state, terminalOpen: !state.terminalOpen };
    case "SET_TERMINAL_OPEN":
      return { ...state, terminalOpen: action.open };
    case "SET_SIDEBAR_WIDTH":
      return { ...state, sidebarWidth: Math.max(160, Math.min(480, action.width)) };
    case "SET_TERMINAL_HEIGHT":
      return { ...state, terminalHeight: Math.max(100, Math.min(600, action.height)) };
    default:
      return state;
  }
}

type VSCodeContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const VSCodeContext = createContext<VSCodeContextType | null>(null);

export function VSCodeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VSCodeContext.Provider value={{ state, dispatch }}>
      {children}
    </VSCodeContext.Provider>
  );
}

export function useVSCode() {
  const ctx = useContext(VSCodeContext);
  if (!ctx) throw new Error("useVSCode must be used within VSCodeProvider");
  return ctx;
}
