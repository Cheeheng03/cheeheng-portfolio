"use client";

import { EditorRenderer } from "./EditorRenderer";
import { useVSCode } from "@/hooks/use-vscode-store";

export function ReadmePage() {
  const { dispatch } = useVSCode();

  const openFile = (path: string) => dispatch({ type: "OPEN_FILE", path });

  return (
    <EditorRenderer lineCount={34}>
      {/* whoami */}
      <div className="leading-6">
        <span className="text-[var(--syntax-function)]">$ </span>
        <span className="text-[var(--syntax-string)]">whoami</span>
      </div>
      <div className="leading-6 text-[var(--syntax-type)]">
        → Founder Engineer & Smart Contract Developer
      </div>

      <div className="leading-6 mt-2" />

      {/* stats */}
      <div className="leading-6">
        <span className="text-[var(--syntax-function)]">$ </span>
        <span className="text-[var(--syntax-string)]">cat stats.txt</span>
      </div>
      <div className="leading-6 text-[var(--vscode-editor-fg)]">
        {"  "}Projects: <span className="text-[var(--syntax-number)]">6</span> | Hackathons won:{" "}
        <span className="text-[var(--syntax-number)]">3</span>
      </div>
      <div className="leading-6 text-[var(--vscode-editor-fg)]">
        {"  "}Scroll Foundation:{" "}
        <span className="text-[var(--syntax-number)]">$95k secured</span>
      </div>

      <div className="leading-6 mt-2" />

      {/* socials */}
      <div className="leading-6">
        <span className="text-[var(--syntax-function)]">$ </span>
        <span className="text-[var(--syntax-string)]">cat socials.txt</span>
      </div>
      <div className="leading-6 text-[var(--vscode-editor-fg)]">
        {"  "}GitHub:{" "}
        <a href="https://github.com/Cheeheng03" target="_blank" rel="noopener noreferrer" className="text-[var(--syntax-keyword)] underline decoration-[var(--syntax-keyword)]/30 hover:decoration-[var(--syntax-keyword)]">
          Cheeheng03
        </a>
      </div>
      <div className="leading-6 text-[var(--vscode-editor-fg)]">
        {"  "}LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/chee-heng-tang-51b080312/" target="_blank" rel="noopener noreferrer" className="text-[var(--syntax-keyword)] underline decoration-[var(--syntax-keyword)]/30 hover:decoration-[var(--syntax-keyword)]">
          chee-heng-tang
        </a>
      </div>

      <div className="leading-6 mt-4" />

      <div className="leading-6 text-[var(--syntax-comment)]">{`// --- Quick Navigation ---`}</div>
      <div className="leading-6 mt-1" />
      {[
        { label: "about.md", path: "/about.md" },
        { label: "projects/", path: "/projects/polystream.md" },
        { label: "experience.md", path: "/experience.md" },
        { label: "skills.md", path: "/skills.md" },
        { label: "achievements.md", path: "/achievements.md" },
        { label: "contact.md", path: "/contact.md" },
      ].map((f) => (
        <div key={f.path} className="leading-6">
          <button
            onClick={() => openFile(f.path)}
            className="text-[var(--syntax-string)] hover:underline cursor-pointer"
          >
            → {f.label}
          </button>
        </div>
      ))}
    </EditorRenderer>
  );
}
