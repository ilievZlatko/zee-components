import * as React from 'react'

import styles from './ExpandCollapse.css'
import { Props } from './Types'

class ExpandCollapse extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <div className={styles.ExpandCollapse}></div>
    )
  }
}

export default ExpandCollapse
