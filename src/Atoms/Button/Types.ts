import * as React from 'react'

export interface TProps {
  children?: React.ReactNode | string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  primary?: boolean;
  secondary?: boolean;
  neutral?: boolean;
  disabled?: boolean;
  tertiary?: boolean;
  onClick: (event: React.MouseEvent) => void;
  icon?: string|null;
}
