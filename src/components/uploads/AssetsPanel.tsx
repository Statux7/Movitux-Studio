import React from 'react';
import { useEditorStore } from '../../core/editorStore';
import { motion, AnimatePresence } from 'motion/react';

export function AssetsPanel() {
  const assets = useEditorStore((state) => state.assets);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <AnimatePresence>
        {assets.map((asset) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="aspect-square bg-[var(--dark2)] rounded-2xl p-2 relative overflow-hidden group border border-[var(--dark2)] hover:border-[var(--gray3)] transition-colors"
          >
            {asset.type === 'video' && <video src={asset.src} className="w-full h-full object-cover rounded-xl" />}
            {asset.type === 'image' && <img src={asset.src} className="w-full h-full object-cover rounded-xl" />}
            {asset.type === 'audio' && <div className="w-full h-full bg-[var(--dark1)] flex items-center justify-center rounded-xl font-mono text-[var(--gray7)] text-xs text-center p-2">Audio Track</div>}
            
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[var(--dark1)] to-transparent text-[var(--white)] text-[10px] truncate opacity-0 group-hover:opacity-100 transition-opacity">
              {asset.name}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
