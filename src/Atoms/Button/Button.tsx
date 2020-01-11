import * as React from 'react'
import { TProps } from './Types'

import styles from './Button.css'

class Button extends React.Component<TProps, {}> {
  public static defaultProps = {
    children: 'submit',
    type: 'button',
    primary: true,
    secondary: false,
    confirm: false,
    neutral: false,
    tertiary: false,
    disabled: false,
    icon: null
  }

  public render(): JSX.Element {
    const { children, type, secondary, confirm, tertiary, neutral, onClick, disabled, icon } = this.props

    let styleType

    if (neutral) {
      styleType = 'neutral'
    } else if (secondary) {
      styleType = 'secondary'
    } else if (tertiary) {
      styleType = 'tertiary'
    } else if (confirm) {
      styleType = 'confirm'
    } else {
      styleType = 'primary'
    }

    return (
      <button
        disabled={disabled}
        className={`${styles.btn} ${styles[styleType]}`}
        type={type}
        onClick={e => onClick(e)}
      >
        {icon && <img src={icon} alt="icon" className={styles.Icon} />}
        {children}
      </button>
    )
  }
}

export default Button
