module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        "plugin:unicorn/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        "unicorn",
        "prettier"
    ],
    rules: {
        "max-len": ["error", { "code": 80 }]
    },
};
