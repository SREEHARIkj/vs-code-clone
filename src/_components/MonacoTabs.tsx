"use client";

import { useEditorStore } from "@/store";
import * as React from "react";
import { X } from "lucide-react";

interface IMonacoTabsProps {}

interface TabButtonType {
  children: string;
  onClick?: () => any;
  onClose?: () => any;
  active?: boolean;
}

const TabButton: React.FunctionComponent<TabButtonType> = ({
  children,
  onClick,
  onClose,
  active,
}) => {
  return (
    <div
      className={`w-[6rem] 
      h=[10px] 
      flex flex-row gap-1 
      justify-between 
      items-center 
      border-2 
      px-2 
      cursor-pointer 
      select-none
    ${active ? "bg-red-200" : "bg-slate-400"}
    hover:bg-red-200
    transition
    `}
      onClick={onClick}
    >
      <div className="overflow-hidden text-sm font-medium">{children}</div>
      <div className="p-1 hover:bg-red-500 transition">
        <X size={"12px"} onClick={onClose} />
      </div>
    </div>
  );
};

const MonacoTabs: React.FunctionComponent<IMonacoTabsProps> = (props) => {
  const { editorTabList, setActiveTab , removeTab} = useEditorStore((store) => store);
  
  const [activeBtn, setActiveBtn] = React.useState<number>(0);
  return (
    <>
      <div className="flex flex-row gap-1">
        {editorTabList?.map((tab) => (
          <TabButton
            key={tab.tabId}
            onClick={() => {
              setActiveTab(tab.tabId);
              setActiveBtn(tab.tabId);
            }}
            onClose={()=>removeTab(tab.tabId)}
            active={tab.tabId === activeBtn}
          >
            {tab.name}
          </TabButton>
        ))}
      </div>
    </>
  );
};

export default MonacoTabs;
