import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'],
              extensions: [
                '.ts',
                '.tsx',
                '.jsx',
                '.js',
                '.json',
              ],
              alias: { 
                '@components': './src/components',
                '@configs': './src/configs',
                '@pages': './src/pages',
                '@assets': './src/assets',
                '@routes': './src/routes',
                '@utils': './src/utils',
              },
            },
          ],
        ]
      }
    }
  )],
})
