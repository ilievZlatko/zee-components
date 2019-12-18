import * as React from 'react'

import { Props, State } from './Types'
import styles from './Select.css'
import globals from '../../global.css'

import chevron from '../../assets/images/chevron-up.svg'

import Option from './Option'

class Select extends React.Component<Props, State> {
  public state = {
    isOpen: false,
    selectedOption: this.props.options[0]
  }

  componentDidMount() {
    const selectedOptionFound = this.props.options.find(option => option.value === this.props.value)
    if (selectedOptionFound) {
      this.setState({ selectedOption: selectedOptionFound })
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onSelect = (value: string|number|undefined|null) => {
    this.props.options.forEach(option => option.selected = false)
    const selectedOption = this.props.options.find(option => option.value === value)

    if (selectedOption) {
      selectedOption.selected = true
      this.props.onChange(selectedOption)
      this.setState({ isOpen: false, selectedOption })
    }
  }

  render(): JSX.Element {
    const { label, options, value } = this.props
    const { isOpen, selectedOption } = this.state

    return (
      <div className={styles.Select}>
        <span className={globals.Label} onClick={this.toggleOpen}>{label}</span>
        <div className={`${globals.Input} ${styles.Placeholder}`} onClick={this.toggleOpen}>
          {selectedOption.label}
          <img
            className={[styles.Chevron, isOpen ? styles.ChevronOpen : ''].join(' ')}
            src={chevron}
            alt="chevron"
          />
        </div>

        <div className={[styles.OptionsContainer, isOpen ? styles.OptionsContainerOpen : ''].join(' ')}>
          {
            options && options.length > 0 &&
            options.map((option, index) => (
              <Option
                key={`option-${option.value}-${index}`}
                label={option.label}
                value={option.value}
                selected={value === option.value}
                onSelect={this.onSelect}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Select
