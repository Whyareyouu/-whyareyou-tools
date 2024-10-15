/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier', "unused-imports","react-hooks"],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
            },
        ],
        'consistent-return': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'warn',
        'no-template-curly-in-string': 'off',
        'no-console': ['warn', { allow: ['info', 'error'] }],
        'react/prop-types': 'off',
        'react/jsx-indent': 'off',
        'react/no-children-prop': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/button-has-type': 'warn',
        'react/no-array-index-key': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/no-unstable-nested-components': 'warn',
        'arrow-body-style': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['arrow-function'],
                unnamedComponents: 'arrow-function'
            }
        ],
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        'sort-imports': 'off',
        'import/order': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'simple-import-sort/exports': 'error',
        'require-await': 'error'
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json'
            },
            extends: [
                'airbnb-typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:prettier/recommended'
            ],
            rules: {
                'import/order': 'off',
                'import/extensions': 'off',
                'import/prefer-default-export': 'off',
                'import/no-extraneous-dependencies': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unused-vars':'warn',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-unnecessary-type-assertion': 'off',
                '@typescript-eslint/restrict-template-expressions': [
                    'warn',
                    { allowBoolean: true, allowNullish: true }
                ],
                '@typescript-eslint/consistent-type-imports': [
                    'error',
                    { prefer: 'type-imports', disallowTypeAnnotations: false }
                ]
            }
        }
    ]
};