import React, { Component } from 'react'

import { Button } from 'zee-components'

export default class App extends Component {
  render () {
    return (
      <div>
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
        >Label</Button>
      </div>
    )
  }
}
