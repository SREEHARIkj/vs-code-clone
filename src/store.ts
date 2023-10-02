import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type languageState = {
  editorLanguage: string;
  showEditor: boolean;
};

type editorTabItem = {
  name: string;
  language: string;
  value: string;
  tabId: number;
};

interface editorTabState {
  editorTabList: Array<editorTabItem>;
}

const editorStore = (set: any, get: any) => ({
  editorLanguage: "javascript",
  showEditor: false,
  editorTabList: [
    // {
    //   name: "script.js",
    //   language: "javascript",
    //   value: "const val= 0",
    //   tabId: 1,
    // },
    // {
    //   name: "style.css",
    //   language: "css",
    //   value: ".test {color:blue}",
    //   tabId: 2,
    // },
    // {
    //   name: "index.html",
    //   language: "html",
    //   value: "<html>tets</html>",
    //   tabId: 3,
    // },
  ],
  activeTab: {
    name: "script.js",
    language: "javascript",
    value: "const val= 0",
    tabId: 1,
  },
  addTab: (tab: editorTabItem) =>
    set((state: editorTabState) => ({
      editorTabList: [...state.editorTabList, tab],
    })),
  removeTab: (tabId: number) => {
    set((state: editorTabState) => ({
      editorTabList: state.editorTabList?.filter((tab) => tab.tabId !== tabId),
    }));
  },
  setActiveTab: (tabId: number) =>
    set((state: editorTabState) => ({
      activeTab: state.editorTabList?.find((tab) => tab.tabId === tabId),
    })),
  updateEditorLanguage: (language: string) =>
    set({
      editorLanguage: language,
    }),
  setShowEditor: (value: boolean) => set({ showEditor: value }),
});

const useEditorStore = create(subscribeWithSelector(editorStore));

const unSubEditorVis = useEditorStore.subscribe(
  (state) => state.editorTabList,
  (current, previous) =>
    current.length === 0
      ? useEditorStore.setState({ showEditor: false })
      : null,
  { fireImmediately: true }
);

export { useEditorStore, unSubEditorVis };
