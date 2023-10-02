"use client";

import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";
import { useEditorStore } from "@/store";

export default function MonacoEditor() {
  const { activeTab: file } = useEditorStore((store) => store);

  function handleEditorChange(value, event) {
    // here is the current value
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <>
      {file && (
        <Editor
          height="100%"
          theme="vs-dark"
          path={file?.name}
          defaultLanguage={file?.language}
          defaultValue={file?.value}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
        />
      )}
    </>
  );
}
