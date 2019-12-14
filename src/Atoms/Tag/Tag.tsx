import * as React from 'react'

import styles from './Tag.css'
import { Props } from './Types'

class Tag extends React.Component<Props, {}> {
  render(): JSX.Element {
    const { success, info, danger, cancelled, accepted, children, rounded } = this.props

    const generateClassName = () => {
      let classname = rounded ? `${styles.Tag} ${styles.Rounded}` : styles.Tag

      switch(true) {
        case accepted:
          return classname += ` ${styles.Accepted}`
        case success:
          return classname += ` ${styles.Success}`
        case info:
          return classname += ` ${styles.Info}`
        case danger:
          return classname += ` ${styles.Danger}`
        case cancelled:
          return classname += ` ${styles.Cancelled}`
        default:
          return classname += ` ${styles.Void}`
      }
    }

    return (
      <span className={generateClassName()}>
        {children}
      </span>
    )
  }
}

export default Tag
