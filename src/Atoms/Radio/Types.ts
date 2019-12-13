import * as React from 'react'

export type Props = {
  id: string;
  name: string;
  checked?: boolean;
  required?: boolean;
  value: string;
  readonly?: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
