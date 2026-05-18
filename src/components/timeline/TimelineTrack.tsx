import React from 'react';
import { EditorClip } from '../../constants';
import { useDraggable } from '@dnd-kit/core';

export function TimelineTrack({ title, type, clips }: { title: string, type: string, clips: EditorClip[] }) {
  return (
    <div className="flex items-center gap-4 h-12 bg-[var(--dark)] rounded-lg border border-[var(--dark2)] relative">
      <div className="w-16 text-[10px] text-[var(--gray7)] font-medium pl-2 uppercase tracking-wider">{title}</div>
      <div className="flex-1 relative h-full">
        {clips.map(clip => (
          <div
            key={clip.id}
            className="absolute top-1 bottom-1 bg-[var(--dark2)] border border-[var(--gray3)] rounded-md flex items-center px-2 text-[10px] text-[var(--whiteb)] font-mono"
            style={{ left: `${clip.start * 10}px`, width: `${clip.duration * 10}px` }}
          >
            {clip.id.substring(0, 4)}...
          </div>
        ))}
      </div>
    </div>
  );
}
