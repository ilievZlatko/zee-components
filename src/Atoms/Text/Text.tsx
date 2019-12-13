import * as React from 'react'

import styles from './Text.css'
import { Props } from './Types'

class Text extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {
      id,
      label,
      value,
      name,
      maxLength,
      minLength,
      placeholder,
      size,
      required,
      onChange
    } = this.props

    return (
      <div className={styles.TextWrapper}>
        <label className={styles.Label} htmlFor={id}>{label}</label>
        <input
          className={styles.Text}
          type="text"
          id={id}
          name={name}
          required={required}
          size={size}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default Text
