/**
 * WorkspaceTabs — Tab bar styled like the Agents panel header.
 * Uses ◆ diamond + uppercase labels with accent color.
 */

import { useCallback } from 'react';
import { Brain, Clock, Settings, Columns3, type LucideIcon } from 'lucide-react';

export type TabId = 'memory' | 'crons' | 'config' | 'kanban';

interface Tab {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

const TABS: Tab[] = [
  { id: 'memory', label: 'Memory', icon: Brain },
  { id: 'crons', label: 'Crons', icon: Clock },
  { id: 'kanban', label: 'Tasks', icon: Columns3 },
  { id: 'config', label: 'Config', icon: Settings },
];

interface WorkspaceTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  cronCount?: number;
  kanbanCount?: number;
  kanbanEnabled?: boolean;
}

/** Horizontal tab bar for workspace sections (Memory, Crons, Skills, Config). */
export function WorkspaceTabs({ activeTab, onTabChange, cronCount, kanbanCount, kanbanEnabled = true }: WorkspaceTabsProps) {
  const tabs = kanbanEnabled ? TABS : TABS.filter((t) => t.id !== 'kanban');

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const currentIndex = tabs.findIndex(t => t.id === activeTab);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (currentIndex + 1) % tabs.length;
      onTabChange(tabs[next].id);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (currentIndex - 1 + tabs.length) % tabs.length;
      onTabChange(tabs[prev].id);
    }
  }, [activeTab, onTabChange, tabs]);

  return (
    <div
      className="panel-header border-l-[3px] border-l-purple flex items-center gap-0"
      role="tablist"
      aria-label="Workspace tabs"
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-0 flex-1 min-w-0">
      {tabs.map((tab, i) => {
        const isActive = tab.id === activeTab;
        const badge = tab.id === 'crons' && cronCount ? cronCount
          : tab.id === 'kanban' && kanbanCount ? kanbanCount
          : undefined;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`workspace-tabpanel-${tab.id}`}
            id={`workspace-tab-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            className={`panel-label cursor-pointer transition-colors bg-transparent flex items-center gap-1 border-0 px-0 focus-visible:ring-2 focus-visible:ring-purple/50 focus-visible:ring-offset-0 rounded-sm ${
              i > 0 ? 'ml-3' : ''
            } ${
              isActive
                ? 'text-purple'
                : 'text-muted-foreground hover:text-foreground opacity-60 hover:opacity-100'
            }`}
            data-active={isActive}
          >
            <Icon size={11} />
            <span className="uppercase">{tab.label}</span>
            {badge !== undefined && (
              <span className="text-[9px] opacity-70">({badge})</span>
            )}
          </button>
        );
      })}
      </div>
    </div>
  );
}
