"use client";

import { EditorRenderer } from "./EditorRenderer";
import { projects } from "@/lib/portfolio-data";
import { useState } from "react";
import { ExternalLink, Github, BookOpen, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectPage({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId);
  const [fullscreenMedia, setFullscreenMedia] = useState<string | null>(null);

  if (!project) {
    return (
      <EditorRenderer lineCount={3}>
        <div className="leading-6 text-[var(--syntax-comment)]">Project not found: {projectId}</div>
      </EditorRenderer>
    );
  }

  const lineCount = 20 + (project.whatIBuilt?.length ?? 0) + (project.metrics?.length ?? 0) + (project.tags?.length ? 4 : 0) + (project.infrastructure?.length ? 4 : 0) + (project.integratedProtocols?.length ? 4 : 0) + 10;

  const linkIcon = (type: string) => {
    if (type === "github") return <Github size={14} />;
    if (type === "docs") return <BookOpen size={14} />;
    return <ExternalLink size={14} />;
  };

  return (
    <>
      <EditorRenderer lineCount={lineCount}>
        <div className="leading-6 text-[var(--syntax-comment)]">{`# ${project.title}`}</div>
        <div className="leading-6 text-[var(--syntax-keyword)] text-xs">{project.category}</div>
        <div className="leading-6" />

        {/* Metrics */}
        {project.metrics && (
          <>
            <div className="flex flex-wrap gap-2 leading-6 mb-2">
              {project.metrics.map((m, i) => (
                <span key={i} className="px-2 py-0.5 bg-[var(--syntax-keyword)]/10 border border-[var(--syntax-keyword)]/20 rounded text-xs text-[var(--syntax-keyword)]">
                  {m}
                </span>
              ))}
            </div>
            <div className="leading-6" />
          </>
        )}

        {/* Description */}
        <div className="leading-6 text-[var(--syntax-comment)]">{`## About`}</div>
        <div className="leading-6 text-[var(--vscode-editor-fg)] max-w-3xl whitespace-pre-wrap">{project.description}</div>
        <div className="leading-6" />

        {/* What I Built */}
        {project.whatIBuilt && (
          <>
            <div className="leading-6 text-[var(--syntax-comment)]">{`## What I Built`}</div>
            {project.whatIBuilt.map((item, i) => (
              <div key={i} className="leading-6 text-[var(--vscode-editor-fg)]">
                <span className="text-[var(--syntax-function)]">•</span> {item}
              </div>
            ))}
            <div className="leading-6" />
          </>
        )}

        {/* Tech */}
        <div className="leading-6 text-[var(--syntax-comment)]">{`## Technologies`}</div>
        <div className="flex flex-wrap gap-1.5 leading-6 mt-1 mb-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-[var(--vscode-editor-fg)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="leading-6" />

        {/* Integrated Protocols */}
        {project.integratedProtocols && (
          <>
            <div className="leading-6 text-[var(--syntax-comment)]">{`## Integrated Protocols`}</div>
            <div className="flex flex-wrap gap-1.5 leading-6 mt-1 mb-2">
              {project.integratedProtocols.map((p) => (
                <span key={p} className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400">
                  {p}
                </span>
              ))}
            </div>
            <div className="leading-6" />
          </>
        )}

        {/* Infrastructure */}
        {project.infrastructure && (
          <>
            <div className="leading-6 text-[var(--syntax-comment)]">{`## Infrastructure`}</div>
            <div className="flex flex-wrap gap-1.5 leading-6 mt-1 mb-2">
              {project.infrastructure.map((inf) => (
                <span key={inf} className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400">
                  {inf}
                </span>
              ))}
            </div>
            <div className="leading-6" />
          </>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <>
            <div className="leading-6 text-[var(--syntax-comment)]">{`## Links`}</div>
            <div className="flex flex-wrap gap-2 leading-6 mt-1">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--syntax-keyword)]/10 border border-[var(--syntax-keyword)]/20 rounded text-xs text-[var(--syntax-keyword)] hover:bg-[var(--syntax-keyword)]/20 transition-colors"
                >
                  {linkIcon(link.type)}
                  {link.label}
                </a>
              ))}
            </div>
            <div className="leading-6" />
          </>
        )}

        {/* Images */}
        {project.expandedImages && (
          <>
            <div className="leading-6 text-[var(--syntax-comment)]">{`## Gallery`}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 max-w-3xl">
              {project.expandedImages.map((src, i) => {
                const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
                return (
                  <div
                    key={i}
                    onClick={() => setFullscreenMedia(src)}
                    className="rounded-lg overflow-hidden border border-[var(--vscode-border)] bg-black/20 cursor-pointer hover:border-[var(--syntax-keyword)]/40 transition-colors"
                  >
                    {isVideo ? (
                      <video src={src} autoPlay loop muted playsInline className="w-full h-auto object-contain" />
                    ) : (
                      <img src={src} alt={`${project.title} ${i + 1}`} className="w-full h-auto object-contain" />
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </EditorRenderer>

      {/* Fullscreen media viewer */}
      <AnimatePresence>
        {fullscreenMedia && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenMedia(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            />
            <button
              onClick={() => setFullscreenMedia(null)}
              className="absolute top-6 right-6 z-[210] p-3 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-[201] max-w-full max-h-full flex items-center justify-center pointer-events-none"
            >
              {fullscreenMedia.endsWith(".mp4") || fullscreenMedia.endsWith(".mov") ? (
                <video
                  src={fullscreenMedia}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="max-w-full max-h-[90vh] object-contain rounded-lg pointer-events-auto cursor-zoom-out"
                  onClick={() => setFullscreenMedia(null)}
                />
              ) : (
                <img
                  src={fullscreenMedia}
                  alt="Fullscreen view"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg pointer-events-auto cursor-zoom-out"
                  onClick={() => setFullscreenMedia(null)}
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
