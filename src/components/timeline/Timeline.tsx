import React from 'react';
import { useEditorStore } from '../../core/editorStore';
import { TimelineRuler } from './TimelineRuler';
import { TimelineTrack } from './TimelineTrack';

export function Timeline() {
  const { clips } = useEditorStore();

  return (
    <div className="h-full bg-[var(--dark1)] p-4 flex flex-col gap-2 overflow-hidden border border-[var(--dark2)] rounded-tl-2xl rounded-tr-2xl">
      <TimelineRuler />
      <div className="flex-1 overflow-y-auto space-y-2">
        <TimelineTrack title="Video" type="video" clips={clips.filter(c => c.track === 'video')} />
        <TimelineTrack title="Audio" type="audio" clips={clips.filter(c => c.track === 'audio')} />
        <TimelineTrack title="Text" type="text" clips={clips.filter(c => c.track === 'text')} />
      </div>
    </div>
  );
}
