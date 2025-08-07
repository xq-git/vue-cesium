const process = require('node:process')

module.exports = {
  extends: '@antfu',
  rules: {
    // 禁用语句分号
    'semi': [2, 'never'],
    'curly': [2, 'multi-line'],
    'brace-style': [2, 'stroustrup', {
      allowSingleLine: false,
    }],
    'max-statements-per-line': [2, {
      max: 1,
    }],
    // 使用单引号
    'quotes': ['error', 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // eslint 报process的错误
    'n/prefer-global/process': 0,
    'prefer-const': 0,
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/html-indent': ['warn', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1,
    }],
  },
}
