module.exports = {
    env: {
        browser: true,
    },
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'import/resolver': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        'vue/no-multiple-template-root': 0,
        'import/prefer-default-export': 'off',
    },
}
