import { Component, Host, h, Prop, EventEmitter, Event, Listen, State } from '@stencil/core'

@Component({
  tag: 'emm-input',
  styleUrl: 'emm-input.css',
  shadow: true,
})
export class EmmInput {
  @Prop() allowClear: boolean = false
  @Prop() bordered: boolean = true
  @Prop() defaultValue: string = ''
  @Prop() disabled: boolean = false
  @Prop() maxLength: number | undefined
  @Prop() size: 'large' | 'middle' | 'small' | undefined
  @Prop() type: string | undefined
  @Prop() value: string | undefined

  @State () _value: string = ''

  @Event() pressEnter!: EventEmitter<EmmInput>

  @Listen('keydown')
  handleKeyDown (ev: KeyboardEvent) {
    if (ev.key === 'Enter'){
      this.pressEnter.emit(this)
    }
  }


  @Listen('change')
  handleChange (e: Event) {
    this._value = (e.target as HTMLInputElement).value
  }

  render() {
    return (
      <Host>
        <slot name='before' />
        <slot name='prefix' />
        <input value={this._value} onChange={this.handleChange.bind(this)} />
        <slot name='suffix' />
        <slot name='after' />
      </Host>
    );
  }

}
