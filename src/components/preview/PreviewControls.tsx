import React from 'react';
import { Play, Pause, Volume2, Maximize2 } from 'lucide-react';
import { useEditorStore } from '../../core/editorStore';
import { ASPECT_RATIOS } from '../../constants';

export function PreviewControls() {
  const { aspectRatio, setAspectRatio } = useEditorStore();

  return (
    <div className="mt-8 flex flex-col gap-4 w-full max-w-[400px]">
      {/* Scrubber */}
      <div className="h-1 bg-[var(--dark2)] rounded-full w-full overflow-hidden">
        <div className="h-full bg-[var(--white)] w-1/3" />
      </div>

      <div className="flex items-center justify-between text-[var(--gray7)]">
        <div className="flex items-center gap-4">
          <button className="hover:text-[var(--white)] transition-colors"><Play className="w-5 h-5" /></button>
          <span className="font-mono text-xs">00:00 / 00:00</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-[var(--dark1)] rounded-full p-1 border border-[var(--dark2)]">
            {Object.keys(ASPECT_RATIOS).map((ratio) => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio as any)}
                className={`px-3 py-1 rounded-full text-[10px] uppercase font-medium transition-all ${
                  aspectRatio === ratio ? 'bg-[var(--dark2)] text-[var(--white)]' : 'text-[var(--gray7)]'
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
          <button className="hover:text-[var(--white)]"><Volume2 className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
}
