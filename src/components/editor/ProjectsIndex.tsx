"use client";

import { EditorRenderer } from "./EditorRenderer";
import { projects } from "@/lib/portfolio-data";
import { useVSCode } from "@/hooks/use-vscode-store";

export function ProjectsIndex() {
  const { dispatch } = useVSCode();

  return (
    <EditorRenderer lineCount={8 + projects.length * 3}>
      <div className="leading-6 text-[var(--syntax-comment)]">{`# Projects`}</div>
      <div className="leading-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => dispatch({ type: "OPEN_FILE", path: `/projects/${project.id}.md` })}
            className="text-left p-4 rounded-lg border border-[var(--vscode-border)] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--syntax-keyword)]/30 transition-all group"
          >
            <div className="aspect-[4/3] rounded overflow-hidden mb-3 bg-black/20">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-sm font-medium text-[var(--vscode-editor-fg)] group-hover:text-white transition-colors">{project.title}</div>
            <div className="text-[10px] tracking-wider text-[var(--syntax-comment)] uppercase mt-0.5">{project.category}</div>
          </button>
        ))}
      </div>
    </EditorRenderer>
  );
}
