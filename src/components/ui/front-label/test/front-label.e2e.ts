import { newE2EPage } from '@stencil/core/testing';

describe('front-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<front-label></front-label>');

    const element = await page.find('front-label');
    expect(element).toHaveClass('hydrated');
  });
});
