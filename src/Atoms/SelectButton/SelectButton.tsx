import * as React from 'react'

import tickImg from '../../assets/images/tick-block.svg'
import { Props, State } from './Types'
import styles from './SelectButton.css'

class SelectButton extends React.Component<Props, State> {
  public state = {
    isSelected: false
  }

  toggleSelection = () => {
    if (this.props.disabled) {
      return
    }

    if (this.props.toggle) {
      this.setState((state, props) => {
        props.onClick(!state.isSelected)
        return { isSelected: !state.isSelected }
      })
      return
    }

    if (!this.props.toggle && !this.props.checked) {
      this.props.onClick(this.props.value)
    }
  }

  public render(): JSX.Element {
    const { isSelected } = this.state
    const { children, disabled, toggle, checked, className } = this.props

    return (
      <button
        type="button"
        disabled={disabled}
        className={[
          styles.SelectButton,
          (isSelected || (!toggle && checked)) ? styles['SelectButton--Selected'] : '',
          disabled ? styles.Disabled : '',
          className
        ].join(' ')}
        onClick={this.toggleSelection}
      >
        <div className={styles.ButtonText}>
          { (isSelected || (!toggle && checked)) &&
            <img
              className={styles.Tick}
              src={tickImg}
              alt="selected tick"
            />
          }
          { children }
        </div>
      </button>
    )
  }
}

export default SelectButton
