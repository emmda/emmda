import { newSpecPage } from '@stencil/core/testing';
import { EmmInput } from '../emm-input';

describe('emm-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EmmInput],
      html: `<emm-input></emm-input>`,
    });
    expect(page.root).toEqualHtml(`
      <emm-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </emm-input>
    `);
  });
});
