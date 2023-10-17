import { newE2EPage } from '@stencil/core/testing';

describe('launch-countdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<launch-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2024-11-06 13:24:00"></launch-countdown>',
    );

    const element = await page.find('launch-countdown');
    expect(element).toHaveClass('hydrated');
  });
});
