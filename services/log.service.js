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
        -h for HELP;
        -s [CITY] for save city;
        -t [API_KEY] for save token;
        ${chalk.blue("--------------------------------------")}
        `
	);
};
const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.magentaBright("Weather")} in ${res.name}
        ${chalk.magentaBright("--------------------------------------")}
        ${icon}   ${res.weather[0].description}
        Temp: ${res.main.temp}, Fells like: ${res.main.feels_like}
        Humidity: ${res.main.humidity}
        Wind speed: ${res.wind.speed}
        ${chalk.magentaBright("--------------------------------------")}
        `
	);
};

export { printError, printSuccess, printHelp, printWeather };
