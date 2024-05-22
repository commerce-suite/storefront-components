import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'front-components',
  globalStyle: 'src/style/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: './assets' }],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: './dooca.mock.js' }, { src: './assets', dest: './build/assets' }],
    },
    vueOutputTarget({
      componentCorePackage: 'front-components',
      proxiesFile: '',
    }),
  ],
  testing: {
    browserHeadless: 'new',
    modulePathIgnorePatterns: ['<rootDir>/dist'],
  },
  plugins: [sass()],
  extras: {
    enableImportInjection: true,
  },
};
