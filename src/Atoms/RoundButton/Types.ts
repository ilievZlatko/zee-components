import * as React from 'react'

export interface Props {
  disabled?: boolean;
  onClick: (event: React.MouseEvent) => void;
  icon: string|null;
}
