#! /usr/bin/env node

import { program } from "commander";
import installNew from "./commands/installNew.js";
import inquirer from "inquirer";
import chalk from "chalk";
import steps from "./commands/steps.js";

program
  .command("create")
  .description("scaffold a new project using the boilerplate")
  .action(installNew);

program
  .command("stepwise")
  .description("what project do you want ??")
  .action(steps);

program.parse();
