import { create } from 'zustand';
import { EditorClip, Asset, TextLayer } from '../constants';

interface EditorState {
  clips: EditorClip[];
  assets: Asset[];
  layers: TextLayer[];
  aspectRatio: '9:16' | '16:9' | '1:1';
  activeClipId: string | null;
  activeLayerId: string | null;
  currentTime: number;
  addClip: (clip: EditorClip) => void;
  removeClip: (id: string) => void;
  updateClip: (id: string, updates: Partial<EditorClip>) => void;
  setCurrentTime: (time: number) => void;
  addAsset: (asset: Asset) => void;
  addLayer: (layer: TextLayer) => void;
  updateLayer: (id: string, updates: Partial<TextLayer>) => void;
  removeLayer: (id: string) => void;
  setAspectRatio: (ratio: '9:16' | '16:9' | '1:1') => void;
  setActiveClipId: (id: string | null) => void;
  setActiveLayerId: (id: string | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  clips: [],
  assets: [],
  layers: [],
  aspectRatio: '9:16',
  activeClipId: null,
  activeLayerId: null,
  currentTime: 0,
  addClip: (clip) => set((state) => ({ clips: [...state.clips, clip] })),
  removeClip: (id) => set((state) => ({ clips: state.clips.filter(c => c.id !== id) })),
  updateClip: (id, updates) => set((state) => ({
    clips: state.clips.map(c => c.id === id ? { ...c, ...updates } : c)
  })),
  setCurrentTime: (time) => set({ currentTime: time }),
  addAsset: (asset) => set((state) => ({ assets: [...state.assets, asset] })),
  addLayer: (layer) => set((state) => ({ layers: [...state.layers, layer] })),
  updateLayer: (id, updates) => set((state) => ({
    layers: state.layers.map(l => l.id === id ? { ...l, ...updates } : l)
  })),
  removeLayer: (id) => set((state) => ({ layers: state.layers.filter(l => l.id !== id) })),
  setAspectRatio: (ratio) => set({ aspectRatio: ratio }),
  setActiveClipId: (id) => set({ activeClipId: id }),
  setActiveLayerId: (id) => set({ activeLayerId: id }),
}));
