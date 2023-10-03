import { newE2EPage } from '@stencil/core/testing';

describe('front-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<front-button></front-button>');

    const element = await page.find('front-button');
    expect(element).toHaveClass('hydrated');
  });
});
