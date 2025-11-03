import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/bossy-boots.cjs',
            format: 'cjs',
        },
        {
            file: 'dist/bossy-boots.js',
            format: 'esm',
        },
    ],
    plugins: [typescript()],
};
