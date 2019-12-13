import * as React from 'react'

export interface Props {
  label: string;
  id: string;
  name?: string;
  required?: boolean;
  size?: number;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
