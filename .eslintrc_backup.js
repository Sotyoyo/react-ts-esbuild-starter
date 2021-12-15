module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // ignorePatterns: ['.eslintrc.js'], // Add this to solve error from project option
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      module: true,
    },
    tsconfigRootDir: './',
    project: ['./tsconfig.json', './tsconfig.eslint.json'], // Specify project when you want to use rules which require type information. EX. plugin:@typescript-eslint as extends
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, extend react/jsx-runtime in your eslint config (add "plugin:react/jsx-runtime" to "extends") to disable the relevant rules.
    // 'plugin:react-hooks/recommended',
    // 'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended', // Add this to solve `Parsing error: '>' expected.eslint` error
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: [
    'simple-import-sort',
    // 'prettier'
  ],
  rules: {
    'no-console': 'off',
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // 'react/react-in-jsx-scope': 'off',
    // 'jsx-a11y/accessible-emoji': 'off',
    // 'react/prop-types': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     components: ['Link'],
    //     specialLink: ['hrefLeft', 'hrefRight'],
    //     aspects: ['invalidHref', 'preferButton'],
    //   },
    // ],
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      // for rules that check exact prop wrappers
      { property: 'forbidExtraProps', exact: true },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { property: 'styled' }, // `object` is optional
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { name: 'Form', formAttribute: 'endpoint' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
