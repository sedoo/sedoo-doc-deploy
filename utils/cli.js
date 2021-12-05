const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear: {
        type: `boolean`,
        default: true,
        alias: `c`,
        desc: `Clear the console`
    },
    noClear: {
        type: `boolean`,
        default: false,
        desc: `Don't clear the console`
    },
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Print debug info`
    },
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`
    },
    folder: {
        type: `string`,
        alias: `f`,
        desc: `local folder of the documentation`,
        default: `./docs/.vuepress/dist`
    },
    service: {
        type: `string`,
        alias: `s`,
        default: `https://services.aeris-data.fr/cdn/documentation/v1_0/upload/`,
        desc: `Url of the CDN service`
    },
    project: {
        type: `string`,
        alias: `p`,
        desc: `Project name`,
        isRequired: true
    }
};

const commands = {
    help: { desc: `Print help info` }
};

const helpText = meowHelp({
    name: `doc-deploy`,
    flags,
    commands
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags
};

module.exports = meow(helpText, options);