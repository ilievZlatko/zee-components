import * as React from 'react'

import globals from '../../global.css'
import styles from './Number.css'

import chevron from '../../assets/images/chevron-up.svg'

import { Props } from './Types'

class Number extends React.Component<Props, {}> {
  private InputNumber: React.RefObject<HTMLInputElement> = React.createRef();

  stepUp = () => {
    this.InputNumber.current && this.InputNumber.current.stepUp()
  }

  stepDown = () => {
    this.InputNumber.current && this.InputNumber.current.stepDown()
  }

  render(): JSX.Element {
    const {
      id,
      label,
      name,
      required,
      step,
      min,
      max,
      placeholder,
      value,
      onChange
    } = this.props

    return (
      <div className={styles.NumbertWrapper}>
        <label className={globals.Label} htmlFor={id}>{label}</label>
        <input
          ref={this.InputNumber}
          className={globals.Input}
          type="number"
          id={id}
          name={name}
          required={required}
          step={step}
          max={max}
          min={min}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <img src={chevron} alt='Up spinner' className={styles.Up} onClick={this.stepUp} />
        <img src={chevron} alt='Down spinner' className={styles.Down} onClick={this.stepDown} />
      </div>
    )
  }
}

export default Number
