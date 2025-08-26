import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  outExtension: () => ({ js: '.js' }),
  format: ['esm'],
  target: 'node22',
  sourcemap: true,
  clean: true,
  dts: false,
})