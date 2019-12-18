import * as React from 'react'

export interface Props {
  to?: string|undefined|null;
  target?: string|undefined;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  icon?: string;
}
