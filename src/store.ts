import { create } from "zustand";

type languageState = {
  editorLanguage: string;
  showEditor: boolean;
};

const editorStore = (set: any) => ({
  editorLanguage: "javascript",
  showEditor: false,
  updateEditorLanguage: (language: string) =>
    set((state: languageState) => ({
      editorLanguage: language,
    })),
  setShowEditor: (value:boolean) =>
    set((state: languageState) => ({ showEditor: value })),
});

const useEditorStore = create(editorStore);
export default useEditorStore;
