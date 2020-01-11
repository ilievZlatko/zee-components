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
  Select,
  Link,
  TextArea,
  Card
 } from 'zee-components'

 import edit from './assets/images/edit-silh.svg'

class App extends Component {
  state = {
    selectBtnVal: 'one',
    radioSelected: 'radio 1',
    optionOneSelected: true,
    text: '',
    password: '',
    switchChecked: false,
    numberVal: 0,
    selectValue: null,
    options: [
      { value: null, label: 'Select option' },
      { value: 'option-1', label: 'Lorem ipsum' },
      { value: 'option-2', label: 'is simply dummy text' },
      { value: 'option-3', label: 'of the printing and typesetting industry.' },
      { value: 'option-4', label: 'Lorem Ipsum has been' },
      { value: 'option-5', label: 'the industry\'s standard dummy text' },
    ],
    search: ''
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
    this.setState({ selectValue: option.value })
  }

  changePass = event => {
    this.setState({ password: event.currentTarget.value })
  }

  changeSearch = event => {
    this.setState({ search: event.currentTarget.value })
  }

  render () {
    const {
      selectBtnVal,
      radioSelected,
      optionOneSelected,
      text,
      switchChecked,
      numberVal,
      options,
      password,
      selectValue,
      search
    } = this.state

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
        >Option One</SelectButton>&nbsp;&nbsp;
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
        <br />
        <Switch name='checkbox-1' value='switch' checked={switchChecked} onChange={(e) => this.onSwitchChange(e)} />
        <br />
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
        <Text id='text' label='Label' placeholder='Your name' value={text} onChange={(e) => this.onTextChange(e)} /><br /><br />
        <Text id='passsword' type='password' label='Password' placeholder='Your password' value={password} onChange={(e) => this.changePass(e)} /><br/><br />
        <Text id='search' type='search' placeholder='search' value={search} onChange={(e) => this.changeSearch(e)} />
        <br />
        <br />
        <TextArea id='textarea' label='Text here' placeholder='Place your text here' onChange={e => console.log(e.target.value)} />
        <br />
        <br />
        <Number id='number' value={numberVal} onChange={(e) => this.onNumberChange(e)} label='Number label' />
        <br />
        <br />
        <Select label='Select' options={options} value={selectValue} onChange={option => this.selectOption(option)} />
        <br />
        <br />
        <Link to='https://www.google.com/' target='_blank'>Visit Google</Link><br />
        <Link onClick={() => console.log('Execute some code here!')} icon={edit}>Edit</Link>
        <br />
        <br />
        <Card dashed>
          <div style={{
            width: '350px',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <h3>This is card title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Button
              secondary
              onClick={(e) => console.log(e)}
            >CTA Button</Button><br/>
          </div>
        </Card>
        <br />
        <br />
        <Card shadowed onClick={e => console.log(e.currentTarget)}>
          <div style={{
            width: '350px',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <h3>This is card title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Button
              onClick={(e) => console.log(e)}
            >CTA Button</Button><br/>
          </div>
        </Card>
      </div>
    )
  }
}

export default App
