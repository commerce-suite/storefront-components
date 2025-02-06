import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '../../loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
