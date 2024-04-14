import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";

export default function steps() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "database",
        message: "Tipi Tipi Tap !! Which db do you want ??",
        choices: ["MongoDb", "Supabase"],
      },
      {
        type: "list",
        name: "Payments",
        message: "Who is your payment provider ??",
        choices: ["LemonSqueezy", "Stripe"],
      },
    ])
    .then((answers) => {
      figlet(
        "Cuming ......",
        {
          font: "Standard",
          horizontalLayout: "default",
          verticalLayout: "default",
        },
        function (err, data) {
          if (err) {
            console.error("Error:", err);
          } else {
            console.log(chalk.yellow(data));
          }
        },
      );
    });
}
