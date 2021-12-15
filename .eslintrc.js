module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, extend react/jsx-runtime in your eslint config (add "plugin:react/jsx-runtime" to "extends") to disable the relevant rules.
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // 'plugin:prettier/recommended', // Make sure this is always the last element in the array.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: './',
        project: ['./tsconfig.json', './tsconfig.eslint.json'], // Specify project when you want to use rules which require type information. EX. plugin:@typescript-eslint as extends
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-console': 'warn',
    },
};
