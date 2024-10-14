/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'node',
    environment: 'node',
    globals: true,
  },
})
