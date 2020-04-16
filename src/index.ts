#!/usr/bin/env node

import clear from "clear";
import figlet from "figlet";
import chalk from "chalk";
import { Command } from "commander";

const program = new Command();

clear();
console.log(
  chalk.red(figlet.textSync("pizza-cli", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("A simple pizza CLI to learn how to build CLI using node.js")
  .option("-p, --pepper", "Add pepper")
  .option("-P, --pineapple", "Add pineapple")
  .option("-pp, --pepperoni", "Add pepperoni")
  .option("-c, --cheese <type>", "Add the specified type of cheese: [marble]")
  .option("-C, --no-cheese", "You don't want cheese!?")
  .option("-m, --mushrooms", "Add mushrooms")
  .option("-h, --ham", "Add slices of ham")
  .parse(process.argv);

program.outputHelp();
