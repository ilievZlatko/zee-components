import * as React from 'react'

import globals from '../../global.css'
import styles from './Text.css'
import { Props } from './Types'
import searchSvg from '../../assets/images/search.svg';

class Text extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {
      id,
      type = 'text',
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
        {label && type !== 'search' && <label className={globals.Label} htmlFor={id}>{label}</label> }
        {type === 'search' && <img className={styles.SeachIcon} src={searchSvg} alt='search' />}
        <input
          className={[globals.Input, type === 'search' ? styles.Search : ''].join(' ')}
          type={type}
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
