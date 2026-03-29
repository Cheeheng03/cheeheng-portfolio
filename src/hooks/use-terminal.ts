"use client";

import { useState, useCallback, useRef } from "react";
import { executeCommand, getAutocompleteSuggestions } from "@/lib/terminal-commands";

export type TerminalLine = {
  id: number;
  type: "input" | "output" | "boot";
  content: string;
};

let lineId = 0;

export function useTerminal(onOpenFile: (path: string) => void) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [booted, setBooted] = useState(false);
  const historyRef = useRef<string[]>([]);

  const addLine = useCallback((type: TerminalLine["type"], content: string) => {
    setLines((prev) => [...prev, { id: ++lineId, type, content }]);
  }, []);

  const runBootSequence = useCallback(async () => {
    if (booted) return;
    setBooted(true);

    const isMobile = window.innerWidth < 768;

    const bootLines = isMobile
      ? [
          "Initializing portfolio...",
          "Loading projects.......... done",
          "Loading experience........ done",
          "Loading skills............ done",
          "",
          "Welcome to Chee Heng's Portfolio v1.0.0",
          "Type /help to get started.",
        ]
      : [
          "Initializing portfolio...",
          "Loading projects.......... done",
          "Loading experience........ done",
          "Loading skills............ done",
          "",
          " _____ _               _   _",
          "/  __ \\ |             | | | |",
          "| /  \\/ |__   ___  ___| |_| | ___ _ __   __ _",
          "| |   | '_ \\ / _ \\/ _ \\  _  |/ _ \\ '_ \\ / _` |",
          "| \\__/\\ | | |  __/  __/ | | |  __/ | | | (_| |",
          " \\____/_| |_|\\___|\\___\\_| |_/\\___|_| |_|\\__, |",
          "                                         __/ |",
          "                                        |___/",
          "",
          "Welcome to Chee Heng's Portfolio v1.0.0",
          "Type /help to get started.",
        ];

    for (let i = 0; i < bootLines.length; i++) {
      await new Promise((r) => setTimeout(r, i < 4 ? 200 : 40));
      setLines((prev) => [...prev, { id: ++lineId, type: "boot", content: bootLines[i] }]);
    }
  }, [booted]);

  const submit = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    addLine("input", trimmed);
    historyRef.current = [trimmed, ...historyRef.current.slice(0, 50)];
    setHistoryIndex(-1);
    setSuggestions([]);
    setInput("");

    const results = executeCommand(trimmed);
    for (const result of results) {
      if (result.type === "text") {
        if (result.content === "__CLEAR__") {
          setLines([]);
          return;
        }
        addLine("output", result.content);
      } else if (result.type === "open_file" && result.filePath) {
        onOpenFile(result.filePath);
      }
    }
  }, [input, addLine, onOpenFile]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const next = Math.min(historyIndex + 1, historyRef.current.length - 1);
        setHistoryIndex(next);
        if (historyRef.current[next]) setInput(historyRef.current[next]);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = historyIndex - 1;
        if (next < 0) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(next);
          setInput(historyRef.current[next] || "");
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const s = getAutocompleteSuggestions(input);
        if (s.length === 1) {
          setInput(s[0]);
          setSuggestions([]);
        } else if (s.length > 1) {
          setSuggestions(s);
        }
      }
    },
    [submit, historyIndex, input]
  );

  const updateInput = useCallback((value: string) => {
    setInput(value);
    setSuggestions(getAutocompleteSuggestions(value));
  }, []);

  return {
    lines,
    input,
    setInput: updateInput,
    suggestions,
    setSuggestions,
    handleKeyDown,
    submit,
    runBootSequence,
    booted,
  };
}
