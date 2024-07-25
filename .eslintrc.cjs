module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', // Uses the recommended rules from ESLint
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/jsx-runtime', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @prettier/eslint-plugin that would conflict with Prettier
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh', 'react', 'react-hooks'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-uses-react': 'off', // We don't need to import React in files
    'react/react-in-jsx-scope': 'off', // We don't need to import React in files
    'react/prop-types': 'off', // We don't need prop-types
    'react/display-name': 'off', // We don't need display name
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}
