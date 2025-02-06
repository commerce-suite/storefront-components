import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import dotenv from 'dotenv';

dotenv.config();

export const config: Config = {
  namespace: 'commerce-front-components',
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
      componentCorePackage: '../../src',
      proxiesFile: './vue-component-lib/lib/components.ts',
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
  env: {
    GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
    CDN_URL: process.env.CDN_URL,
  },
};
