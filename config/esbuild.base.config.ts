import path = require('path');

// const watchOptions = {
//     onRebuild: (error, result) => {
//         if (error) {
//             console.error('Build failed:', error);
//         } else {
//             console.log('Build succeeded');
//             clients.forEach((res) => res.write('data: update\n\n'));
//             clients.length = 0;
//         }
//     },
// };

module.exports = {
    bundle: true,
    entryPoints: [path.resolve(__dirname, '../src/index.tsx')],
    outdir: path.resolve(__dirname, '../dist'),
    outfile: 'bundle.js',
    platform: 'browser',
    // serve: ,
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error);
            else console.log('watch build succeeded:', result);
        },
    },
};
