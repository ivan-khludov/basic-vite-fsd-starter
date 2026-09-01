import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    ignores: ['**/*.stories.tsx', 'src/vendor/**']
  },
  {
    // CSS-only segment: an index.ts would export nothing.
    files: ['src/shared/styles/**'],
    rules: {
      'fsd/public-api': 'off'
    }
  },
  {
    rules: {
      // A starter intentionally ships thin reference slices, and merging them
      // would erase the example of the layer structure.
      'fsd/insignificant-slice': 'off',
      // `providers`, `store` and `utils` are the segment names fixed by the
      // project conventions in AGENTS.md.
      'fsd/segments-by-purpose': 'off'
    }
  }
]);
