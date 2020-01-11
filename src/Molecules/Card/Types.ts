import * as React from 'react'

export interface Props {
  shadowed?: boolean;
  dashed?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
