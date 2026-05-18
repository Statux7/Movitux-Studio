import React from 'react';
import { useEditorStore } from '../../core/editorStore';

export function TimelineRuler() {
  const { currentTime } = useEditorStore();
  
  return (
    <div className="h-6 border-b border-[var(--dark2)] relative flex items-end">
      {/* Playhead */}
      <div className="absolute top-0 w-px h-full bg-[var(--white)] z-10" style={{ left: `${currentTime * 10}px` }} />
      {/* Ruler ticks would go here */}
      <div className="text-[10px] text-[var(--gray7)] font-mono">00:00</div>
    </div>
  );
}
