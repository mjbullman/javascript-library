import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        ignores: ['dist/'],
    },
    {
        files: ['src/**/*.{js,mjs,cjs,ts,mts,cts}'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
        rules: {
            indent: ['error', 4],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
])
