import { mkdirSync, writeFileSync } from "node:fs";

const line = "StatueRent: we already squat every statue and rooftop in the city \u2014 seed round open to charge the humans rent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
