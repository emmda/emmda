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
    slot?: string // parent slot
  }

  export interface View {
    resources: string[] // component urls
    meta: Control
  }
}
