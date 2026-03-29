"use client";

import { EditorRenderer } from "./EditorRenderer";
import { experiences } from "@/lib/portfolio-data";

export function ExperiencePage() {
  const lineCount = 4 + experiences.length * 8;

  return (
    <EditorRenderer lineCount={lineCount}>
      <div className="leading-6 text-[var(--syntax-comment)]">{`# experience.md`}</div>
      <div className="leading-6" />

      <div className="space-y-6 max-w-3xl">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-[var(--syntax-keyword)]/30 pl-4">
            <div className="leading-6 text-[var(--syntax-keyword)] text-xs font-mono">{exp.period}</div>
            <div className="leading-6 text-[var(--syntax-type)] font-bold">{exp.role}</div>
            <div className="leading-6 text-[var(--syntax-function)]">{exp.company}</div>
            <div className="leading-6 text-[var(--vscode-editor-fg)] mt-1 text-sm">{exp.description}</div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-[var(--vscode-editor-fg)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </EditorRenderer>
  );
}
