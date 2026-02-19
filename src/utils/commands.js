export const commands = {
  help: [
    " Available commands:",
    " about      - who I am",
    " skills     - technical skills",
    " projects   - things I built",
    " contact    - how to reach me",
    " clear      - clear the terminal"
  ],

  about: [
    " Information Technology professional",
    " Backend / Systems / Web Development",
    " Experience in real-time systems, servers, and infrastructure."
  ],

  skills: [
    " Programming:",
    "   - JavaScript (Node.js, React, Vite)",
    "   - Java, Python",
    "",
    " Web & Backend:",
    "   - REST APIs",
    "   - Socket.IO",
    "   - MySQL",
    "",
    " Server & Infrastructure:",
    "   - VPS administration",
    "   - Apache, SSL/TLS",
    "   - Reverse proxy & optimization",
    "",
    " Linux Administration:",
    "   - SSH",
    "   - Firewall configuration",
    "   - Shell scripting & backups",
    "",
    " IoT & Networking:",
    "   - CCTV systems",
    "   - RTSP, HTTP, MQTT",
    "",
    " Digital Forensics:",
    "   - Autopsy",
    "   - Wireshark",
    "   - Data recovery & investigation"
  ],

  projects: [
    " 1. IP Camera Streaming System",
    " 2. RFID Access Control System",
    " Type: project 1 for more details"
  ],

  contact: [
    " Email: janjoshua1110@gmail.com",
    " Location: Philippines",
    " GitHub: github.com/yourname"
  ]
};

export const runCommand = (cmd, lines, setLines) => {
  if (cmd === "clear") {
    setLines([]);
    return;
  }

  if (commands[cmd]) {
    setLines((prev) => [...prev, ...commands[cmd]]);
  } else {
    setLines((prev) => [...prev, `Command not found: ${cmd}`]);
  }
};