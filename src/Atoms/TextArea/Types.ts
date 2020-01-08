import * as React from 'react'

export interface Props {
  label?: string;
  id: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  size?: number|undefined;
  placeholder?: string;
  maxLength?: number|undefined;
  minLength?: number|undefined;
  rows?: number|undefined;
  cols?: number|undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
