import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import dotenv from 'dotenv';

dotenv.config();

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
    collectCoverage: false,
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/*.spec.{ts,tsx}',
      '!src/**/*.e2e.{ts,tsx}',
      '!src/**/test/**',
      '!src/**/__mocks__/**',
      '!src/**/mocks/**',
      '!src/index.ts',
      '!src/components.d.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html', 'json'],
    coverageThreshold: {
      global: {
        branches: 40,
        functions: 50,
        lines: 55,
        statements: 50,
      },
    },
  },
  plugins: [sass()],
  extras: {
    enableImportInjection: true,
  },
  env: {
    WEBSOCKET_URL: process.env.WEBSOCKET_URL,
    GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
    CDN_URL: process.env.CDN_URL,
  },
};
