"use client";

import CDialog from "@/components/CDialog";
import CSelect from "@/components/CSelect";
import { Text, Heading } from "@/components/TextComponent";
import useEditorStore from "@/store";
import * as React from "react";
export interface IHomePageProps {}

export function HomePage(props: IHomePageProps) {
  const inputRef = React.useRef<React.Ref>();
  const [isOpen, setModalOpen] = React.useState<boolean>(false);
  const updateLanguage = useEditorStore((state) => state?.updateEditorLanguage);
  const setShowEditor = useEditorStore((state) => state?.setShowEditor);

  return (
    <div className="flex align-middle justify-center w-full h-full">
      <div className="flex flex-col align-middle justify-center gap-2 w-96 h-auto">
        <CDialog isOpen={isOpen}>
          <CSelect
            placeholder="select file Type"
            options={[
              {
                label: "javascript",
                value: "javascript",
              },
            ]}
            onChange={(e) => {
              updateLanguage(e);
              setModalOpen(false);
              setShowEditor(true);
            }}
          />
        </CDialog>
        <Heading className="font-mono from-neutral-400 font-semibold">
          Visual Studio Code
        </Heading>
        <Text>Editing evolved</Text>
        <Text>Start</Text>
        <Text onClick={() => setModalOpen(true)}>New File...</Text>
        <Text onClick={() => inputRef.current.click()}>Open File...</Text>
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={(e) => console.log(e)}
        />
        <Text>Open Folder...</Text>
      </div>
    </div>
  );
}
