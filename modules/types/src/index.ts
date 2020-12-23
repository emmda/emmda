interface AnyObject<T = any> {
  [x: string]: T
}

export namespace UIMeta {
  /**
   * Types for control
   */
  export interface Control {
    name: string // the unique id of component, example: emm-input, emm-button, emm-select
    props: AnyObject // control
    children?: Control[]
    hidden?: boolean
    slot?: string // parent slot
  }

  export interface View {
    resources: {
      [ctrlName: string]: string
    }
    meta: Control
  }
}

// eg
const demo: UIMeta.View = {
  resources: {
    // one file per component
    'emm-input': 'https://emm-cdn.com/components/input.js',
    'emm-button': 'https://emm-cdn.com/components/button.js',
    'emm-container': 'https://emm-cdn.com/components/container.js',

    // or multiple components in a single file
    'another-input': 'https://another-cdn.com/components/index.js',
    'another-button': 'https://another-cdn.com/components/index.js',
  },
  meta: {
    name: 'emm-container',
    props: {},
    children: [
      {
        name: 'emm-input',
        props: {
          defaultValue: 1
        },
        slot: 'leftSlot'
      },
      {
        name: 'another-button',
        props: {
          name: 'Click Me!'
        },
        slot: 'xxx'
      }
    ]
  }
}
