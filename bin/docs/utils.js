/* eslint-env node */

import { readFile } from 'fs/promises';
import glob from 'glob';
import path from 'path';

function formatParamName(param) {
    if (param.optional) {
        return `[${param.name}]`;
    } else if (param.variable) {
        return `...${param.name}`;
    }

    return param.name;
}

function formatParamType(type) {
    return type.names.map((name) => `\`${name}\``).join(' \\| ');
}

function getArrayPos(prefix, not) {
    switch (prefix) {
        case 'assertIs':
            return not ? 1 : 0;
        default:
            return not ? 3 : 2;
    }
}

function getAbstractionGroups(methods, nameTransformer) {
    const abstractions = methods.reduce((map, { name }) => {
        const regexp = /(assertIs|is)(Not)?(\w+)/;
        const [, prefix, not, modifier] = regexp.exec(name);
        const arrayPos = getArrayPos(prefix, not);
        const entry = map.get(modifier);

        if (entry) {
            entry.methods[arrayPos] = name;
        } else {
            map.set(
                modifier,
                ((methods) => {
                    methods[arrayPos] = name;

                    return {
                        name: modifier,
                        displayName: nameTransformer?.(modifier) ?? modifier,
                        methods,
                    };
                })(Array(4).fill(undefined))
            );
        }

        return map;
    }, new Map());

    return [...abstractions.values()];
}

function getNodes(nodes, namespaces, pattern = /.*/) {
    namespaces = Array.isArray(namespaces) ? namespaces : [namespaces];

    return nodes.filter(
        (node) => namespaces.includes(node.memberof) && node.name.match(pattern)
    );
}

function getInstanceNodes(data, category) {
    return getNodes(data, `${category}.Instance`, /InstanceOf$/);
}

function getTypeNodes(data, category) {
    return getNodes(data, `${category}.Type`, /TypeOf$/);
}

async function loadPartials() {
    return Promise.all(
        glob.sync('./bin/docs/partials/*.hbs').map(async (file) => {
            const name = path.parse(file).name;
            const template = await readFile(file, 'utf8');

            return {
                name,
                template,
            };
        })
    );
}

function paramsToString(params) {
    return params.map(formatParamName).join(', ');
}

function valueEquals(value, input) {
    return value === input;
}

export {
    formatParamName,
    formatParamType,
    getAbstractionGroups,
    getNodes,
    getInstanceNodes,
    getTypeNodes,
    loadPartials,
    paramsToString,
    valueEquals,
};
