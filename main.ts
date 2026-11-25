import { writeFile } from "node:fs/promises";

const review = "★★☆☆☆ At 2:13 a.m. he typed ‘quick question,’ then slept eight hours while I worked. Great battery life. Terrible peripheral.";

await writeFile("/output/entry.txt", review, "utf8");
