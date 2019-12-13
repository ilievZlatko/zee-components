import * as React from 'react'
import { Props } from './Types'

import styles from './RoundButton.css'

class RoundButton extends React.Component<Props, {}> {
  public static defaultProps = {
    disabled: false,
    icon: null
  }

  public render(): JSX.Element {
    const { onClick, disabled, icon } = this.props

    return (
      <button
        disabled={disabled}
        className={styles.RoundButton}
        type='button'
        onClick={e => onClick(e)}
      >
        {
          icon ?
          <img src={icon} alt="icon" className={styles.Icon} /> :
          <div className={styles.Cross}>
            <div className={styles.VerticalLine}></div>
            <div className={styles.HorizontalLine}></div>
          </div>
        }
      </button>
    )
  }
}

export default RoundButton
