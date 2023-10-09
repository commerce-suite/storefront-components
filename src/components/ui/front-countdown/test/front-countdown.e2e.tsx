import { newE2EPage } from '@stencil/core/testing';

describe('front-countdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<front-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2024-11-06 13:24:00"></front-countdown>',
    );

    const element = await page.find('front-countdown');
    expect(element).toHaveClass('hydrated');
  });
});
