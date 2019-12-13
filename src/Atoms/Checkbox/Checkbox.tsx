import * as React from 'react'
import styles from './Checkbox.css'
import { Props } from './Types'

class Checkbox extends React.Component<Props, {}> {
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
      <div className={styles.CheckboxWrapper}>
        <input
          type="checkbox"
          id={id}
          name={name}
          className={styles.InputCheckbox}
          checked={checked}
          required={required}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
        />
        <div className={styles.Checkbox} />
        <label className={styles.Label} htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox