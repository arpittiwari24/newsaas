import chalk from "chalk";
import { spawn } from "child_process";
import figlet from "figlet";
import inquirer from "inquirer";

export default function installNew() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "packageManager",
        message: "Choose your package manager??",
        choices: ["bunx", "npx", "yarn"],
      },
    ])
    .then((answer) => {
      const command = answer.packageManager;
      const args = [
        "create-next-app",
        "--example",
        "https://github.com/arpittiwari24/YourNextSaas.online",
      ];

      // Execute command
      const child = spawn(command, args, { stdio: "inherit" });

      // Handle errors
      child.on("error", (error) => {
        console.error(
          chalk.redBright.bold(`Error executing command: ${error}`),
        );
      });

      // Handle close event
      child.on("close", (code) => {
        if (code !== 0) {
          console.error(
            chalk.redBright.bold(`Command exited with code ${code}`),
          );
        } else {
          // Generate ASCII art for "Happy Building"
          figlet(
            "Happy Building",
            {
              font: "Standard",
              horizontalLayout: "default",
              verticalLayout: "default",
            },
            function (err, data) {
              if (err) {
                console.error("Error:", err);
              } else {
                // Print ASCII art in blue color
                console.log(chalk.blue(data));
              }
            },
          );
        }
      });
    });
}
