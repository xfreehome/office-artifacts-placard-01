import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard for an ordinary office object, treated as an
// ancient artifact. Gate: 1-180 characters, single line, UTF-8 text.
// Entry is 168 characters, one line, no trailing newline.
const entry =
  "Stapler, c. 1987. Steel binding idol of the open-plan temple; a clerk pressed its head and two loose sheets became one flesh. Donated by Accounts, who never forgave it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
