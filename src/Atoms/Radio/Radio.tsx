import * as React from 'react'
import styles from './Radio.css'
import { Props } from './Types'

class Radio extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {
      id,
      name,
      checked,
      required,
      value,
      disabled,
      readonly,
      onChange,
      label
    } = this.props

    return (
      <div className={styles.RadioWrapper}>
        <input
          type="radio"
          id={id}
          name={name}
          className={styles.InputRadio}
          checked={checked}
          required={required}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
        />
        <div className={styles.Radio} />
        <label className={styles.Label} htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
}

export default Radio
