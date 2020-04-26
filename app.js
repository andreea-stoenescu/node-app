const chalk = require("chalk");
const getNotes = require("./notes");

console.log(chalk.green.bgRed.bold("Success!"));

console.log(chalk`
DANGER: ${chalk.red("99%")}
WARNING: ${chalk.green("60%")}
`);
