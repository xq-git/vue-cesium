import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'
import eslintPlugin from 'vite-plugin-eslint'

import requireTransform from 'vite-plugin-require-transform'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.js$|.vue$|.png$|.ts$|.jpg$/,
    }), //配置require
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
  ],
  resolve: {
    alias:{
      '@':path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port:5174
  },
  proxy:{
    '/': {
      target: 'http://www.baidu.com',
      changeOrigin: true,
    },
  }
})
