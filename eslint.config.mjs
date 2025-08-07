import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// const autoImportConfig = require('./.eslintrc-auto-import.json')


export default [
  // JavaScript 文件配置
  {
    files: ['**/*.{js,cjs,ts,tsx}'],
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'indent': ['error', 2, { SwitchCase: 1 }],
      '@typescript-eslint/no-require-imports':'off'
    }
  },
  // Vue 文件配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      // globals: {...globals.browser, ...globals.node,...autoImportConfig.globals},
      globals: {...globals.browser, ...globals.node},
      parser: pluginVue.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },
    },
    // extends: [
    //   'eslint:recommended',
    //   'plugin:vue/vue3-recommended',
    //   'plugin:@typescript-eslint/recommended',
    // ],
    plugins: {
      vue: pluginVue
    },
    rules: {
      // Vue 特定规则
      'vue/no-unused-components': 'error',
      'vue/require-default-prop': 'error',
      'vue/singleline-html-element-content-newline': 'error',
      'vue/multiline-html-element-content-newline': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/script-indent': ['error', 2],
      // 添加更严格的Vue规则
      'vue/no-unused-vars': 'warn',
      'vue/no-undef-components': 'off',
      'vue/no-parsing-error': 'error',
      'vue/valid-template-root': 'error',
      'vue/valid-v-for': 'warn',
      'vue/valid-v-if': 'error',
      'vue/valid-v-model': 'error',
      'vue/valid-v-on': 'error',
      'vue/valid-v-bind': 'error',
      'import-x/default': 'off',
      'import/default': 'off',
      'import-named': 'off',
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      // 基础规则
      'semi': [2,'never'],
      'no-console': 'warn',
      'no-debugger': 'off',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-extra-parens': 'warn',
      'no-func-assign': 'error',
      'no-unreachable': 'error',
      'no-else-return': 'warn',
      'no-empty-function': 'warn',
      'no-lone-blocks': 'warn',
      'no-multi-spaces': 'warn',
      'no-redeclare': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'warn',
      'no-self-compare': 'error',
      'no-useless-catch': 'error',
      'no-useless-return': 'warn',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': 'warn',
      'no-trailing-spaces': 'warn',
      'no-useless-call': 'warn',
      'no-var': 'error',
      'no-delete-var': 'off',
      'no-shadow': 'off',
      // 代码风格规则
      'dot-notation': 'warn',
      'default-case': 'warn',
      'eqeqeq': 'error',
      'curly': 'warn',
      'space-before-blocks': 'warn',
      'space-in-parens': 'warn',
      'space-infix-ops': 'warn',
      'space-unary-ops': 'warn',
      'switch-colon-spacing': 'warn',
      'arrow-spacing': 'warn',
      'array-bracket-spacing': 'warn',
      'brace-style': 'warn',
      'camelcase': 'warn',
      'max-depth': ['warn', 4],
      'max-statements': ['warn', 100],
      'max-nested-callbacks': ['warn', 3],
      'max-statements-per-line': ['warn', { 'max': 1 }],
      '@typescript-eslint/no-require-imports': 'off',
      'import-x/default': 'off',
      'import/default': 'off',
      'import-named': 'off',
      'vue/valid-v-for': 'warn',

      // Vue 规则 - 在全局规则中覆盖Vue特定规则
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['warn', { 'singleline': 5 }],
      'vue/html-indent': ['error', 2],
      'vue/html-self-closing': ['error', {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }],

      // TypeScript 规则
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // 引号规则
      'quotes': ['warn', 'single'],
      'vue/html-quotes': ['error', 'double'],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        'multiline': 'always'
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'always'
      }],
      'vue/no-deprecated-v-on-native-modifier': 'warn',
    }
  }
]
