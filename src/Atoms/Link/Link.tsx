import * as React from 'react'

import { Props } from './Types'
import styles from './Link.css'

class Link extends React.Component<Props, {}> {
  render(): JSX.Element {
    const { children, to, onClick, icon, target } = this.props

    return (
      <a className={styles.Link} target={target} href={to ? to : undefined} onClick={onClick && onClick}>
        {icon && <img className={styles.Icon} src={icon} alt='icon' />}
        {children}
      </a>
    )
  }
}

export default Link
