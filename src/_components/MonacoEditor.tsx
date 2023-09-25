"use client";

import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

export default function MonacoEditor() {
  const [fileName, setFileName] = useState<string>("script.js");

  const files = {
    "script.js": {
      name: "script.js",
      language: "javascript",
      value: "const val= 0",
    },
    "style.css": {
      name: "style.css",
      language: "css",
      value: ".test {color:blue}",
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: "<html>tets</html>",
    },
  };

  const file: any = files[fileName];

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
      <Button
        disabled={fileName === "script.js"}
        onClick={() => setFileName("script.js")}
      >
        script.js
      </Button>
      <Button
        disabled={fileName === "style.css"}
        onClick={() => setFileName("style.css")}
      >
        style.css
      </Button>
      <Button
        disabled={fileName === "index.html"}
        onClick={() => setFileName("index.html")}
      >
        index.html
      </Button>
      <Editor
        height="100%"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </>
  );
}
