"use client";

import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const ReactTerminal = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>,
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <Terminal
      name="React Terminal Usage Example"
      colorMode={ColorMode.Dark}
      onInput={(terminalInput) =>
        console.log(`New terminal input received: '${terminalInput}'`)
      }
      height="100%"
    >
      {terminalLineData}
    </Terminal>
  );
};

export default ReactTerminal;
