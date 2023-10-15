/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.RAPID_API_KEY': JSON.stringify(env.RAPID_API_KEY),
      'process.env.NUMBERS_API_URL': JSON.stringify(env.NUMBERS_API_URL),
      'process.env.NUMBERS_API_HOST': JSON.stringify(env.NUMBERS_API_HOST),
      'process.env.TEXT2SPEECH_API_HOST': JSON.stringify(env.TEXT2SPEECH_API_HOST),
      'process.env.TEXT2SPEECH_API_URL': JSON.stringify(env.TEXT2SPEECH_API_URL),
      'process.env.TEXT2SPEECH_API_KEY': JSON.stringify(env.TEXT2SPEECH_API_KEY)
    },
    plugins: [react()],
  }
})