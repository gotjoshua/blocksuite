import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/tests/*.unit.spec.ts'],
    testTimeout: 500,
    coverage: {
      provider: 'istanbul', // or 'c8'
      reporter: ['lcov'],
      reportsDirectory: '../../.coverage/store',
    },
  },
});
