#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
	if (token.lenght == false) {
		printError("No token data");
		return;
	}
	try {
		await saveKeyValue("token", token);
		printSuccess("Token was saved");
	} catch (error) {
		printError(error.message);
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		printHelp();
	}
	if (args.s) {
		// city
	}
	if (args.t) {
		return saveToken(args.t);
	}
};

initCLI();
