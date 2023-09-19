import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  }

  // enable react-profiler for production build
  if (mode === 'profile') {
    config.resolve.alias['react-dom/client'] = 'react-dom/profiling'
  }

  return config
})
