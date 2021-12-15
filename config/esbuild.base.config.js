/* eslint-disable */
const path = require('path');

module.exports = {
    bundle: true,
    entryPoints: [path.resolve(__dirname, '../src/index.tsx')],
    platform: 'browser',
};
