import React from 'react';
import { useEditorStore } from '../../core/editorStore';
import { Plus, Type, Trash2 } from 'lucide-react';
import { TextLayer } from '../../constants';

export function TextEditorPanel() {
  const { layers, addLayer, activeLayerId, setActiveLayerId, updateLayer, removeLayer } = useEditorStore();

  const handleAddText = () => {
    const newLayer: TextLayer = {
      id: crypto.randomUUID(),
      type: 'text',
      content: 'NEW TEXT',
      x: 50,
      y: 50,
      fontSize: 24,
      fontFamily: 'Inter',
      color: '#ffffff',
    };
    addLayer(newLayer);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <button 
        onClick={handleAddText}
        className="w-full flex items-center justify-center gap-2 bg-[var(--dark2)] text-[var(--white)] py-3 rounded-xl hover:bg-[var(--gray3)] transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Text
      </button>

      <div className="flex flex-col gap-2">
        {layers.map((layer) => (
          <div 
            key={layer.id}
            onClick={() => setActiveLayerId(layer.id)}
            className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer ${
              activeLayerId === layer.id ? 'border-[var(--white)] bg-[var(--dark2)]' : 'border-[var(--dark2)] bg-[var(--dark1)]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[var(--gray7)]" />
              <input 
                value={layer.content}
                onChange={(e) => updateLayer(layer.id, { content: e.target.value })}
                className="bg-transparent border-none text-sm w-32 focus:ring-0 outline-none"
              />
            </div>
            <button onClick={() => removeLayer(layer.id)} className="text-[var(--gray7)] hover:text-[var(--white)]">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
