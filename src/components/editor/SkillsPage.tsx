"use client";

import { EditorRenderer } from "./EditorRenderer";
import { skillCategories } from "@/lib/portfolio-data";

const categoryColors = [
  { accent: "#da7756", bg: "rgba(218,119,86,0.08)", border: "rgba(218,119,86,0.2)" },
  { accent: "#4ec9b0", bg: "rgba(78,201,176,0.08)", border: "rgba(78,201,176,0.2)" },
  { accent: "#dcdcaa", bg: "rgba(220,220,170,0.08)", border: "rgba(220,220,170,0.2)" },
  { accent: "#569cd6", bg: "rgba(86,156,214,0.08)", border: "rgba(86,156,214,0.2)" },
  { accent: "#6a9955", bg: "rgba(106,153,85,0.08)", border: "rgba(106,153,85,0.2)" },
  { accent: "#ce9178", bg: "rgba(206,145,120,0.08)", border: "rgba(206,145,120,0.2)" },
];

export function SkillsPage() {
  const lineCount = 4 + skillCategories.length * 5;

  return (
    <EditorRenderer lineCount={lineCount}>
      <div className="leading-6 text-[var(--syntax-comment)]">{`# skills.md`}</div>
      <div className="leading-6" />

      <div className="space-y-5 max-w-4xl">
        {skillCategories.map((cat, i) => {
          const color = categoryColors[i % categoryColors.length];
          return (
            <div key={i}>
              <div className="leading-6">
                <span className="text-[var(--syntax-keyword)]">const </span>
                <span style={{ color: color.accent }}>{cat.title.replace(/[&\s/]+/g, "_").replace(/_+/g, "_").toLowerCase()}</span>
                <span className="text-[var(--vscode-editor-fg)]"> = [</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-4 my-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-medium transition-colors hover:brightness-125 cursor-default"
                    style={{
                      color: color.accent,
                      backgroundColor: color.bg,
                      border: `1px solid ${color.border}`,
                    }}
                  >
                    {`"${skill}"`}
                  </span>
                ))}
              </div>
              <div className="leading-6 text-[var(--vscode-editor-fg)]">]</div>
            </div>
          );
        })}
      </div>
    </EditorRenderer>
  );
}
