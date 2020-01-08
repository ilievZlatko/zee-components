import * as React from 'react'

import globals from '../../global.css'
import styles from './TextArea.css'
import { Props } from './Types'

class TextArea extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {
        id,
        cols,
        rows,
        placeholder,
        disabled=false,
        required=false,
        name='textarea',
        maxLength,
        minLength,
        label,
        value,
        onChange
      } = this.props

    return (
      <div className={styles.TextAreaWrapper}>
        {label && <label className={globals.Label} htmlFor={id}>{label}</label> }
        <textarea
          className={globals.Input}
          required={required}
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          onChange={onChange}
          value={value}
        ></textarea>
      </div>
    )
  }
}

export default TextArea
