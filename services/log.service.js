import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
	console.log(`${chalk.red("[ERROR]")} -- ${error}`);
};

const printSuccess = (message) => {
	console.log(`${chalk.green("[SUCCESS]")} -- ${message}`);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.blue("HELP")}
        ${chalk.blue("--------------------------------------")}
        Without params - view default weather;
        -s [CITY] to view city weather;
        -h for HELP;
        -t [API_KEY] for save token;
        ${chalk.blue("--------------------------------------")}
        `
	);
};

export { printError, printSuccess, printHelp };
