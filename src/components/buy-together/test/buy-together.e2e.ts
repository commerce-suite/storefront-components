import { newE2EPage } from '@stencil/core/testing';

describe('buy-together', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<buy-together></buy-together>');

    const element = await page.find('buy-together');
    expect(element).toHaveClass('hydrated');
  });
});
