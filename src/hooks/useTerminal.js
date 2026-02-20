import { useState, useRef, useEffect } from "react";
import { commands } from "../utils/commands";

export const useTerminal = (initialLines) => {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  const runCommand = (cmd) => {
    if (cmd === "clear") {
      setLines([]);
      return;
    }

    // Handle project commands
    if (cmd.startsWith('project ')) {
      const projectId = cmd.split(' ')[1];
      if (['1', '2', '3', '4', '5'].includes(projectId)) {
        window.open(`/project/${projectId}`, '_blank');
        setLines((prev) => [...prev, `📂 Opening project ${projectId} in new tab...`]);
        return;
      } else {
        setLines((prev) => [...prev, `❌ Project not found. Available: 1-5`]);
        return;
      }
    }

    if (commands[cmd]) {
      setLines((prev) => [...prev, ...commands[cmd]]);
    } else {
      setLines((prev) => [...prev, "command not found"]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLines((prev) => [...prev, `jan@portfolio:~$ ${input}`]);
    runCommand(input.trim());
    setInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return {
    lines,
    input,
    setInput,
    terminalEndRef,
    handleSubmit
  };
};