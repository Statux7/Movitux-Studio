export const THEME = {
  colors: {
    dark: '#000000',
    dark1: '#111111',
    dark2: '#222222',
    gray7: '#777777',
    gray3: '#333333',
    white: '#ffffff',
    whiteb: '#bbbbbb',
  },
};

export const ASPECT_RATIOS = {
  '9:16': { width: 9, height: 16, label: '9:16' },
  '16:9': { width: 16, height: 9, label: '16:9' },
  '1:1': { width: 1, height: 1, label: '1:1' },
};

export interface Asset {
  id: string;
  name: string;
  type: 'video' | 'audio' | 'image';
  src: string;
  thumbnail?: string;
}

export interface TextLayer {
  id: string;
  type: 'text';
  content: string;
  x: number;
  y: number;
  fontSize: number;
  fontFamily: string;
  color: string;
  animation?: 'fade' | 'slide' | 'pop' | 'zoom';
}

export interface EditorClip {
  id: string;
  type: 'video' | 'audio' | 'image';
  src: string;
  track: 'video' | 'audio' | 'text';
  start: number;
  duration: number;
  trimmedStart?: number;
}
