import { newE2EPage } from '@stencil/core/testing';

describe('front-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<front-checkbox></front-checkbox>');

    const element = await page.find('front-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
