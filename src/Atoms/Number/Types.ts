import * as React from 'react'

export interface Props {
  id: string;
  label?: string;
  name?: string;
  required?: boolean;
  step?: number;
  min?: number;
  max?: number;
  placeholder?: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
