import * as React from 'react'

import styles from './Option.css'
import { Props } from './Types'
import tick from '../../../assets/images/tick-block.svg'

class Option extends React.Component<Props, {}> {
  render(): JSX.Element {
    const { label, selected, value, onSelect } = this.props

    return (
      <div
        className={[styles.Option, selected ? styles.OptionSelected : ''].join(' ')}
        onClick={() => onSelect && onSelect(value)}
      >
        <span className={styles.OptionLabel}>
          { selected && <img className={styles.Tick} src={tick} alt="selected"/> }
          {label}
        </span>
      </div>
    )
  }
}

export default Option
