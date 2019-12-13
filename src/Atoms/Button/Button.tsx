import * as React from 'react'
import { TProps } from './btnTypes'

import styles from './Button.css'

class Button extends React.Component<TProps, {}> {
  public static defaultProps = {
    children: 'submit',
    type: 'button',
    primary: true,
    secondary: false,
    neutral: false,
    disaled: false,
    iconName: ''
  }

  public render(): JSX.Element {
    const { children, type, secondary, neutral, onClick, disabled, iconName } = this.props

    let styleType

    if (neutral) {
      styleType = 'neutral'
    } else if (secondary) {
      styleType = 'secondary'
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
        {iconName && 'icon'}
        {children}
      </button>
    )
  }
}

export default Button
