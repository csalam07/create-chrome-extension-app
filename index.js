#!/usr/bin/env node

/**
 * create-browser-extension
 * Command Line Interface for creating google chrome entensions
 *
 * @author csalam07 <linkedin.com/in/shahbajz-alam-b47678193>
 */

import init from './utils/init.js';
import cli from './utils/cli.js';
import log from './utils/log.js';
import showTemplate from './utils/showTemplates.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	if (input.includes('help')) {
		cli.showHelp(0);
	} else {
		showTemplate(input[0]);
	}
	debug && log(flags);
})();
