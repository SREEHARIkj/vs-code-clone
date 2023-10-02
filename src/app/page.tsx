"use client";

import { HomePage } from "@/_components/HomePage";
import MonacoTabs from "@/_components/MonacoTabs";
import { useEditorStore } from "@/store";
import React, { Suspense, useEffect } from "react";
const MonacoEditor = React.lazy(() => import("../_components/MonacoEditor"));
const ReactTerminal = React.lazy(() => import("../_components/ReactTerminal"));
import GridLayout from "react-grid-layout";

export default function Home() {
  const windowWidth: number = window?.innerWidth ?? 1200;
  const isEditorVisible = useEditorStore((store) => store?.showEditor);
  const layout = [
    { i: "a", x: 0, y: 0, w: 10, h: 15, static: true },
    {
      i: "b",
      x: 0,
      y: 16,
      w: 10,
      h: 2,
      minW: 2,
      maxW: 4,
      static: true,
      isResizable: true,
    },
    { i: "c", x: 10, y: 0, w: 2, h: 19, resizeHandles: ["s"] },
  ];

  return (
    <main className="h-screen">
      <Suspense fallback={<div> Editor Loading</div>}>
        <GridLayout
          cols={12}
          layout={layout}
          rowHeight={50}
          width={windowWidth}
          autoSize={true}
          resizeHandles={["n", "s", "e", "w"]}
          isDraggable={true}
          isResizable={true}
          isBounded={true}
          containerPadding={[0, 0]}
          margin={[0, 0]}
        >
          <div key="a">
            {!isEditorVisible && <HomePage />}
            {isEditorVisible && (
              <>
                <MonacoTabs />
                <MonacoEditor />
              </>
            )}
          </div>
          <div key="b">
            <ReactTerminal />
          </div>
          <div key="c" style={{ border: "2px solid black" }}></div>
        </GridLayout>
      </Suspense>
    </main>
  );
}
