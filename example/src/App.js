import React, { Component } from 'react'

import { Button, SelectButton, RoundButton, Radio, Checkbox } from 'zee-components'

class App extends Component {
  state = {
    selectBtnVal: 'one',
    radioSelected: 'radio 1',
    optionOneSelected: true,
  }

  onSelectChange = val => {
    console.log(val)
    this.setState({selectBtnVal: val})
  }

  onRadioChange = event => {
    console.log(event.currentTarget.value)
    this.setState({ radioSelected: event.currentTarget.value })
  }

  onCheckboxChange = event => {
    this.setState({ optionOneSelected: event.currentTarget.checked })
  }

  render () {
    const { selectBtnVal, radioSelected, optionOneSelected } = this.state

    return (
      <div style={{ width: '960px', margin: '20px auto' }}>
        <Button
          onClick={(e) => console.log(e)}
        >Label</Button><br/>
        <Button
          secondary
          onClick={(e) => console.log(e)}
        >Label</Button><br/>
        <Button
          neutral
          onClick={(e) => console.log(e)}
        >Label</Button><br/>
        <Button
          tertiary
          onClick={(e) => console.log(e)}
        >Label</Button><br/><br/>

        <SelectButton toggle onClick={(val) => console.log(val)}>Toggle Selection</SelectButton><br/><br/>

        <SelectButton
          value='one'
          checked={selectBtnVal === 'one'}
          onClick={this.onSelectChange}
        >Toggle Selection</SelectButton>
        <SelectButton
          value='two'
          checked={selectBtnVal === 'two'}
          onClick={this.onSelectChange}
        >Toggle Selection</SelectButton>

        <RoundButton onClick={e => console.log(e)} /><br/><br/>

        <Radio id='radio-1' name='select-radios' value='radio 1' checked={radioSelected === 'radio 1'} onChange={(e) => this.onRadioChange(e)} label='Radio 1' />
        <Radio id='radio-2' name='select-radios' value='radio 2' checked={radioSelected === 'radio 2'} onChange={(e) => this.onRadioChange(e)} label='Radio 2' />
        <Radio id='radio-3' name='select-radios' value='radio 3' checked={radioSelected === 'radio 3'} onChange={(e) => this.onRadioChange(e)} label='Radio 3' />
        <br />
        <br />
        <Checkbox id='checkbox-1' name='checkbox-1' value='option-1' checked={optionOneSelected} onChange={(e) => this.onCheckboxChange(e)} label='Option 1' />
      </div>
    )
  }
}

export default App
