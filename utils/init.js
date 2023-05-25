import welcome from 'cli-welcome';
import { readFile } from 'fs/promises';
import unhandled from 'cli-handle-unhandled';

const pkg = JSON.parse(
	await readFile(new URL('../package.json', import.meta.url))
);

export default ({ clear = true }) => {
	unhandled();
	welcome({
		title: `create-browser-extension`,
		tagLine: `by csalam07`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
