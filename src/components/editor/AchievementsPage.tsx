"use client";

import { EditorRenderer } from "./EditorRenderer";
import { achievements } from "@/lib/portfolio-data";

export function AchievementsPage() {
  const lineCount = 6 + achievements.length * 10;

  return (
    <EditorRenderer lineCount={lineCount}>
      <div className="leading-6 text-[var(--syntax-comment)]">{`# achievements.md`}</div>
      <div className="leading-6" />

      <div className="space-y-4 max-w-3xl">
        {achievements.map((a, i) => (
          <div key={i} className="border-l-2 border-[var(--syntax-keyword)]/30 pl-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[var(--syntax-type)] font-bold leading-6">{a.title}</span>
              <span className="px-1.5 py-0 bg-[var(--syntax-keyword)]/10 border border-[var(--syntax-keyword)]/20 rounded text-[10px] text-[var(--syntax-keyword)] uppercase tracking-wider font-semibold">
                {a.tag}
              </span>
            </div>
            <div className="leading-6 mt-1">
              <span className="text-[var(--syntax-function)]">prize</span>
              <span className="text-[var(--vscode-editor-fg)]">: </span>
              <span className="text-[var(--syntax-string)]">&quot;{a.prize}&quot;</span>
            </div>
            <div className="leading-6 text-[var(--vscode-editor-fg)] text-sm mt-1">
              {a.description}
            </div>
          </div>
        ))}
      </div>
    </EditorRenderer>
  );
}
