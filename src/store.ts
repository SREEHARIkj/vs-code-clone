import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

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
  programingLanguages: [
    {
      language: "TypeScript",
      extension: ".ts",
    },
    {
      language: "JavaScript",
      extension: ".js",
    },
    {
      language: "CSS",
      extension: ".css",
    },
    {
      language: "LESS",
      extension: "",
    },
    {
      language: "SCSS",
      extension: ".scss",
    },
    {
      language: "JSON",
      extension: ".json",
    },
    {
      language: "HTML",
      extension: ".html",
    },
    {
      language: "XML",
      extension: ".xml",
    },
    {
      language: "PHP",
      extension: ".php",
    },
    {
      language: "C#",
      extension: "",
    },
    {
      language: "C++",
      extension: ".cpp",
    },
    {
      language: "Razor",
      extension: "",
    },
    {
      language: "Markdown",
      extension: "",
    },
    {
      language: "Diff",
      extension: "",
    },
    {
      language: "Java",
      extension: ".java",
    },
    {
      language: "VB",
      extension: ".vb",
    },
    {
      language: "CoffeeScript",
      extension: "",
    },
    {
      language: "Handlebars",
      extension: "",
    },
    {
      language: "Batch",
      extension: "",
    },
    {
      language: "Pug",
      extension: "",
    },
    {
      language: "F#",
      extension: "",
    },
    {
      language: "Lua",
      extension: "",
    },
    {
      language: "Powershell",
      extension: "",
    },
    {
      language: "Python",
      extension: ".py",
    },
    {
      language: "Ruby",
      extension: "",
    },
    {
      language: "SASS",
      extension: ".sass",
    },
    {
      language: "R",
      extension: "",
    },
    {
      language: "Objective-C",
      extension: ".c",
    },
    {
      language: "React-javascript",
      extension: ".jsx",
    },
    {
      language: "React-typesctipt",
      extension: ".tsx",
    },
  ],
  // editorLanguage: "javascript",
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
  createEditorLanguage: (editorTabItem: Omit<editorTabItem, "tabId">) =>
    set((state: editorTabState) => ({
      editorTabList: [
        ...state.editorTabList,
        {
          ...editorTabItem,
          tabId: Math.random().toString(36).substring(2, 7),
        },
      ],
    })),
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
