# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

此项目地形有云南省地形数据，可以用于绘制云南省的地图。


## eslint校验
1增加vite.config.ts配置
    eslintPlugin({
      include: [
        'src/**/*.js',
        'src/**/*.ts',
        'src/**/*.vue',
        'src/**/*.jsx',
        'src/**/*.tsx',
      ],
      exclude: ['node_modules/**', 'dist/**'],
    }),

2增加eslint.config.mjs  校验规则
3增加tsconfig.app.json  