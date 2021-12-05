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
const fs = require("fs");
const walk = require('walk');
const FormData = require('form-data');
const axios = require('axios');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, folder, service, project } = flags;

(async() => {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);

    debug && log(flags);
    var files = [];
    var walker = walk.walk(folder, { followLinks: false });

    walker.on('file', function(root, stat, next) {
        files.push(root + '/' + stat.name);
        next();
    });

    walker.on("end", function() {
        files.forEach(function(file) {
            var aux = file.split('/');
            var fileName = aux[aux.length - 1];
            var folder = '';
            if (aux.length > 0) {
                aux.pop();
                folder = aux.join('/');
            }
            const content = fs.readFileSync(file);
            const form = new FormData();
            form.append('file', content, fileName);

            axios
                .post(
                    service + '/' +
                    project +
                    '?folder=' +
                    folder +
                    '&filename=' +
                    fileName,
                    form, {
                        headers: form.getHeaders()
                    }
                )
                .then(function() {
                    console.log('Filename ' + fileName + ' has been uploaded');
                })
                .catch(function(error) {
                    console.error('Filename ' + fileName + ' has NOT been uploaded');
                    console.error(error);
                });


        });
    })

})();