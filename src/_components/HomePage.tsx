"use client";

import CDialog from "@/components/CDialog";
import CSelect from "@/components/CSelect";
import { Text, Heading } from "@/components/TextComponent";
import { useEditorStore } from "@/store";
import * as React from "react";
export interface IHomePageProps {}

export function HomePage(props: IHomePageProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isOpen, setModalOpen] = React.useState<boolean>(false);
  const { setShowEditor, programingLanguages, createEditorLanguage } =
    useEditorStore((state) => ({
      setShowEditor: state?.setShowEditor,
      programingLanguages: state?.programingLanguages,
      createEditorLanguage: state?.createEditorLanguage,
    }));

  const opetions = programingLanguages?.map((language) => ({
    label: language?.language,
    value: language?.extension,
  }));

  const handelFileCreate = async (extension: string) => {
    const { language } = programingLanguages.find(
      (p) => p.extension === extension
    );
    createEditorLanguage({
      name: "untitiled" + extension,
      language: language?.toLowerCase?.(),
      value: "",
    });
    const activeTab = useEditorStore.getState().editorTabList?.[0];
    await useEditorStore.setState({ activeTab });
    setModalOpen(false);
    setShowEditor(true);
  };
  return (
    <div className="flex align-middle justify-center w-full h-full">
      <div className="flex flex-col align-middle justify-center gap-2 w-96 h-auto">
        <CDialog
          isOpen={isOpen}
          closeOnClickOutSide
          onClose={(e) => setModalOpen(e)}
        >
          <CSelect
            placeholder="select file Type"
            options={opetions}
            onChange={handelFileCreate}
          />
        </CDialog>
        <Heading className="font-mono from-neutral-400 font-semibold">
          Visual Studio Code
        </Heading>
        <Text>Editing evolved</Text>
        <Text>Start</Text>
        <Text onClick={() => setModalOpen(true)}>New File...</Text>
        <Text onClick={() => inputRef.current?.click?.()}>Open File...</Text>
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
