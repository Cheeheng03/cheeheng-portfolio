"use client";

import { useVSCode } from "@/hooks/use-vscode-store";
import { getProjectIdFromPath } from "@/lib/file-system";
import { ReadmePage } from "@/components/editor/ReadmePage";
import { AboutPage } from "@/components/editor/AboutPage";
import { ProjectPage } from "@/components/editor/ProjectPage";
import { ProjectsIndex } from "@/components/editor/ProjectsIndex";
import { ExperiencePage } from "@/components/editor/ExperiencePage";
import { SkillsPage } from "@/components/editor/SkillsPage";
import { AchievementsPage } from "@/components/editor/AchievementsPage";
import { ContactPage } from "@/components/editor/ContactPage";

export function EditorArea() {
  const { state } = useVSCode();
  const activeTab = state.activeTab;

  if (!activeTab) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[var(--vscode-editor-bg)] text-[var(--vscode-line-number)]">
        <div className="text-center space-y-2">
          <div className="text-4xl font-light opacity-20">VS Code</div>
          <div className="text-sm">Open a file from the explorer or use the terminal</div>
        </div>
      </div>
    );
  }

  const projectId = getProjectIdFromPath(activeTab);

  const content = (() => {
    if (activeTab === "/README.md") return <ReadmePage />;
    if (activeTab === "/about.md") return <AboutPage />;
    if (activeTab === "/experience.md") return <ExperiencePage />;
    if (activeTab === "/skills.md") return <SkillsPage />;
    if (activeTab === "/achievements.md") return <AchievementsPage />;
    if (activeTab === "/contact.md") return <ContactPage />;
    if (activeTab === "/projects") return <ProjectsIndex />;
    if (projectId) return <ProjectPage projectId={projectId} />;
    return (
      <div className="flex-1 flex items-center justify-center text-[var(--vscode-line-number)]">
        Unknown file: {activeTab}
      </div>
    );
  })();

  return (
    <div className="flex-1 overflow-auto bg-[var(--vscode-editor-bg)] custom-scrollbar">
      {content}
    </div>
  );
}
