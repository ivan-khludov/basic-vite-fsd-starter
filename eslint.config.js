import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import prettierConfig from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const PERFECTIONIST_GROUPS = [
  '1-data',
  '2-state-flags',
  '3-style',
  '4-children',
  '5-callbacks'
];

const PERFECTIONIST_STATE_FLAGS_PATTERN =
  '^(?:is[A-Z].*|has[A-Z].*|can[A-Z].*|should[A-Z].*|show[A-Z].*)$';

const perfectionistCustomGroups = (selector) => [
  {
    groupName: '2-state-flags',
    selector,
    elementNamePattern: PERFECTIONIST_STATE_FLAGS_PATTERN
  },
  {
    groupName: '3-style',
    selector,
    elementNamePattern: '^(?:className|style)$'
  },
  { groupName: '4-children', selector, elementNamePattern: '^children$' },
  { groupName: '5-callbacks', selector, elementNamePattern: '^on[A-Z].*' },
  { groupName: '1-data', selector, elementNamePattern: '.*' }
];

// Playwright specs live in e2e/ and use a different query API, so the
// Testing Library rules stay scoped to unit tests.
const UNIT_TEST_FILES = [
  'src/**/*.{test,spec}.{ts,tsx}',
  'src/shared/testing/**/*.{ts,tsx}'
];

export default defineConfig([
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'playwright-report',
      'test-results',
      '*.config.js',
      'pnpm-lock.yaml',
      '.tmp',
      '.tmp/**',
      'src/vendor',
      'src/vendor/**'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      perfectionist,
      prettier,
      'unused-imports': unusedImports
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      ...react.configs.recommended.rules,
      curly: ['error', 'all'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['if', 'for', 'while', 'switch']
        },
        {
          blankLine: 'always',
          prev: ['if', 'for', 'while', 'switch'],
          next: '*'
        },
        { blankLine: 'always', prev: '*', next: 'return' }
      ],
      // src/vendor is gitignored shadcn CLI output, so importing it breaks
      // builds from a fresh clone.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/vendor', '@/vendor/*', '**/vendor/shadcn/*'],
              message:
                'src/vendor is untracked shadcn CLI output. Port the component into src/shared/ui instead of importing it.'
            }
          ]
        }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-useless-fragment': 'warn',
      'react/self-closing-comp': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'unsorted',
          groups: PERFECTIONIST_GROUPS,
          customGroups: perfectionistCustomGroups('property'),
          useConfigurationIf: {
            declarationMatchesPattern: '.*Props$'
          }
        },
        { type: 'unsorted' }
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'unsorted',
          groups: PERFECTIONIST_GROUPS,
          customGroups: perfectionistCustomGroups('prop')
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_'
        }
      ],
      'prettier/prettier': 'error'
    }
  },
  {
    // Type-aware rules only work with a linked TS program.
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ]
    }
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: { 'react-refresh': reactRefresh },
    rules: { 'react-refresh/only-export-components': 'warn' }
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['src/{app,pages,widgets,features}/**/*.{js,jsx,ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended
  },
  {
    files: ['src/shared/ui/**/*.{js,jsx,ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
    rules: Object.fromEntries(
      Object.entries(jsxA11y.flatConfigs.recommended.rules ?? {}).map(
        ([ruleName, ruleConfig]) => {
          if (ruleConfig === 'error') {
            return [ruleName, 'warn'];
          }

          if (Array.isArray(ruleConfig) && ruleConfig[0] === 'error') {
            return [ruleName, ['warn', ...ruleConfig.slice(1)]];
          }

          return [ruleName, ruleConfig];
        }
      )
    )
  },
  {
    files: UNIT_TEST_FILES,
    plugins: { 'testing-library': testingLibrary },
    rules: {
      ...testingLibrary.configs['flat/react'].rules,
      // Vitest runs without globals, so cleanup has to be wired up by hand.
      'testing-library/no-manual-cleanup': 'off',
      'react-refresh/only-export-components': 'off'
    }
  },
  prettierConfig
]);
