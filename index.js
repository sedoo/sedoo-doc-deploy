#!/usr/bin/env node

/**
 * sedoo-doc-deploy
 * Stupid CLI to deploy vuepress documentation on SEDOO CDN server
 *
 * @author SEDOO <https://www.sedoo.fr>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
