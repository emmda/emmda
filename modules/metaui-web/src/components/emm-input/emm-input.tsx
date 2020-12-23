import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'emm-input',
  styleUrl: 'emm-input.css',
  shadow: true,
})
export class EmmInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
