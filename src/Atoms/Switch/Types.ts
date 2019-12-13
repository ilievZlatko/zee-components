import * as React from 'react'

export type Props = {
  name: string;
  checked?: boolean;
  required?: boolean;
  value: string;
  readonly?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
