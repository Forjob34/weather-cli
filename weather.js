#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
	printHelp,
	printSuccess,
	printError,
	printWeather,
} from "./services/log.service.js";
import {
	saveKeyValue,
	TOKEN_DICTIONARY,
	getKeyValue,
} from "./services/storage.service.js";
import { getWeather, getIcon } from "./services/api.service.js";

const saveToken = async (token) => {
	if (token.lenght == false) {
		printError("No token data");
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess("Token was saved");
	} catch (error) {
		printError(error.message);
	}
};
const saveCity = async (city) => {
	if (city.lenght == false) {
		printError("No city data");
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		const weather = await getWeather();
		if (weather.cod == 200) {
			printSuccess("City was saved");
		}
	} catch (error) {
		printError(error.message);
	}
};

const getForcast = async () => {
	try {
		const city =
			process.env.CITY ??
			(await getKeyValue(TOKEN_DICTIONARY.city)) ??
			"london";
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
	} catch (error) {
		if (error?.response?.status == 404) {
			printError("wrong city");
		} else if (error?.response?.status == 401) {
			printError("not valid token");
		} else {
			printError(error.message);
		}
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		return saveCity(args.s);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	return getForcast();
};
initCLI();
