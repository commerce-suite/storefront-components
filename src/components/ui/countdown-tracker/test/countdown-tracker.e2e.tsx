import { newE2EPage } from '@stencil/core/testing';

describe('countdown-tracker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<countdown-tracker data-initial-date="2024-11-05 13:24:00" data-target-date="2024-11-06 13:24:00"></countdown-tracker>',
    );

    const element = await page.find('countdown-tracker');
    expect(element).toHaveClass('hydrated');
  });
});
