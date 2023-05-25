import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import copy from 'copy-template-dir';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';

const { green: g, yellow: y, dim: d } = chalk;

export const generate = (name, templateName) => {
	const spinner = createSpinner().start();
	const outDir = name;
	const vars = { name: `${name}` };

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const inDirPath = path.join(__dirname, `../templates/${templateName}`);
	const outDirPath = path.join(process.cwd(), outDir);

	copy(inDirPath, outDirPath, vars, async (err, res) => {
		if (err) throw err;

		console.log(
			d(
				`\nCreating starter templates in ${g(
					`./${outDir}`
				)} directory:\n`
			)
		);

		res.forEach(filePath => {
			const fileName = path.basename(filePath);
			console.log(`${g(`CREATED`)} ${fileName}`);
		});
		spinner.stop();
		console.log();
		process.chdir(outDirPath);

		console.log(chalk.blue.bgYellowBright(' cd ' + outDir + ' '));
	});
};
