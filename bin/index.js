#!/usr/bin/env node

import "dotenv/config";

import { generateText } from "ai";
import { params } from "../src/ai.js";
import { isFileExist } from "../src/utils.js";

if (!isFileExist()) {
  process.exit(1);
}

const { text } = await generateText(params);

console.log(text);
