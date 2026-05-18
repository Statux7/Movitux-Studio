import React from 'react';
import { useEditorStore } from '../../core/editorStore';
import { ASPECT_RATIOS } from '../../constants';
import { motion } from 'motion/react';
import { PreviewControls } from './PreviewControls';

export function PreviewCanvas() {
  const { aspectRatio, clips, layers, updateLayer, activeLayerId, setActiveLayerId } = useEditorStore();
  const ratio = ASPECT_RATIOS[aspectRatio];

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[var(--dark)] p-8 overflow-hidden">
      <div 
        className="w-full max-w-[400px] bg-[var(--dark1)] border border-[var(--dark2)] rounded-3xl shadow-2xl overflow-hidden relative"
        style={{ aspectRatio: `${ratio.width}/${ratio.height}` }}
        onClick={() => setActiveLayerId(null)}
      >
        {clips.length === 0 && layers.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--dark2)] flex items-center justify-center mb-4">
              <span className="text-xl text-[var(--gray7)]">+</span>
            </div>
            <h3 className="text-[var(--white)] font-medium mb-1">Your next viral clip</h3>
            <p className="text-[var(--gray7)] text-xs">Drop your story here.</p>
          </div>
        ) : (
          <div className="absolute inset-0">
             {layers.map((layer) => (
                <motion.div
                  key={layer.id}
                  drag
                  dragBounds="parent"
                  initial={{ x: layer.x, y: layer.y }}
                  animate={{ x: layer.x, y: layer.y }}
                  onDragEnd={(_, info) => updateLayer(layer.id, { x: layer.x + info.offset.x, y: layer.y + info.offset.y })}
                  onClick={(e) => { e.stopPropagation(); setActiveLayerId(layer.id); }}
                  className={`absolute cursor-move p-2 rounded ${activeLayerId === layer.id ? 'border border-[var(--white)]' : 'border border-transparent'}`}
                >
                  <span style={{ fontSize: layer.fontSize, color: layer.color }}>{layer.content}</span>
                </motion.div>
             ))}
          </div>
        )}
      </div>
      
      <PreviewControls />
    </div>
  );
}
