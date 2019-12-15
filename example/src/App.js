import React, { Component } from 'react'

import {
  Button,
  SelectButton,
  RoundButton,
  Radio,
  Checkbox,
  Text,
  Tag,
  Switch,
  Number,
  Select
 } from 'zee-components'

class App extends Component {
  state = {
    selectBtnVal: 'one',
    radioSelected: 'radio 1',
    optionOneSelected: true,
    text: '',
    password: '',
    switchChecked: false,
    numberVal: 0,
    options: [
      { value: null, label: 'Select option', selected: true },
      { value: 'option-1', label: 'Option 1', selected: false },
      { value: 'option-2', label: 'Option 2', selected: false },
      { value: 'option-3', label: 'Option 3', selected: false },
      { value: 'option-4', label: 'Option 4', selected: false }
    ]
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

  onTextChange = event => {
    this.setState({ text: event.currentTarget.value })
  }

  onSwitchChange = event => {
    console.log(event.currentTarget.checked)
    this.setState({ switchChecked: event.currentTarget.checked })
  }

  onNumberChange = event => {
    this.setState({ numberVal: event.currentTarget.value })
  }

  selectOption = option => {
    console.log(option)
  }

  changePass = event => {
    this.setState({ password: event.currentTarget.value })
  }

  render () {
    const { selectBtnVal, radioSelected, optionOneSelected, text, switchChecked, numberVal, options, password} = this.state

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
        >Option One</SelectButton>
        <SelectButton
          value='two'
          checked={selectBtnVal === 'two'}
          onClick={this.onSelectChange}
        >Option Two</SelectButton><br/><br/>

        <RoundButton onClick={e => console.log(e)} /><br/><br/>

        <Radio id='radio-1' name='select-radios' value='radio 1' checked={radioSelected === 'radio 1'} onChange={(e) => this.onRadioChange(e)} label='Radio 1' />
        <Radio id='radio-2' name='select-radios' value='radio 2' checked={radioSelected === 'radio 2'} onChange={(e) => this.onRadioChange(e)} label='Radio 2' />
        <Radio id='radio-3' name='select-radios' value='radio 3' checked={radioSelected === 'radio 3'} onChange={(e) => this.onRadioChange(e)} label='Radio 3' />
        <br />
        <br />
        <Checkbox id='checkbox-1' name='checkbox-1' value='option-1' checked={optionOneSelected} onChange={(e) => this.onCheckboxChange(e)} label='Option 1' />
        <br />
        <Switch name='checkbox-1' value='switch' checked={switchChecked} onChange={(e) => this.onSwitchChange(e)} />
        <br />
        <Switch name='checkbox-2' disabled value='switch2' checked={true} onChange={(e) => this.onSwitchChange(e)} />
        <br />
        <br />
        <Tag>Void</Tag>
        <Tag accepted>Accepted</Tag>
        <Tag info>Info</Tag>
        <Tag cancelled>Cancelled</Tag>
        <Tag success>Success</Tag>
        <Tag danger rounded>Danger</Tag>
        <br/>
        <br/>
        <Text id='text' label='Label' placeholder='Your name' value={text} onChange={(e) => this.onTextChange(e)} /><br />
        <Text id='passsword' type='password' label='Password' placeholder='Your password' value={password} onChange={(e) => this.changePass(e)} />
        <br />
        <br />
        <Number id='number' value={numberVal} onChange={(e) => this.onNumberChange(e)} label='Number label' />
        <br />
        <br />
        <Select label='Select' options={options} onChange={option => this.selectOption(option)} />
      </div>
    )
  }
}

export default App
