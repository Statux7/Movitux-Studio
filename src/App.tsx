/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Upload, Type, Music, Zap, Layers, FileVideo } from 'lucide-react';
import { UploadArea } from './components/uploads/UploadArea';
import { AssetsPanel } from './components/uploads/AssetsPanel';
import { PreviewCanvas } from './components/preview/PreviewCanvas';
import { TextEditorPanel } from './components/text/TextEditorPanel';
import { Timeline } from './components/timeline/Timeline';

export default function App() {
  const [activeTool, setActiveTool] = useState<string>('Uploads');

  const sidebarItems = [
    { icon: Upload, label: 'Uploads' },
    { icon: Type, label: 'Text' },
    { icon: Music, label: 'Audio' },
    { icon: Zap, label: 'Effects' },
    { icon: Layers, label: 'Templates' },
    { icon: FileVideo, label: 'Assets' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[var(--dark)] text-[var(--white)] overflow-hidden font-sans">
      {/* Topbar */}
      <header className="h-16 border-b border-[var(--dark2)] flex items-center justify-between px-6 bg-[var(--dark1)]/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--white)]/10 flex items-center justify-center">M</div>
          <h1 className="text-lg font-semibold tracking-tight">Movitux Studio</h1>
          <span className="text-[var(--gray7)] text-xs ml-2">Minimal tools. Maximum control.</span>
        </div>
        <div className="flex gap-4">
          <button className="text-sm text-[var(--gray7)] hover:text-[var(--white)] transition-colors">Save Template</button>
          <button className="bg-[var(--white)] text-[var(--dark)] px-5 py-2 rounded-full text-sm font-medium hover:bg-[var(--whiteb)] transition-colors">Export Project</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-16 border-r border-[var(--dark2)] flex flex-col items-center py-6 gap-6 bg-[var(--dark1)]/30">
          {sidebarItems.map((item, i) => (
            <button 
              key={i} 
              onClick={() => setActiveTool(item.label)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeTool === item.label 
                  ? 'bg-[var(--dark2)] text-[var(--white)]' 
                  : 'text-[var(--gray7)] hover:text-[var(--white)] hover:bg-[var(--dark2)]'
              }`}
            >
              <item.icon className="w-5 h-5" />
            </button>
          ))}
        </aside>

        {/* Dynamic Panel */}
        {activeTool === 'Uploads' && (
          <div className="w-72 border-r border-[var(--dark2)] bg-[var(--dark1)] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-[var(--dark2)] font-medium text-sm">Uploads</div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <UploadArea />
              </div>
              <AssetsPanel />
            </div>
          </div>
        )}
        
        {activeTool === 'Text' && (
          <div className="w-72 border-r border-[var(--dark2)] bg-[var(--dark1)] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-[var(--dark2)] font-medium text-sm">Text Layers</div>
            <div className="flex-1 overflow-y-auto">
              <TextEditorPanel />
            </div>
          </div>
        )}

        {/* Preview & Timeline */}
        <div className="flex-1 flex flex-col">
          <PreviewCanvas />
          
          <footer className="h-40 border-t border-[var(--dark2)] bg-[var(--dark1)]/50">
            <Timeline />
          </footer>
        </div>
      </div>
    </div>
  );
}

