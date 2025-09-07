// Types for the diagramming tool

export interface Diagram {
  id: string;
  name: string;
  folderId: string;
  data: Record<string, unknown>; // tldraw data
  createdAt: Date;
  updatedAt: Date;
}

export interface Folder {
  id: string;
  name: string;
  color?: string;
  createdAt: Date;
}

export interface AppData {
  folders: Folder[];
  diagrams: Diagram[];
}

export const DEFAULT_FOLDER_ID = "default";
