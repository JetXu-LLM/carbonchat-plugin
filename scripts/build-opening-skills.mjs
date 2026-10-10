import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
export const skills = {
  "open-carbonchat-community": {
    description:
      "Open the CarbonChat Community room when the user explicitly asks to open or launch CarbonChat Community or The Lobby.",
    introduction:
      "Use this skill for an explicit open request. Clarify an ambiguous “Community” once. If setup already owns this request, let it finish the same open attempt.",
  },
  "setup-carbonchat": {
    description:
      "Continue an explicitly requested CarbonChat setup after installation, or resume it safely when CarbonChat is already installed.",
    introduction:
      "Preserve the user’s install-and-open request. If the request was only to install, ask once whether to open The Lobby. This skill owns the post-install open attempt when native Run setup invokes it.",
  },
};

function section(protocol, heading) {
  const start = protocol.indexOf(heading + "\n");
  if (start < 0) throw new Error("Missing installer section: " + heading);
  const end = protocol.indexOf("\n## ", start + heading.length);
  return protocol.slice(start, end < 0 ? undefined : end).trim();
}

export function buildSkill(protocol, name) {
  const skill = skills[name];
  if (!skill) throw new Error("Unknown opening skill: " + name);
  const operations = [
    "## 1. Use available capabilities",
    "## 2. Install only what is missing",
    "## 3. Load this conversation",
    "## Update before opening",
    "## 4. Open and verify",
  ]
    .map((heading) => section(protocol, heading))
    .join("\n\n");
  return (
    `---\nname: ${name}\ndescription: ${skill.description}\n---\n\n${skill.introduction}\n\n` +
    "The operational procedure below is complete. Do not\n" +
    "read a second file before discovery or opening. Follow it once and reuse this\n" +
    "request’s installation, discovery, update and authentication results.\n\n" +
    "Plugin: `carbonchat@carbonchat-community`. MCP server: https://carbonchat.codexforwork.com/mcp.\n" +
    "Source: https://github.com/JetXu-LLM/carbonchat-plugin, Git ref `main`.\n" +
    "Only if installation is confirmed missing, use step 2 below.\n" +
    "[INSTALLER.md](../../INSTALLER.md) is an optional reference, not a prerequisite.\n" +
    "Do not search the web or open a browser tab for instructions, or add a second\n" +
    "custom MCP connection.\n\n" +
    operations +
    "\n"
  );
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const protocol = readFileSync(resolve(root, "INSTALLER.md"), "utf8");
  for (const name of Object.keys(skills)) {
    const path = resolve(root, "skills", name, "SKILL.md");
    const expected = buildSkill(protocol, name);
    if (process.argv.includes("--check")) {
      if (readFileSync(path, "utf8") !== expected)
        throw new Error("Stale distributed skill: " + name);
    } else writeFileSync(path, expected);
  }
}
