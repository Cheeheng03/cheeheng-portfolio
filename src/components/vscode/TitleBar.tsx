"use client";

export function TitleBar() {
  return (
    <div className="h-[35px] bg-[var(--vscode-titlebar-bg)] flex items-center px-3 md:px-4 select-none shrink-0 border-b border-[var(--vscode-border)]">
      {/* macOS dots - hidden on mobile */}
      <div className="hidden md:flex items-center gap-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <span className="text-[var(--vscode-titlebar-fg)] text-xs font-medium flex-1 text-center truncate">
        Chee Heng Tang — Portfolio
      </span>
    </div>
  );
}
