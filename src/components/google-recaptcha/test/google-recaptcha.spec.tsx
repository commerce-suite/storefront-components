import { newSpecPage } from '@stencil/core/testing';
import { GoogleRecaptcha } from '../google-recaptcha';

describe('google-recaptcha', () => {
  beforeEach(() => {
    global.window = global.window || ({} as Window & typeof globalThis);
    window.grecaptcha = undefined;
    window.onRecaptchaLoad = undefined;
  });

  it('should render google-recaptcha without any props', async () => {
    const page = await newSpecPage({
      components: [GoogleRecaptcha],
      html: `<google-recaptcha></google-recaptcha>`,
    });

    expect(page.root).toEqualHtml(`
      <google-recaptcha>
        <div class="g-recaptcha" id="recaptcha-${
          page.rootInstance.recaptchaId.split('-')[1]
        }"></div>
      </google-recaptcha>
    `);
  });

  it('should render google-recaptcha with site key', async () => {
    const page = await newSpecPage({
      components: [GoogleRecaptcha],
      html: `<google-recaptcha site-key="test-site-key"></google-recaptcha>`,
    });

    expect(page.root).toEqualHtml(`
      <google-recaptcha site-key="test-site-key">
        <div class="g-recaptcha" id="recaptcha-${
          page.rootInstance.recaptchaId.split('-')[1]
        }"></div>
      </google-recaptcha>
    `);

    expect(page.rootInstance.siteKey).toBe('test-site-key');
  });

  it('should generate valid recaptcha id format', async () => {
    const page = await newSpecPage({
      components: [GoogleRecaptcha],
      html: `<google-recaptcha></google-recaptcha>`,
    });

    expect(page.rootInstance.recaptchaId).toMatch(/^recaptcha-\d+$/);

    expect(page.rootInstance.recaptchaId).toMatch(/^recaptcha-/);

    const timestamp = page.rootInstance.recaptchaId.replace('recaptcha-', '');
    expect(parseInt(timestamp)).toBeGreaterThan(0);
  });

  it('should load recaptcha script when componentDidLoad is called', async () => {
    const page = await newSpecPage({
      components: [GoogleRecaptcha],
      html: `<google-recaptcha site-key="test-key"></google-recaptcha>`,
    });

    const createElementSpy = jest.spyOn(document, 'createElement');
    const appendChildSpy = jest.spyOn(document.body, 'appendChild');

    page.rootInstance.componentDidLoad();

    expect(createElementSpy).toHaveBeenCalledWith('script');
    expect(appendChildSpy).toHaveBeenCalled();
  });

  it('should emit token when recaptcha callback is triggered', async () => {
    const page = await newSpecPage({
      components: [GoogleRecaptcha],
      html: `<google-recaptcha site-key="test-key"></google-recaptcha>`,
    });

    window.grecaptcha = {
      render: jest.fn((_, options) => {
        options.callback('test-token');
      }),
    };

    const tokenSpy = jest.fn();
    page.root.addEventListener('tokenReceived', tokenSpy);

    page.rootInstance.renderRecaptcha();

    expect(tokenSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: 'test-token',
      }),
    );
  });
});
