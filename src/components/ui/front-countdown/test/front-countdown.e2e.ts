import { newE2EPage } from '@stencil/core/testing';

describe('front-countdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<front-countdown></front-countdown>');

    const element = await page.find('front-countdown');
    expect(element).toHaveClass('hydrated');
  });
});
