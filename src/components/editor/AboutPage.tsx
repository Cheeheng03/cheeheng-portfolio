"use client";

import { EditorRenderer } from "./EditorRenderer";
import { aboutData } from "@/lib/portfolio-data";

export function AboutPage() {
  return (
    <EditorRenderer lineCount={24}>
      <div className="leading-6 text-[var(--syntax-comment)]">{`# about.md`}</div>
      <div className="leading-6" />

      <div className="flex items-start gap-6 leading-6 flex-wrap">
        <img
          src={aboutData.profileImage}
          alt={aboutData.name}
          className="w-32 h-32 rounded-full object-cover border-2 border-[var(--vscode-border)] shrink-0"
        />
        <div className="flex-1 min-w-[200px]">
          <div className="leading-6 text-[var(--syntax-type)] text-lg font-bold">{aboutData.name}</div>
          <div className="leading-6 text-[var(--syntax-keyword)]">{aboutData.title}</div>
          <div className="leading-6 text-[var(--syntax-comment)] text-xs mt-1">{aboutData.education}</div>
        </div>
      </div>

      <div className="leading-6 mt-4" />

      <div className="leading-6 text-[var(--syntax-comment)]">{`## Bio`}</div>
      <div className="leading-6" />

      <div className="leading-6 text-[var(--vscode-editor-fg)] max-w-3xl whitespace-pre-wrap">
        {aboutData.bio}
      </div>
    </EditorRenderer>
  );
}
