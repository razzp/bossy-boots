/* eslint-env node */

import { readFile, writeFile } from 'fs/promises';
import Handlebars from 'handlebars';
import jsdoc from 'jsdoc-api';

import {
    formatParamName,
    formatParamType,
    getAbstractionGroups,
    getInstanceNodes,
    getNodes,
    getTypeNodes,
    loadPartials,
    paramsToString,
    typeAbstractionTransformer,
    valueEquals,
    wrapCode,
} from './utils.js';

async function run() {
    // Start a timer.
    console.time('Finished');

    // Load and register Handlebars partials.
    for (const { name, template } of await loadPartials()) {
        Handlebars.registerPartial(name, template);
    }

    // Register Handlebars helpers.
    Handlebars.registerHelper('paramsToString', paramsToString);
    Handlebars.registerHelper('formatParamName', formatParamName);
    Handlebars.registerHelper('formatParamType', formatParamType);
    Handlebars.registerHelper('valueEquals', valueEquals);

    // Load and compile the Handlebars template.
    const render = Handlebars.compile(
        await readFile('./bin/docs/template.hbs', 'utf8')
    );

    // Get the documentation data from JSDoc.
    const docData = await jsdoc.explain({
        files: './dist/main.js',
    });

    // Build the model that we'll pass to Handlebars to render.
    const model = {
        api: [
            {
                name: 'Assertions',
                methods: getNodes(docData, 'Assertions'),
                members: [
                    {
                        name: 'Instance',
                        id: 'Assertions.Instance',
                        methods: getInstanceNodes(docData, 'Assertions'),
                    },
                    {
                        name: 'Type',
                        id: 'Assertions.Type',
                        methods: getTypeNodes(docData, 'Assertions'),
                    },
                ],
            },
            {
                name: 'Guards',
                members: [
                    {
                        name: 'Instance',
                        id: 'Guards.Instance',
                        methods: getInstanceNodes(docData, 'Guards'),
                    },
                    {
                        name: 'Type',
                        id: 'Guards.Type',
                        methods: getTypeNodes(docData, 'Guards'),
                    },
                ],
            },
            {
                name: 'Common use-case wrappers',
                id: 'Abstractions',
                abstractions: [
                    {
                        name: 'Instance',
                        id: 'Abstractions.Instance',
                        groups: getAbstractionGroups(
                            getNodes(
                                docData,
                                ['Assertions.Instance', 'Guards.Instance'],
                                /(?:assertIs|is)(?!(?:Not)?InstanceOf)(Not)?(\w+)/
                            ),
                            wrapCode
                        ),
                    },
                    {
                        name: 'Type',
                        id: 'Abstractions.Type',
                        groups: getAbstractionGroups(
                            getNodes(
                                docData,
                                ['Assertions.Type', 'Guards.Type'],
                                /(?:assertIs|is)(?!(?:Not)?TypeOf)(Not)?(\w+)/
                            ),
                            typeAbstractionTransformer
                        ),
                    },
                ],
            },
            {
                name: 'Utils',
                methods: getNodes(docData, 'Utils'),
            },
        ],
    };

    // TESTING: Write the model to disk so it can be inspected.
    //await writeFile('./docs.temp.json', JSON.stringify(model));

    // Render the docs.
    const output = render(model);

    // Write the output to disc.
    await writeFile('./README.md', output);

    // Stop the timer.
    console.timeEnd('Finished');
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
