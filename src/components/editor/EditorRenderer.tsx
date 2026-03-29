"use client";

import { ReactNode } from "react";

export function EditorRenderer({ children, lineCount }: { children: ReactNode; lineCount: number }) {
  return (
    <div className="flex h-full font-mono text-sm leading-6 overflow-auto custom-scrollbar">
      {/* Line numbers gutter - hidden on mobile for more space */}
      <div className="hidden md:flex sticky left-0 flex-col items-end pr-4 pl-4 pt-4 pb-8 text-[var(--vscode-line-number)] select-none bg-[var(--vscode-editor-bg)] z-10 min-w-[50px]">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i + 1} className="leading-6 text-right text-xs">
            {i + 1}
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 pt-4 pb-8 px-4 md:pr-8 md:pl-0 min-w-0">{children}</div>
    </div>
  );
}
