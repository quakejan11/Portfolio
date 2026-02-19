import { useState, useRef, useEffect } from "react";
import { runCommand } from "../utils/commands";

export const useTerminal = (initialLines) => {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLines((prev) => [...prev, `jan@portfolio:~$ ${input}`]);
    runCommand(input.trim(), lines, setLines);
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