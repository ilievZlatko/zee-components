import * as React from 'react'

import { Props } from './Types'
import styles from './Card.css'

class Card extends React.Component<Props, {}> {
  render() {
    const { children, shadowed=false, dashed=false } = this.props

    return (
      <div className={[
        styles.Card,
        shadowed ? styles.CardShadowed : '',
        dashed ? styles.CardDashed : ''
      ].join(' ').trim()}>
        {children}
      </div>
    )
  }
}

export default Card
