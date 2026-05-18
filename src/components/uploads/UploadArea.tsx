import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { useEditorStore } from '../../core/editorStore';
import { Asset } from '../../constants';

export function UploadArea() {
  const addAsset = useEditorStore((state) => state.addAsset);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      const type = file.type.startsWith('video/') ? 'video' : 
                   file.type.startsWith('audio/') ? 'audio' : 'image';
      
      const asset: Asset = {
        id: crypto.randomUUID(),
        name: file.name,
        type,
        src: URL.createObjectURL(file), // This is okay for browser-only prototype
      };
      addAsset(asset);
    });
  };

  return (
    <div
      className={`border-2 border-dashed border-[var(--dark2)] rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer ${
        isDragging ? 'border-[var(--whiteb)] bg-[var(--dark2)]' : 'hover:border-[var(--gray3)]'
      }`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
      onClick={() => fileInputRef.current?.click()}
    >
      <Upload className="w-8 h-8 text-[var(--gray7)]" />
      <div className="text-center">
        <p className="text-[var(--white)] font-medium">Upload Assets</p>
        <p className="text-[var(--gray7)] text-sm">MP4, MP3, PNG, JPG</p>
      </div>
      <input type="file" ref={fileInputRef} className="hidden" multiple onChange={(e) => handleFiles(e.target.files)} />
    </div>
  );
}
