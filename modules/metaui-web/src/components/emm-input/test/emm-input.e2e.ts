import { newE2EPage } from '@stencil/core/testing';

describe('emm-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<emm-input></emm-input>');

    const element = await page.find('emm-input');
    expect(element).toHaveClass('hydrated');
  });
});
