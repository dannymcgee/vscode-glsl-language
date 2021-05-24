import * as path from "path";
import * as cp from "child_process";
import * as chalk from "chalk";

import { name, version } from "../package.json";

(function () {
	let vsixPath = path.resolve(process.cwd(), `${name}-${version}.vsix`);

	cp.spawn("code", [`--install-extension ${vsixPath}`], {
		shell: true,
		stdio: "inherit",
	})
		.on("close", process.exit)
		.on("exit", process.exit)
		.on("error", (err) => {
			if (err.stack) {
				console.log(chalk.bold.redBright(err.stack));
			} else {
				console.log(chalk.bold.redBright(err.toString()));
			}
			process.exit(1);
		});
})();
