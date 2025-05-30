import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/shared-lib.js',
    format: 'system',
    name: 'sharedLib'
  },
  external: ['rxjs'],
  plugins: [typescript()]
};
