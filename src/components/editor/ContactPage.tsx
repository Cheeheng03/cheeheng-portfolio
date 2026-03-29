"use client";

import { EditorRenderer } from "./EditorRenderer";
import { contactData } from "@/lib/portfolio-data";
import { Mail, Github, Linkedin, Download, FileText } from "lucide-react";

export function ContactPage() {
  return (
    <EditorRenderer lineCount={28}>
      <div className="leading-6 text-[var(--syntax-comment)]">{`# contact.md`}</div>
      <div className="leading-6" />

      <div className="leading-6 text-[var(--syntax-type)] text-lg font-bold">{`Let's Connect / Hire Me`}</div>
      <div className="leading-6" />
      <div className="leading-6 text-[var(--vscode-editor-fg)] max-w-2xl">{contactData.tagline}</div>

      <div className="leading-6 mt-4" />
      <div className="leading-6 text-[var(--syntax-comment)]">{`## Contact`}</div>
      <div className="leading-6" />

      <div className="space-y-2">
        <a href={`mailto:${contactData.email}`} className="flex items-center gap-2 leading-6 text-[var(--syntax-keyword)] hover:underline">
          <Mail size={16} /> {contactData.email}
        </a>
        <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 leading-6 text-[var(--syntax-keyword)] hover:underline">
          <Github size={16} /> GitHub: Cheeheng03
        </a>
        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 leading-6 text-[var(--syntax-keyword)] hover:underline">
          <Linkedin size={16} /> LinkedIn: chee-heng-tang
        </a>
      </div>

      <div className="leading-6 mt-4" />
      <div className="leading-6 text-[var(--syntax-comment)]">{`## Resume`}</div>
      <div className="leading-6" />

      <div className="flex flex-wrap gap-3">
        {contactData.resumes.map((r, i) => (
          <a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--syntax-keyword)]/10 border border-[var(--syntax-keyword)]/20 rounded-lg text-sm text-[var(--syntax-keyword)] hover:bg-[var(--syntax-keyword)]/20 transition-colors"
          >
            <Download size={14} />
            <FileText size={14} />
            {r.name}
          </a>
        ))}
      </div>
    </EditorRenderer>
  );
}
