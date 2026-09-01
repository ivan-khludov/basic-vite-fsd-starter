import * as tailwindPlugin from 'prettier-plugin-tailwindcss';
import { attachTvGroupsToTailwind } from 'prettier-plugin-tv-groups/attach-to-tailwind';

/** @type {import('prettier').Config} */
export default {
  trailingComma: 'none',
  semi: true,
  singleQuote: true,
  // Tailwind sorting must run last, so tv-groups is attached onto it instead of
  // being listed as a separate plugin entry.
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    attachTvGroupsToTailwind(tailwindPlugin)
  ],
  tailwindStylesheet: './src/shared/styles/globals.css',
  tailwindFunctions: ['tv', 'cn'],
  tvGroupsFunctionNames: ['tv'],
  importOrder: [
    '^react$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/app/(.*)$',
    '^@/pages/(.*)$',
    '^@/widgets/(.*)$',
    '^@/features/(.*)$',
    '^@/entities/(.*)$',
    '^@/shared/(.*)$',
    '',
    '^[./](?!.*\\.css$).*',
    '',
    '\\.css$'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
  importOrderSafeSideEffects: ['\\.css$']
};
