import * as React from 'react'

import styles from './Switch.css'
import { Props } from './Types'

class Switch extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {
      name,
      checked,
      required,
      value,
      disabled,
      readonly,
      onChange,
    } = this.props

    return (
      <div className={styles.SwitchWrapper}>
        <input
          type="checkbox"
          name={name}
          className={styles.InputCheckbox}
          checked={checked}
          required={required}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
        />
        <div className={styles.Switch}>
          <div className={styles.SwitchKnob}></div>
        </div>
      </div>
    )
  }
}

export default Switch
